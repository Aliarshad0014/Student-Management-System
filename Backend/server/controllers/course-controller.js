const Course = require("../models/course-model");
const Program = require("../models/program-model");

const course = async (req, res) => {
    try {
        const { course_id, program_id, name, credits } = req.body;

        // Check if the program with the given program_id exists
        const existingProgram = await Program.findOne({ program_id: program_id });

        if (!existingProgram) {
            return res.status(400).send('Program with the given Program ID does not exist');
        }

        // Check if the course_id already exists
        const existingCourse = await Course.findOne({ course_id });

        if (existingCourse) {
            return res.status(400).send('Course with the given ID already exists');
        }

        // If the program and course do not exist, create a new document
        await Course.create({ course_id, name, program_id, credits });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const courseHandleGet = async (req, res) => {
    try {
        // Implement logic to retrieve data for GET requests
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const courseHandleDelete = async (req, res) => {
    try {
        const { course_id } = req.body;

        // Check if the course exists
        const existingCourse = await Course.findOne({ course_id });

        if (!existingCourse) {
            return res.status(404).send('Course with the given ID not found');
        }

        // If the course exists, delete it
        await Course.deleteOne({ course_id });

        res.status(200).send(`Course with ID ${course_id} has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    course,
    courseHandleGet,
    courseHandleDelete,
};
