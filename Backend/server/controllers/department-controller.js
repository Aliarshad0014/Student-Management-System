const Department = require("../models/department-model");

const department = async (req, res) => {
    try {
        const { id, name, contact_number, head_of_department } = req.body;

        // Check if the ID already exists
        const existingDepartment = await Department.findOne({ id });

        if (existingDepartment) {
            return res.status(400).send('User with the given ID already exists');
             // Stop execution if the user exists
        }

        // If the user does not exist, create a new document
        await Department.create({ id, name, contact_number, head_of_department });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = department; 