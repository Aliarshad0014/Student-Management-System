const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/department-controller");

router.route("/").post(departmentController.department);
router.route("/").get(departmentController.departmentHandleGetById);
router.route("/").delete(departmentController.departmentHandleDelete);
router.route("/").put(departmentController.departmentHandleUpdate);

module.exports = router;
