const Document = require("../models/document-model");

const document = async (req, res) => {
    try {
        const { id, type, file_path } = req.body;

        // Check if the ID already exists
        const existingDocument = await Document.findOne({ id });

        if (existingDocument) {
            return res.status(400).send('User with the given ID already exists');
             // Stop execution if the user exists
        }

        // If the user does not exist, create a new document
        await Document.create({ id, type, file_path });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = document; 