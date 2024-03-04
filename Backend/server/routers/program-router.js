const express = require("express");
const router = express.Router();
const programController = require("../controllers/program-controller");

router.route("/").post(programController);

module.exports = router;