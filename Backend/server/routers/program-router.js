const express = require("express");
const router = express.Router();
const programController = require("../controllers/program-controller");

router.route("/post").post(programController.program);
router.route("/all").get(programController.getAllPrograms);
router.route("/").get(programController.programHandleGetById);
router.route("/delete").delete(programController.programHandleDelete);
router.route("/put").put(programController.programHandleUpdate);


module.exports = router;
