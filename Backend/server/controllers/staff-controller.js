const Staff = require("../models/staff-model");
const Campus = require("../models/campus-model");
const Department = require("../models/department-model");

const staff = async (req, res) => {
    try {
        const { id, campus_id, department_id, name, designation, email, contact_number } = req.body;

        // Check if the campus with the given ID exists
        const existingCampus = await Campus.findOne({ id: campus_id });

        if (!existingCampus) {
            return res.status(400).send('Campus with the given ID does not exist');
            // Stop execution if the campus does not exist
        }

        // Check if the department with the given ID exists
        const existingDepartment = await Department.findOne({ id: department_id });

        if (!existingDepartment) {
            return res.status(400).send('Department with the given ID does not exist');
            // Stop execution if the department does not exist
        }

        // Check if the ID already exists
        const existingStaff = await Staff.findOne({ id });

        if (existingStaff) {
            return res.status(400).send('Staff with the given ID already exists');
            // Stop execution if the staff exists
        }

        // If the campus, department, and staff do not exist, create a new staff
        await Staff.create({ id, campus_id, department_id, name, designation, email, contact_number });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = staff;
