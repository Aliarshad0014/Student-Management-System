const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course-controller");

router.route("/").post(courseController.course);
router.route("/").get(courseController.courseHandleGet);
router.route("/").delete(courseController.courseHandleDelete);

module.exports = router;
