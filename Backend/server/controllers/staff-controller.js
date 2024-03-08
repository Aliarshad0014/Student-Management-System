const Staff = require("../models/staff-model");
const Campus = require("../models/campus-model");
const Department = require("../models/department-model");

const staff = async (req, res) => {
    try {
        const { staff_id, campus_id, department_id, name, designation, email, contact_number } = req.body;

        // Check if the campus with the given ID exists
        const existingCampus = await Campus.findOne({ campus_id: campus_id });

        if (!existingCampus) {
            return res.status(400).send('Campus with the given ID does not exist');
        }

        // Check if the department with the given ID exists
        const existingDepartment = await Department.findOne({ department_id: department_id });

        if (!existingDepartment) {
            return res.status(400).send('Department with the given ID does not exist');
        }

        // Check if the email already exists
        const existingEmail = await Staff.findOne({ email });

        if (existingEmail) {
            return res.status(400).send('Staff with the given email already exists');
        }

        // Check if the staff_id already exists
        const existingStaff = await Staff.findOne({ staff_id });

        if (existingStaff) {
            return res.status(400).send('Staff with the given ID already exists');
        }

        // If the campus, department, and staff do not exist, create a new staff
        await Staff.create({ staff_id, campus_id, department_id, name, designation, email, contact_number });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const staffHandleGet = async (req, res) => {
    try {
        // Implement logic to retrieve data for GET requests
        const staffMembers = await Staff.find();
        res.status(200).json(staffMembers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const staffHandleDelete = async (req, res) => {
    try {
        const { staff_id } = req.body;

        // Check if the staff member exists
        const existingStaff = await Staff.findOne({ staff_id });

        if (!existingStaff) {
            return res.status(404).send('Staff member with the given ID not found');
        }

        // If the staff member exists, delete it
        await Staff.deleteOne({ staff_id });

        res.status(200).send(`Staff member with ID ${staff_id} has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    staff,
    staffHandleGet,
    staffHandleDelete,
};
