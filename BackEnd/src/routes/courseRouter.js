const express = require("express");
const router = express.Router();

const { verifyTokenTeacher, verifyToken } = require("../middleware/CheckLogin");
const courseController = require("../Controllers/course.controller");
const upload = require("../middleware/upload");

router.post(
  "/new-course",
  verifyTokenTeacher,
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "imageUrl", maxCount: 1 },
  ]),
  courseController.newCourse
);

router.get("/buy-course/:id", verifyToken, courseController.buyCourse);
router.get("/get-all-course", courseController.getCourse);
router.get("/get-course-teacher", courseController.getCourseTeacher);
router.get("/get-my-course", verifyToken, courseController.getMyCourse);
router.get("/get-course/:id", courseController.getCourseById);

router.put(
  "/edit-course/:id",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "imageUrl", maxCount: 1 },
  ]),
  courseController.editCourse
);

router.delete("/delete-course/:id", courseController.deleteCourse);

module.exports = router;
