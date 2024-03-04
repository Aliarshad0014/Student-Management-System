const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staff-controller");

router.route("/").post(staffController);

module.exports = router;