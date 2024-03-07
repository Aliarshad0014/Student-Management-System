const Student = require("../models/student-model");
const Campus = require("../models/campus-model");
const Program = require("../models/program-model");
const Department = require("../models/department-model");

const student = async (req, res) => {
    try {
        const { id, campus_id, program_id, department_id, name, email, contact_number } = req.body;

        // Check if the campus with the given ID exists
        const existingCampus = await Campus.findOne({ id: campus_id });

        if (!existingCampus) {
            return res.status(400).send('Campus with the given ID does not exist');
        }

        // Check if the program with the given ID exists
        const existingProgram = await Program.findOne({ id: program_id });

        if (!existingProgram) {
            return res.status(400).send('Program with the given ID does not exist');
        }

        // Check if the department with the given ID exists
        const existingDepartment = await Department.findOne({ id: department_id });

        if (!existingDepartment) {
            return res.status(400).send('Department with the given ID does not exist');
        }

        // Check if the email already exists
        const existingEmail = await Student.findOne({ email });

        if (existingEmail) {
            return res.status(400).send('Student with the given email already exists');
        }

        // Check if the ID already exists
        const existingStudent = await Student.findOne({ id });

        if (existingStudent) {
            return res.status(400).send('Student with the given ID already exists');
        }

        // If the campus, program, department, and student do not exist, create a new student
        await Student.create({ id, campus_id, program_id, department_id, name, email, contact_number });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const studentHandleGet = async (req, res) => {
    try {
        // Implement logic to retrieve data for GET requests
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const studentHandleDelete = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if the student exists
        const existingStudent = await Student.findOne({ id });

        if (!existingStudent) {
            return res.status(404).send('Student with the given ID not found');
        }

        // If the student exists, delete it
        await Student.deleteOne({ id });

        res.status(200).send(`Student with ID ${id} has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    student,
    studentHandleGet,
    studentHandleDelete,
};
