const express = require("express");
const router = express.Router();
const studentInCourseController = require("../controllers/studentInCourse-controller");

router.route("/").post(studentInCourseController);
// router.route("/").get(studentInCourseController.studentHandleGet);
// router.route("/").delete(studentInCourseController.studentHandleDelete);

module.exports = router;