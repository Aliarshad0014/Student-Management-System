const express = require("express");
const router = express.Router();
const documentController = require("../controllers/document-controller");

router.route("/post").post(documentController.document);
router.route("/all").get(documentController.getAllDocuments);
router.route("/:document_id").get(documentController.documentHandleGetById);
router.route("/delete/:document_id").delete(documentController.documentHandleDelete);
router.route("/put").put(documentController.documentHandleUpdate);

module.exports = router;
