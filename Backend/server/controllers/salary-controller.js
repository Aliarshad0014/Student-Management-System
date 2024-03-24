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
        const existingStaff = await Salary.findOne({ staff_id });
        if (!existingStaff) {
            return res.status(404).send('Staff with the given ID not found');
        }
        const salary = await Salary.findOne({ staff_id });

        // Find salary entries by staff_id
        res.status(200).json(salary);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const salaryHandleUpdate = async (req, res) => {
    try {
        const { salary_id, staff_id } = req.body;

        // Check if the salary exists
        const existingSalary = await Salary.findOne({ salary_id });

        if (!existingSalary) {
            return res.status(404).send('Salary with the given salary_id not found');
        }

        // Check if the staff exists
        const existingStaff = await Staff.findOne({ staff_id });
        if (!existingStaff) {
            return res.status(400).send('Staff with the given ID does not exist');
        }

        // Update salary by salary_id
        const updatedSalary = await Salary.findOneAndUpdate(
            { salary_id },
            req.body,
            { new: true }
        );

        res.status(200).json(updatedSalary);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



const salaryHandleDelete = async (req, res) => {
    try {
        const { salary_id } = req.params;

        // Check if the salary exists
        const existingSalary = await Salary.findOne({ salary_id });

        if (!existingSalary) {
            return res.status(404).send('Salary with the given salary_id not found');
        }

        // If the salary exists, delete it
        await Salary.deleteOne({ salary_id });

        res.status(200).send(`Salary with salary_id has been deleted`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    postSalary,
    getAllSalaries,
    getSalaryByStaffId,
    salaryHandleUpdate,
    salaryHandleDelete
}
