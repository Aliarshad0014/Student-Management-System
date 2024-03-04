const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: { type: String, required: true },
    campus_id: { type: String, required: true },
    program_id: { type: String, required: true },
    department_id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact_number: { type: String, required: true },

});

const Student = new mongoose.model('student', studentSchema);

module.exports = Student;