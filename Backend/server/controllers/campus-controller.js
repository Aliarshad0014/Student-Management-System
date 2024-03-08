const Campus = require("../models/campus-model");

const campusHandlePost = async (req, res) => {
    try {
        const { campus_id, name, location, contact_number, manager } = req.body;

        // Check if the campus_id already exists
        const existingCampus = await Campus.findOne({ campus_id });

        if (existingCampus) {
            return res.status(400).send('Campus with the given campus_id already exists');
        }

        // If the campus does not exist, create a new document
        await Campus.create({ campus_id, name, location, contact_number, manager });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const campusHandleGet = async (req, res) => {
    try {
        // Implement logic to retrieve data for GET requests
        const campuses = await Campus.find();
        res.status(200).json(campuses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const campusHandleDelete = async (req, res) => {
    try {
        const {campus_id} = req.body;

        // Check if the campus exists
        const existingCampus = await Campus.findOne({ campus_id });

        if (!existingCampus) {
            return res.status(404).send('Campus with the given campus_id not found');
        }

        // If the campus exists, delete it
        await Campus.deleteOne({ campus_id });

        res.status(200).send(`Campus with campus_id ${campus_id} has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    campusHandlePost,
    campusHandleGet,
    campusHandleDelete,
};
