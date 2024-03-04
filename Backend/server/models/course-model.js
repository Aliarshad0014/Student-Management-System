const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    id: { type: String, required: true },
    program_id: { type: String, required: true },
    name: { type: String, required: true },
    credits: { type: String, required: true },

});

const Course = new mongoose.model('course', courseSchema);

module.exports = Course;