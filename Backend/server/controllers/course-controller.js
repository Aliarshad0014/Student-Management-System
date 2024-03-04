const Course = require("../models/course-model");
const Program = require("../models/program-model"); // Import the Program model

const course = async (req, res) => {
    try {
        const { id, program_id, name, credits } = req.body;

        // Check if the program with the given ID exists
        const existingProgram = await Program.findOne({ id: program_id });

        if (!existingProgram) {
            return res.status(400).send('Program with the given Program ID does not exist');
            // Stop execution if the program id matches 
        }

        // Check if the ID already exists
        const existingCourse = await Course.findOne({ id });

        if (existingCourse) {
            return res.status(400).send('Course with the given ID already exists');
            // Stop execution if the course exists
        }

        // If the program and course do not exist, create a new document
        await Course.create({ id, name, program_id, credits });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = course;