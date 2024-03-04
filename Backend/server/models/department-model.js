const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    contact_number: { type: String, required: true },
    head_of_department: { type: String, required: true },

});

const Department = new mongoose.model('department', departmentSchema);

module.exports = Department;