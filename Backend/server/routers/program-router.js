const express = require("express");
const router = express.Router();
const programController = require("../controllers/program-controller");

router.route("/").post(programController.program);
router.route("/").get(programController.programHandleGetById);
router.route("/").delete(programController.programHandleDelete);
router.route("/").put(programController.programHandleUpdate);


module.exports = router;
