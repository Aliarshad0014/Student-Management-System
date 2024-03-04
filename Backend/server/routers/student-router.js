const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student-controller");

router.route("/").post(studentController);

module.exports = router;