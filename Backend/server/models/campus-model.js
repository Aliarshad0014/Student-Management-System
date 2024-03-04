const mongoose = require('mongoose');

const campusSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    contact_number: { type: String, required: true },
    manager: { type: String, required: true },

});

const Campus = new mongoose.model('Campus', campusSchema);

module.exports = Campus;