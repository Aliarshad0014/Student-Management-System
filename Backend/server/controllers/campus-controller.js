const Campus = require("../models/campus-model");

const campus= async (req, res) => {
    try {
        const { campus_id, name, location, contact_number, manager, image } = req.body;

        // Check if the campus_id already exists
        const existingCampus = await Campus.findOne({ campus_id });

        if (existingCampus) {
            return res.status(400).send('Campus with the given campus_id already exists');
        }
s
        // If the campus does not exist, create a new document
        await Campus.create({ campus_id, name, location, contact_number, manager, image });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAllCampuses = async (req, res) => {
    try {
        const campuses = await Campus.find();
        res.status(200).json(campuses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const campusHandleGetById = async (req, res) => {
    try {
        const { campus_id } = req.body;

        // Find campus by campus_id
        const campus = await Campus.findOne({ campus_id });

        if (!campus) {
            return res.status(404).send('Campus with the given campus_id not found');
        }

        res.status(200).json(campus);
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

const campusHandleUpdate = async (req, res) => {
    try {
        const { campus_id } = req.body;

        // Find and update campus by campus_id
        const updatedCampus = await Campus.findOneAndUpdate(
            { campus_id },
            req.body,
            { new: true }
        );

        if (!updatedCampus) {
            return res.status(404).send('Campus with the given campus_id not found');
        }

        res.status(200).json(updatedCampus);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    campus,
    campusHandleGetById,
    getAllCampuses,
    campusHandleDelete,
    campusHandleUpdate,
};