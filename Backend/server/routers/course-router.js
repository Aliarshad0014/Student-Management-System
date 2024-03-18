const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course-controller");

router.route("/").post(courseController.course);
router.route("/all").get(courseController.getAllCourses);
router.route("/").get(courseController.courseHandleGetById);
router.route("/").delete(courseController.courseHandleDelete);
router.route("/").put(courseController.courseHandleUpdate);

module.exports = router;
