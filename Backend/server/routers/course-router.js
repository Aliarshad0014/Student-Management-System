const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course-controller");

router.route("/").post(courseController);

module.exports = router;