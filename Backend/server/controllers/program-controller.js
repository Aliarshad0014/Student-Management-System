const Program = require("../models/program-model");
const Department = require("../models/department-model");

const program = async (req, res) => {
    try {
        const { id, department_id, name, awarding_body } = req.body;

        // Check if the department with the given ID exists
        const existingDepartment = await Department.findOne({ id: department_id });

        if (!existingDepartment) {
            return res.status(400).send('Department with the given ID does not exist');
            // Stop execution if the department does not exist
        }

        // Check if the ID already exists
        const existingProgram = await Program.findOne({ id });

        if (existingProgram) {
            return res.status(400).send('Program with the given ID already exists');
            // Stop execution if the program exists
        }

        // If the department and program do not exist, create a new program
        await Program.create({ id, department_id, name, awarding_body });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = program;
