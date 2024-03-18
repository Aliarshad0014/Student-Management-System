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


const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


const courseHandleGetById = async (req, res) => {
    try {
        const { course_id } = req.body;

        // Find course by course_id
        const course = await Course.findOne({ course_id });

        if (!course) {
            return res.status(404).send('Course with the given course_id not found');
        }

        res.status(200).json(course);
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

const courseHandleUpdate = async (req, res) => {
    try {
        const { course_id } = req.body;

        // Find and update course by course_id
        const updatedCourse = await Course.findOneAndUpdate(
            { course_id },
            req.body,
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).send('Course with the given course_id not found');
        }

        // Check if the program with the given program_id exists
        const existingProgram = await Program.findOne({ program_id: updatedCourse.program_id });

        if (!existingProgram) {
            return res.status(400).send('Program with the given Program ID does not exist');
        }

        res.status(200).json(updatedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    course,
    getAllCourses,
    courseHandleGetById,
    courseHandleDelete,
    courseHandleUpdate,
};
