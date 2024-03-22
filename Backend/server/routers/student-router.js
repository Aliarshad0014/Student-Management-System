const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student-controller");

router.route("/post").post(studentController.student);
router.route("/all").get(studentController.getAllStudents);
router.route("/:student_id").get(studentController.studentHandleGetById);
router.route("/delete").delete(studentController.studentHandleDelete);
router.route("/put").put(studentController.studentHandleUpdate);

module.exports = router;
