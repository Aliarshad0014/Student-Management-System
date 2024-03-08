const mongoose = require('mongoose');

const studentInCourseSchema = new mongoose.Schema({
    student_id: { type: Number, required: true },
    course_id: { type: Number, required: true },

});

const CourseStudents = new mongoose.model('studentInCourse', studentInCourseSchema);

module.exports = CourseStudents;