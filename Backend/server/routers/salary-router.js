const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salary-controller");

router.route("/").post(salaryController.postSalary);
router.route("/all").get(salaryController.getAllSalaries);
router.route("/:staff_id").get(salaryController.getSalaryByStaffId);


module.exports = router;
