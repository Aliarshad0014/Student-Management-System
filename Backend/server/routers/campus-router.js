const express = require("express");
const router = express.Router();
const campusController = require("../controllers/campus-controller")

router.route("/").post(campusController.campusHandlePost);
router.route("/").get(campusController.campusHandleGet);
router.route("/").delete(campusController.campusHandleDelete);


module.exports = router;