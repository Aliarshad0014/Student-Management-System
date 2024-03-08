const Program = require("../models/program-model");
const Department = require("../models/department-model");

const program = async (req, res) => {
    try {
        const { program_id, department_id, name, awarding_body } = req.body;

        // Check if the department with the given department_id exists
        const existingDepartment = await Department.findOne({ department_id: department_id });

        if (!existingDepartment) {
            return res.status(400).send('Department with the given ID does not exist');
        }

        // Check if the program_id already exists
        const existingProgram = await Program.findOne({ program_id });

        if (existingProgram) {
            return res.status(400).send('Program with the given ID already exists');
        }

        // If the department and program do not exist, create a new program
        await Program.create({ program_id, department_id, name, awarding_body });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const programHandleGet = async (req, res) => {
    try {
        // Implement logic to retrieve data for GET requests
        const programs = await Program.find();
        res.status  (200).json(programs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const programHandleDelete = async (req, res) => {
    try {
        const { program_id } = req.body;

        // Check if the program exists
        const existingProgram = await Program.findOne({ program_id });

        if (!existingProgram) {
            return res.status(404).send('Program with the given ID not found');
        }

        // If the program exists, delete it
        await Program.deleteOne({ program_id });

        res.status(200).send(`Program with ID ${program_id} has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    program,
    programHandleGet,
    programHandleDelete,
};
