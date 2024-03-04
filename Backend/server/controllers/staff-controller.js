const Staff = require("../models/staff-model");

const staff = async (req, res) => {
    try {
        const { id, campus_id, department_id, name, designation, email, contact_number} = req.body;

        // Check if the ID already exists
        const existingStaff = await Staff.findOne({ id });

        if (existingStaff) {
            return res.status(400).send('User with the given ID already exists');
             // Stop execution if the user exists
        }

        // If the user does not exist, create a new Staff
        await Staff.create({ id, campus_id, department_id, name, designation, email, contact_number});

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = staff; 