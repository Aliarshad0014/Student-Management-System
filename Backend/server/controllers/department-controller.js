const Department = require("../models/department-model");

const department = async (req, res) => {
    try {
        const { id, name, contact_number, head_of_department } = req.body;

        // Check if the ID already exists
        const existingDepartment = await Department.findOne({ id });

        if (existingDepartment) {
            return res.status(400).send('Department with the given ID already exists');
        }

        // If the department does not exist, create a new document
        await Department.create({ id, name, contact_number, head_of_department });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const departmentHandleGet = async (req, res) => {
    try {
        // Implement logic to retrieve data for GET requests
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const departmentHandleDelete = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if the department exists
        const existingDepartment = await Department.findOne({ id });

        if (!existingDepartment) {
            return res.status(404).send('Department with the given ID not found');
        }

        // If the department exists, delete it
        await Department.deleteOne({ id });

        res.status(200).send(`Department with ID ${id} has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    department,
    departmentHandleGet,
    departmentHandleDelete,
};
