const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staff-controller");

router.route("/").post(staffController.staff);
router.route("/").get(staffController.staffHandleGet);
router.route("/").delete(staffController.staffHandleDelete);

module.exports = router;
