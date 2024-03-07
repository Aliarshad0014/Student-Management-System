const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/department-controller");

router.route("/").post(departmentController.department);
router.route("/").get(departmentController.departmentHandleGet);
router.route("/").delete(departmentController.departmentHandleDelete);

module.exports = router;
