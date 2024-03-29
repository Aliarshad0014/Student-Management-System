const Student = require('../models/student-model');
const Course = require('../models/course-model');
const CourseStudents = require('../models/studentInCourse-model');

const studentInCourse = async (req, res) => {
    try {
        const { student_id, course_id } = req.body;

        // Check if the student with the given ID exists
        const existingStudent = await Student.findOne({ student_id });
        if (!existingStudent) {
            return res.status(400).send('Student with the given ID does not exist');
        }

        // Check if the course with the given ID exists
        const existingCourse = await Course.findOne({ course_id });
        if (!existingCourse) {
            return res.status(400).send('Course with the given ID does not exist');
        }

        // Check if the association already exists
        const existingAssociation = await CourseStudents.findOne({ student_id, course_id });
        if (existingAssociation) {
            return res.status(400).send('Student is already enrolled in the course');
        }

        // If the student and course exist, and the association doesn't exist, create it
        await CourseStudents.create({ student_id, course_id });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const studentInCourseGet = async (req, res) => {
    try {
        // Retrieve all associations
        const associations = await CourseStudents.find();

        res.status(200).json(associations);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


const studentInCourseDelete = async (req, res) => {
    try {
        const { student_id } = req.params;

        // Check if the association with the given student_id and course_id exists
        const existingAssociation = await CourseStudents.findOne({ student_id });
        if (!existingAssociation) {
            return res.status(404).send('Student not found for deletion');
        }

        // If the association exists, delete it
        await CourseStudents.deleteOne({ student_id });

        res.status(200).send('Student deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
    studentInCourse,
    studentInCourseDelete,
    studentInCourseGet,
};
