const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course-controller");

router.route("/post").post(courseController.course);
router.route("/all").get(courseController.getAllCourses);
router.route("/:course_id").get(courseController.courseHandleGetById);
router.route("/delete/:course_id").delete(courseController.courseHandleDelete);
router.route("/put").put(courseController.courseHandleUpdate);

module.exports = router;
