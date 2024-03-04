const Program = require("../models/program-model");

const program = async (req, res) => {
    try {
        const { id, department_id, name, awarding_body } = req.body;

        // Check if the ID already exists
        const existingProgram = await Program.findOne({ id });

        if (existingProgram) {
            return res.status(400).send('User with the given ID already exists');
             // Stop execution if the user exists
        }

        // If the user does not exist, create a new program
        await Program.create({ id, department_id, name, awarding_body });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = program; 