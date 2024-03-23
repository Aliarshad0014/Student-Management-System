const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/department-controller");

router.route("/post").post(departmentController.department);
router.route("/all").get(departmentController.getAllDepartments);
router.route("/:department_id").get(departmentController.departmentHandleGetById);
router.route("/delete").delete(departmentController.departmentHandleDelete);
router.route("/put").put(departmentController.departmentHandleUpdate);

module.exports = router;
