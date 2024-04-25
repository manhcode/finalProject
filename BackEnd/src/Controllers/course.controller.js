const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

const CourseModel = require("../models/course.model");
const MyCourseModel = require("../models/myCourse.model");
const uploadFirebase = require("../middleware/uploadFirebase");

module.exports = {
  async newCourse(req, res, next) {
    if (req.files) {
      const fileUrl = await uploadFirebase({
        file: req.files.file[0],
        name: new Date().getTime() + req.files.file[0].originalname,
      });
      const imageUrl = await uploadFirebase({
        file: req.files.imageUrl[0],
        name: new Date().getTime() + req.files.imageUrl[0].originalname,
        type: req.files.imageUrl[0].mimetype,
      });
      const videoUrl = await uploadFirebase({
        file: req.files.videoUrl[0],
        name: new Date().getTime() + req.files.videoUrl[0].originalname,
        type: req.files.videoUrl[0].mimetype,
      });
      req.body.file = fileUrl;
      req.body.imageUrl = imageUrl;
      req.body.videoUrl = videoUrl;
    }
    req.body.teacherId = req.user.id;
    const course = new CourseModel(req.body);
    course
      .save()
      .then((data) => {
        res.status(200).json({
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

  getCourse(req, res, next) {
    const { page, per_page, nameCourse } = req.query;
    const objWhere = {};

    if (nameCourse) objWhere.nameCourse = new RegExp(nameCourse, "i");

    CourseModel.find(objWhere)
      .sort({ _id: -1 })
      .populate("teacherId")
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

  async buyCourse(req, res, next) {
    req.body.studentId = req.user.id;
    req.body.courseId = req.params.id;
    const course = await CourseModel.findById(req.params.id);
    req.body.teacherId = course.teacherId._id;
    const checkCourse = await MyCourseModel.findOne({
      studentId: req.body.studentId,
      courseId: req.body.courseId,
    });

    if (!checkCourse) {
      const myCourse = new MyCourseModel(req.body);
      myCourse
        .save()
        .then((data) => {
          res.status(200).json({ data });
        })
        .catch((error) => res.sentStatus(500));
    }
  },

  getMyCourse(req, res, next) {
    const { page, per_page } = req.query;
    MyCourseModel.find({ studentId: req.user.id })
      .sort({ _id: -1 })
      .populate(["courseId", "studentId", , "teacherId"])
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

  getCourseById(req, res, next) {
    CourseModel.findById(req.params.id)
      .populate("teacherId")
      .then((course) => {
        res.json({ data: course });
      })
      .catch((error) => {
        res.sentStatus(500);
      });
  },

  getCourseTeacher(req, res, next) {
    const { page, per_page, nameCourse, teacherId } = req.query;
    const objWhere = { teacherId: teacherId }

    if (nameCourse) objWhere.nameCourse = new RegExp(nameCourse, "i");

    CourseModel.find(objWhere)
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

  async editCourse(req, res, next) {
    if (req.files) {
      if (req.files.file) {
        const fileUrl = await uploadFirebase({
          file: req.files.file[0],
          name: new Date().getTime() + req.files.file[0].originalname,
        });
        req.body.file = fileUrl;
      }

      if (req.files.imageUrl) {
        const imageUrl = await uploadFirebase({
          file: req.files.imageUrl[0],
          name: new Date().getTime() + req.files.imageUrl[0].originalname,
          type: req.files.imageUrl[0].mimetype,
        });
        req.body.imageUrl = imageUrl;
      }

      if (req.files.videoUrl) {
        const videoUrl = await uploadFirebase({
          file: req.files.videoUrl[0],
          name: new Date().getTime() + req.files.videoUrl[0].originalname,
          type: req.files.videoUrl[0].mimetype,
        });
        req.body.videoUrl = videoUrl;
      }
    }

    CourseModel.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.json({ data }))
      .catch((error) => res.json({ error }));
  },

  async deleteCourse(req, res, next) {
    await MyCourseModel.deleteMany({ courseId: req.params.id });
    CourseModel.findByIdAndDelete(req.params.id).then((data) =>
      res.json({ data })
    );
  },
};
