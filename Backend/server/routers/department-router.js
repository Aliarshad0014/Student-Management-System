const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/department-controller");

router.route("/").post(departmentController);

module.exports = router;