const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    id: { type: String, required: true },
    department_id: { type: String, required: true },
    name: { type: String, required: true },
    awarding_body: { type: String, required: true },

});

const Program = new mongoose.model('program', programSchema);

module.exports = Program;