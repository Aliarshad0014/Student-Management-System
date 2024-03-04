const Course = require("../models/course-model");

const course = async (req, res) => {
    try {
        const { id, program_id, name, credits } = req.body;

        // Check if the ID already exists
        const existingCourse = await Course.findOne({ id });

        if (existingCourse) {
            return res.status(400).send('User with the given ID already exists');
             // Stop execution if the user exists
        }

        // If the user does not exist, create a new document
        await Course.create({ id, name, program_id, credits });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = course; 