const Document = require("../models/document-model");

const document = async (req, res) => {
    try {
        const { id, type, file_path } = req.body;

        // Check if the ID already exists
        const existingDocument = await Document.findOne({ id });

        if (existingDocument) {
            return res.status(400).send('Document with the given ID already exists');
        }

        // If the document does not exist, create a new document
        await Document.create({ id, type, file_path });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const documentHandleGet = async (req, res) => {
    try {
        // Implement logic to retrieve data for GET requests
        const documents = await Document.find();
        res.status(200).json(documents);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const documentHandleDelete = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if the document exists
        const existingDocument = await Document.findOne({ id });

        if (!existingDocument) {
            return res.status(404).send('Document with the given ID not found');
        }

        // If the document exists, delete it
        await Document.deleteOne({ id });

        res.status(200).send(`Document with ID ${id} has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    document,
    documentHandleGet,
    documentHandleDelete,
};
