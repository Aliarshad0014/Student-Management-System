const express = require("express");
const router = express.Router();
const campusController = require("../controllers/campus-controller")

router.route("/").post(campusController);

module.exports = router;