const Campus = require("../models/campus-model");

const campus = async (req, res) => {
    try {
        const { id, name, location, contact_number, manager } = req.body;

        // Check if thes ID already exists
        const existingCampus = await Campus.findOne({ id });

        if (existingCampus) {
            return res.status(400).send('User with the given ID already exists');
             // Stop execution if the user exists
        }

        // If the user does not exist, create a new document
        await Campus.create({ id, name, location, contact_number, manager });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = campus;