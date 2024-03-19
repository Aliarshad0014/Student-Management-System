const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
    salary_id: { type: Number, required: true },
    staff_id: { type: Number, required: true },
    amount: { type: Number, required: true },
    month: { type: String, required: true },
    paid: { type: Boolean, required: true },


});

const Salary = new mongoose.model('salary', salarySchema);

module.exports = Salary;