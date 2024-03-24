const Document = require("../models/document-model");

const document = async (req, res) => {
    try {
        const { document_id, type, file_path } = req.body;

        // Check if the document_id already exists
        const existingDocument = await Document.findOne({ document_id });

        if (existingDocument) {
            return res.status(400).send('Document with the given document_id already exists');
        }

        // If the document does not exist, create a new document
        await Document.create({ document_id, type, file_path });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.status(200).json(documents);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const documentHandleGetById = async (req, res) => {
    try {
        const { document_id } = req.params;

        // Check if the document with the given document_id exists
        const existingDocument = await Document.findOne({ document_id });

        if (!existingDocument) {
            return res.status(404).send('Document Id not found');
        }

        res.status(200).json(existingDocument);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const documentHandleDelete = async (req, res) => {
    try {
        const { document_id } = req.params;

        // Check if the document exists
        const existingDocument = await Document.findOne({ document_id });

        if (!existingDocument) {
            return res.status(404).send('Document with the given document_id not found');
        }

        // If the document exists, delete it
        await Document.deleteOne({ document_id });

        res.status(200).send(`Document with document_id ${document_id} has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const documentHandleUpdate = async (req, res) => {
    try {
        const { document_id } = req.body;

        // Find and update document by document_id
        const updatedDocument = await Document.findOneAndUpdate(
            { document_id },
            req.body,
            { new: true }
        );

        if (!updatedDocument) {
            return res.status(404).send('Document with the given document_id not found');
        }

        res.status(200).json(updatedDocument);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    document,
    getAllDocuments,
    documentHandleGetById,
    documentHandleDelete,
    documentHandleUpdate
};
