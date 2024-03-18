const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    fee_id: { type: Number, required: true },
    student_id: { type: Number, required: true },
    ammount: { type: Number, required: true },
    month: { type: String, required: true },
    due_date: { type: Number, required: true },
    paid: { type: Boolean, required: true },


});

const Fee = new mongoose.model('fee', feeSchemaSchema);

module.exports = Fee;