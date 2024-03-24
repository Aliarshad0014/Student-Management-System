const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salary-controller");

router.route("/post").post(salaryController.postSalary);
router.route("/all").get(salaryController.getAllSalaries);
router.route("/:staff_id").get(salaryController.getSalaryByStaffId);
router.route("/put").put(salaryController.salaryHandleUpdate);
router.route("/delete/:salary_id").delete(salaryController.salaryHandleDelete);

module.exports = router;
