const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student-controller");

router.route("/").post(studentController.student);
router.route("/").get(studentController.studentHandleGetById);
router.route("/").delete(studentController.studentHandleDelete);
router.route("/").put(studentController.studentHandleUpdate);

module.exports = router;
