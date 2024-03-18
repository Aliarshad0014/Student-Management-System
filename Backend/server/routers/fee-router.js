const express = require("express");
const router = express.Router();
const feeController = require("../controllers/fee-controller");

router.route("/").post(feeController.document);

module.exports = router;
