const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salary-controller");

router.route("/").post(salaryController.postSalary);
router.route("/all").get(salaryController.getAllSalaries);
router.route("/").get(salaryController.getSalaryByStaffId);


module.exports = router;
