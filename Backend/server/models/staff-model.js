const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    id: { type: String, required: true },
    campus_id: { type: String, required: true },
    department_id: { type: String, required: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true },
    contact_number: { type: String, required: true },

});

const Staff = new mongoose.model('staff', staffSchema);

module.exports = Staff;