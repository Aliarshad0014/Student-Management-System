const express = require("express");
const router = express.Router();
const campus = require("../controllers/campus-controller")

router.route("/").post(campus);

module.exports = router;