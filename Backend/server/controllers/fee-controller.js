const Fee = require('../models/fees-model');
const Student = require('../models/student-model');

const postFee = async (req, res) => {
    try {
        const { fee_id, student_id, amount, month, due_date, paid } = req.body;

        // Check if the fee with the given ID already exists
        const existingFee = await Fee.findOne({ fee_id });
        if (existingFee) {
            return res.status(400).send('Fee with the given ID already exists');
        }

        // Check if the student with the given ID exists
        const existingStudent = await Student.findOne({ student_id });
        if (!existingStudent) {
            return res.status(400).send('Student with the given ID does not exist');
        }

        // Create fee entry
        await Fee.create({ fee_id, student_id, amount, month, due_date, paid });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getFeesByStudentId = async (req, res) => {
    try {
        const { student_id } = req.body;

        // Check if the student with the given ID exists
        const existingStudent = await Student.findOne({ student_id });
        if (!existingStudent) {
            return res.status(404).send('Student with the given ID not found');
        }

        // Get fees for the student
        res.status(200).json(existingStudent);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAllFees = async (req, res) => {
    try {
        const fees = await Fee.find();
        res.status(200).json(fees);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    postFee,
    getFeesByStudentId,
    getAllFees
};
