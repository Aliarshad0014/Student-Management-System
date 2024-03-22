const express = require("express");
const router = express.Router();
const feeController = require("../controllers/fee-controller");

router.route("/").post(feeController.postFee);
router.route("/all").get(feeController.getAllFees);
router.route("/:student_id").get(feeController.getFeesByStudentId);


module.exports = router;
