const express = require("express");
const router = express.Router();
const programController = require("../controllers/program-controller");

router.route("/").post(programController.program);
router.route("/").get(programController.programHandleGet);
router.route("/").delete(programController.programHandleDelete);

module.exports = router;
