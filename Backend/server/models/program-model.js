const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    program_id: { type: Number, required: true },
    department_id: { type: Number, required: true },
    name: { type: String, required: true },
    awarding_body: { type: String, required: true },
    color: { type: String }

});

const Program = new mongoose.model('program', programSchema);

module.exports = Program;