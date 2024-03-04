const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    department_id: { type: Number, required: true },
    name: { type: String, required: true },
    awarding_body: { type: String, required: true },

});

const Program = new mongoose.model('program', programSchema);

module.exports = Program;