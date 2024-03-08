const Department = require("../models/department-model");

const department = async (req, res) => {
    try {
        const { department_id, name, contact_number, head_of_department } = req.body;

        // Check if the department_id already exists
        const existingDepartment = await Department.findOne({ department_id });

        if (existingDepartment) {
            return res.status(400).send('Department with the given department_id already exists');
        }

        // If the department does not exist, create a new document
        await Department.create({ department_id, name, contact_number, head_of_department });

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
        const { department_id } = req.body;

        // Check if the department exists
        const existingDepartment = await Department.findOne({ department_id });

        if (!existingDepartment) {
            return res.status(404).send('Department with the given department_id not found');
        }

        // If the department exists, delete it
        await Department.deleteOne({ department_id });

        res.status(200).send(`Department with department_id ${department_id} has been deleted`);
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
