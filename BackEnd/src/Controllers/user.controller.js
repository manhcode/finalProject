const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

const UserModel = require("../models/user.model");
const CourseModel = require("../models/course.model");
const MyCourseModel = require("../models/myCourse.model");
const uploadFirebase = require("../middleware/uploadFirebase");

module.exports = {
  currentUser(req, res, next) {
    UserModel.findById(req.user.id)
      .then((data) => {
        res.status(200).json({
          data: {
            _id: data._id,
            username: data.username,
            fullName: data.fullName,
            email: data.email,
            imageUrl: data.imageUrl,
            address: data.address,
            phone: data.phone,
            role: data.role,
            gender: data.gender,
          },
        });
      })
      .catch((err) => res.sendStatus(500));
  },

  register(req, res, next) {
    const handlePassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.ACCESS_TOKEN
    ).toString();

    req.body.password = handlePassword;
    const account = new UserModel(req.body);
    account
      .save()
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        if (error.keyPattern.username > 0) {
          res.status(500).json({ error: "Account already" });
        } else if (error.keyPattern.email > 0) {
          res.status(500).json({ error: "Email already" });
        } else {
          res.status(500).json({ error: error });
        }
      });
  },

  login(req, res, next) {
    UserModel.findOne({ username: req.body.username })
      .then((data) => {
        if (!data) res.status(404).json({ error: "Invalid username" });
        else {
          const hashedPassword = CryptoJS.AES.decrypt(
            data.password,
            process.env.ACCESS_TOKEN
          ).toString(CryptoJS.enc.Utf8);

          if (hashedPassword !== req.body.password) {
            return res.status(401).json({ error: "Invalid password" });
          }

          const accessToken = jwt.sign(
            {
              id: data._id,
              role: data.role,
            },
            process.env.ACCESS_TOKEN,
            {
              expiresIn: "7d",
            }
          );

          const { ...other } = data._doc;

          res.status(200).json({ ...other, token: accessToken });
        }
      })
      .catch((err) => res.sendStatus(500));
  },

  async newTeacher(req, res, next) {
    if (req.file) {
      const imageUrl = await uploadFirebase({
        file: req.file,
        name: new Date().getTime() + req.file.originalname,
        type: req.file.mimetype,
      });
      req.body.imageUrl = imageUrl;
    }
    const handlePassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.ACCESS_TOKEN
    ).toString();

    req.body.role = 1;
    req.body.password = handlePassword;
    const account = new UserModel(req.body);
    account
      .save()
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        if (error.keyPattern.username > 0) {
          res.status(500).json({ error: "Account already" });
        } else if (error.keyPattern.email > 0) {
          res.status(500).json({ error: "Email already" });
        } else {
          res.status(500).json({ error: error });
        }
      });
  },

  getTeacher(req, res, next) {
    const { page, per_page, fullName } = req.query;
    const objWhere = { role: 1 };

    if (fullName) objWhere.fullName = new RegExp(fullName, "i");

    UserModel.find(objWhere)
      .sort({ _id: -1 })
      .then((data) => {
        const currentPage = parseInt(page) || 1;
        const itemsPerPage = parseInt(per_page) || data.length;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage) || data.length;

        const items = data.slice(startIndex, endIndex);

        res.json({
          data: items,
          currentPage,
          totalPages,
        });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },

  getUser(req, res, next) {
    const { page, per_page, fullName } = req.query;
    const objWhere = { role: 2 };

    if (fullName) objWhere.fullName = new RegExp(fullName, "i");

    UserModel.find(objWhere)
      .sort({ _id: -1 })
      .then((data) => {
        const currentPage = parseInt(page) || 1;
        const itemsPerPage = parseInt(per_page) || data.length;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage) || data.length;

        const items = data.slice(startIndex, endIndex);

        res.json({
          data: items,
          currentPage,
          totalPages,
        });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },

  getUserById(req, res, next) {
    UserModel.findById(req.params.id)
      .then((data) => {
        res.json({
          fullName: data.fullName,
          email: data.email,
          gender: data.gender,
          imageUrl: data.imageUrl,
        });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },

  deleteUser(req, res, next) {
    const deleteCourse = async () => {
      await CourseModel.deleteMany({ teacherId: req.params.id });
      await MyCourseModel.deleteMany({ teacherId: req.params.id });
    };
    const deletePurchasedCourse = async () =>
      await MyCourseModel.deleteMany({ studentId: req.params.id });

    UserModel.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (data.role === 1) {
          deleteCourse();
        }
        deletePurchasedCourse();
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },

  async editUser(req, res, next) {
    if (req.file) {
      const imageUrl = await uploadFirebase({
        file: req.file,
        name: new Date().getTime() + req.params.id,
        type: req.file.mimetype,
      });
      req.body.imageUrl = imageUrl;
    } else {
      req.body.imageUrl = req.user.imageUrl;
    }

    if (req.body.password) {
      const handlePassword = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.ACCESS_TOKEN
      ).toString();
      req.body.password = handlePassword;
    } else {
      req.body.password = req.user.password;
    }

    UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },
};
