const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staff-controller");

router.route("/post").post(staffController.staff);
router.route("/all").get(staffController.getAllStaffMembers);
router.route("/:staff_id").get(staffController.staffHandleGetById);
router.route("/delete").delete(staffController.staffHandleDelete);
router.route("/put").put(staffController.staffHandleUpdate);

module.exports = router;
