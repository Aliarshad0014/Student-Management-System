const Student = require("../models/student-model");

const student = async (req, res) => {
    try {
        const { id, campus_id, program_id, department_id, name, email, contact_number} = req.body;

        // Check if the ID already exists
        const existingStudent = await Student.findOne({ id });

        if (existingStudent) {
            return res.status(400).send('User with the given ID already exists');
             // Stop execution if the user exists
        }

        // If the user does not exist, create a new Student
        await Student.create({ id, campus_id, program_id, department_id, name, email, contact_number});

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = student; 