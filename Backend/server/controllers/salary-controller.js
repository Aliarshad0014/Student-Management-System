const Salary = require('../models/salary-model');
const Staff = require('../models/staff-model');

const postSalary = async (req, res) => {
    try {
        const { salary_id, staff_id, amount, month, paid } = req.body;

        // Check if the salary with the given ID already exists
        const existingSalary = await Salary.findOne({ salary_id });
        if (existingSalary) {
            return res.status(400).send('Salary with the given ID already exists');
        }

        // Check if the staff with the given ID exists
        const existingStaff = await Staff.findOne({ staff_id });
        if (!existingStaff) {
            return res.status(400).send('Staff with the given ID does not exist');
        }

        // Create salary entry
        await Salary.create({ salary_id, staff_id, amount, month, paid });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAllSalaries = async (req, res) => {
    try {
        const salaries = await Salary.find();
        res.status(200).json(salaries);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getSalaryByStaffId = async (req, res) => {
    try {
        const { staff_id } = req.params;

        // Check if the staff with the given ID exists
        const existingStaff = await Staff.findOne({ staff_id });
        if (!existingStaff) {
            return res.status(404).send('Staff with the given ID not found');
        }
        const salary = await Salary.find({ staff_id });

        // Find salary entries by staff_id
        res.status(200).json(salary);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    postSalary,
    getAllSalaries,
    getSalaryByStaffId
};
