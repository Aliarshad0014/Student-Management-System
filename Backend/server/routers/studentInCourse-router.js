const express = require("express");
const router = express.Router();
const studentInCourseController = require("../controllers/studentInCourse-controller");

router.route("/post").post(studentInCourseController.studentInCourse);
router.route("/all").get(studentInCourseController.studentInCourseGet);
router.route("/course_id").get(studentInCourseController.getStudentsByCourseId);
router.route("/student_id").get(studentInCourseController.getCoursesByStudentId);
router.route("/delete").delete(studentInCourseController.studentInCourseDelete);

module.exports = router;