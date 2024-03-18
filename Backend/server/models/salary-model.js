const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
    salary_id: { type: Number, required: true },
    staff_id: { type: Number, required: true },
    ammount: { type: Number, required: true },
    month: { type: String, required: true },
    paid: { type: Boolean, required: true },


});

const Salary = new mongoose.model('salary', salarychemaSchema);

module.exports = Salary;