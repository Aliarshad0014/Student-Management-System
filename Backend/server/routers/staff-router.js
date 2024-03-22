const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staff-controller");

router.route("/").post(staffController.staff);
router.route("/all").get(staffController.getAllStaffMembers);
router.route("/:staff_id").get(staffController.staffHandleGetById);
router.route("/").delete(staffController.staffHandleDelete);
router.route("/").put(staffController.staffHandleUpdate);

module.exports = router;
