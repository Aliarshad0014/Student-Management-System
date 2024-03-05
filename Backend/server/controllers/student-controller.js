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
            // Stop execution if the campus does not exist
        }

        // Check if the program with the given ID exists
        const existingProgram = await Program.findOne({ id: program_id });

        if (!existingProgram) {
            return res.status(400).send('Program with the given ID does not exist');
            // Stop execution if the program does not exist
        }

        // Check if the department with the given ID exists
        const existingDepartment = await Department.findOne({ id: department_id });

        if (!existingDepartment) {
            return res.status(400).send('Department with the given ID does not exist');
            // Stop execution if the department does not exist
        }

        // Check if the ID already exists
        const existingStudent = await Student.findOne({ id });

        if (existingStudent) {
            return res.status(400).send('Student with the given ID already exists');
            // Stop execution if the student exists
        }

        // If the campus, program, department, and student do not exist, create a new student
        await Student.create({ id, campus_id, program_id, department_id, name, email, contact_number });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = student;
