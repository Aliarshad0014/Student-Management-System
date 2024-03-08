const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course_id: { type: Number, required: true },
    program_id: { type: Number, required: true },
    name: { type: String, required: true },
    credits: { type: Number, required: true },

});

const Course = new mongoose.model('course', courseSchema);

module.exports = Course;