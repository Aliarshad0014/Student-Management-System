const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student-controller");

router.route("/").post(studentController.student);
router.route("/").get(studentController.studentHandleGet);
router.route("/").delete(studentController.studentHandleDelete);

module.exports = router;
