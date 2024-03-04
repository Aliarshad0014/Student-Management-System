const express = require("express");
const router = express.Router();
const documentController = require("../controllers/document-controller");

router.route("/").post(documentController);

module.exports = router;