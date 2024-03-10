const express = require("express");
const router = express.Router();
const documentController = require("../controllers/document-controller");

router.route("/").post(documentController.document);
router.route("/").get(documentController.documentHandleGetById);
router.route("/").delete(documentController.documentHandleDelete);
router.route("/").put(documentController.documentHandleUpdate);

module.exports = router;
