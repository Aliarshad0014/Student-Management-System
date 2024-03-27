const Staff = require("../models/staff-model");
const Department = require("../models/department-model");

const staff = async (req, res) => {
    try {
        const { staff_id, department_id, name, designation, email, contact_number } = req.body;

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
        await Staff.create({ staff_id, department_id, name, designation, email, contact_number });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAllStaffMembers = async (req, res) => {
    try {
        const staffMembers = await Staff.find();
        res.status(200).json(staffMembers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const staffHandleGetById = async (req, res) => {
    try {
        const { staff_id } = req.params;

        // Check if the staff member with the given staff_id exists
        const existingStaff = await Staff.findOne({ staff_id });

        if (!existingStaff) {
            return res.status(404).send('Staff Id not found');
        }

        res.status(200).json(existingStaff);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const staffHandleDelete = async (req, res) => {
    try {
        const { staff_id } = req.params;

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


const staffHandleUpdate = async (req, res) => {
    try {
        const { staff_id, department_id } = req.body;

        // Check if the staff with the given ID exists
        const existingStaff = await Staff.findOne({ staff_id });

        if (!existingStaff) {
            return res.status(404).send('Staff member with the given staff_id not found');
        }

        // Check if the department with the given ID exists
        const existingDepartment = await Department.findOne({ department_id });

        if (!existingDepartment) {
            return res.status(400).send('Department with the given ID does not exist');
        }

        // Update staff member with the provided data
        const updatedStaff = await Staff.findOneAndUpdate(
            { staff_id },
            req.body,
            { new: true }
        );

        res.status(200).json(updatedStaff);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    staff,
    staffHandleGetById,
    getAllStaffMembers,
    staffHandleDelete,
    staffHandleUpdate
};
