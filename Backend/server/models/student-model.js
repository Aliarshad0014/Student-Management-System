const mongoose = require('mongoose');

// Defining the schema for the Student model
const studentSchema = new mongoose.Schema({
    student_id: { type: Number, required: true },
    campus_id: { type: Number, required: true },
    program_id: { type: Number, required: true },
    department_id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact_number: { type: String, required: true },

});


// Creating the Student model based on the schema
const Student = new mongoose.model('student', studentSchema);

// Exporting the Student model for use in other files
module.exports = Student;