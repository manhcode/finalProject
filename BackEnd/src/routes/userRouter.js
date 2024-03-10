const express = require("express");
const router = express.Router();

const userController = require("../Controllers/user.controller");
const { verifyToken } = require("../middleware/CheckLogin");

router.post("/login", userController.login);
router.post("/register", userController.register);

router.get("/current-user", verifyToken, userController.currentUser);

module.exports = router;
