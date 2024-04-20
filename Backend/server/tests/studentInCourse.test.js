const request = require('supertest');
const app = require('../server');
const Department = require('../models/department-model');
const Program = require('../models/program-model');
const Course = require('../models/course-model');
const Student = require('../models/student-model');
const CourseStudents = require('../models/studentInCourse-model');

let sampleStudentId;
let sampleCourseId;

beforeAll(async () => {
  // Create a sample department
  const departmentData = {
    department_id: 567894,
    name: "Sample Department",
    contact_number: "9876543210",
    head_of_department: "John Doe",
    image: "sample_image.jpg"
  };
  await Department.create(departmentData);

  // Create a sample program
  const programData = {
    program_id: 987654,
    department_id: 567894,
    name: "Sample Program",
    awarding_body: "Sample Awarding Body",
    color: "#FF0000"
  };
  await Program.create(programData);

  // Create a sample course
  const courseData = {
    course_id: 234562,
    program_id: 987654,
    name: "Sample Course",
    credits: 3
  };
  await Course.create(courseData);

  // Create a sample student
  const studentData = {
    student_id: 2345678,
    program_id: 987654,
    department_id: 567894,
    name: "Sample Student",
    email: "sample@student.com",
    contact_number: "1234567890"
  };
  const studentResponse = await request(app)
    .post('/api/student/post')
    .send(studentData);
  sampleStudentId = studentResponse.body.student_id;

  sampleCourseId = courseData.course_id;
});

describe('POST /studentincourse/post', () => {
  test('It should create a new association between student and course', async () => {
    const associationData = {
      student_id: sampleStudentId,
      course_id: sampleCourseId
    };

    const response = await request(app)
      .post('/api/studentincourse/post')
      .send(associationData);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('student_id', sampleStudentId);
    expect(response.body).toHaveProperty('course_id', sampleCourseId);
  });
});

describe('GET /studentincourse/all', () => {
  test('It should retrieve all associations between students and courses', async () => {
    const response = await request(app)
      .get('/api/studentincourse/all');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('DELETE /studentincourse/delete/:student_id', () => {
  test('It should delete the association of a student with courses', async () => {
    const response = await request(app)
      .delete(`/api/studentincourse/delete/${sampleStudentId}`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Student deleted successfully');
  });
});
