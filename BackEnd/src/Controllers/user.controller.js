const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/user.model");

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

};
