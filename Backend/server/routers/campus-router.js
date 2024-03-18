const express = require("express");
const router = express.Router();
const campusController = require("../controllers/campus-controller")

router.route("/").post(campusController.campus);
router.route("/all").get(campusController.getAllCampuses);
router.route("/").get(campusController.campusHandleGetById);
router.route("/").delete(campusController.campusHandleDelete);
router.route("/").put(campusController.campusHandleUpdate);

module.exports = router;