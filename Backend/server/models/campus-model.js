const mongoose = require('mongoose');

const campusSchema = new mongoose.Schema({
    campus_id: { type: Number, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    contact_number: { type: String, required: true },
    manager: { type: String, required: true },
    image: { type: String }, 
});

const Campus = new mongoose.model('Campus', campusSchema);

module.exports = Campus;