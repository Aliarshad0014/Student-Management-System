const request = require('supertest');
const app = require('../server');
const Program = require('../models/program-model');
const Course = require('../models/course-model');
const Department = require('../models/department-model');

describe('Course API Endpoints', () => {
  let sampleProgramId;

  beforeAll(async () => {
    // Create a sample department
    const departmentData = {
      department_id: 456,
      name: "Sample Department",
      contact_number: "1234567890",
      head_of_department: "John Doe",
      image: "sample_image.jpg"
    };

    const departmentResponse = await request(app)
      .post('/api/department/post')
      .send(departmentData);

    sampleDepartmentId = departmentResponse.body.department_id;

    // Create a sample program associated with the sample department
    const programData = {
      program_id: 123,
      department_id: sampleDepartmentId,
      name: "Sample Program",
      awarding_body: "Sample Awarding Body"
    };

    const programResponse = await request(app)
      .post('/api/program/post')
      .send(programData);

    sampleProgramId = programResponse.body.program_id;
  });

  afterAll(async () => {
    // Clean up: Delete the sample department and program after all tests are done
    await Program.deleteMany({ program_id: sampleProgramId });
    await Department.deleteMany({ department_id: sampleDepartmentId });
  });

  describe('POST /course/post', () => {
    test('It should create a new course', async () => {
      const courseData = {
        course_id: 789,
        program_id: sampleProgramId,
        name: "Sample Course",
        credits: 3
      };

      const response = await request(app)
        .post('/api/course/post')
        .send(courseData);

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(courseData);
    });
  });

  describe('GET /course/all', () => {
    test('It should get all courses', async () => {
      const response = await request(app)
        .get('/api/course/all');

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0); // Assuming there are courses in the database
    });
  });

  describe('GET /course/:course_id', () => {
    test('It should get a course by ID', async () => {
      const courseId = 789; // Assuming this course ID exists in the database

      const response = await request(app)
        .get(`/api/course/${courseId}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.course_id).toBe(courseId);
    });
  });

  describe('DELETE /course/delete/:course_id', () => {
    test('It should delete a course by ID', async () => {
      const courseId = 789; // Assuming this course ID exists in the database

      const response = await request(app)
        .delete(`/api/course/delete/${courseId}`);

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe(`Course with ID ${courseId} has been deleted`);
    });
  });

  describe('PUT /course/put', () => {
    test('It should update a course', async () => {
      // First, create a sample course to update
      const courseData = {
        course_id: 987,
        program_id: sampleProgramId,
        name: "Sample Course",
        credits: 3
      };

      await request(app)
        .post('/api/course/post')
        .send(courseData);

      // Update the course
      const updatedCourseData = {
        course_id: 987,
        program_id: sampleProgramId,
        name: "Updated Course",
        credits: 4
      };

      const response = await request(app)
        .put('/api/course/put')
        .send(updatedCourseData);

      expect(response.statusCode).toBe(200);
      expect(response.body.name).toEqual(updatedCourseData.name);
    });
  });
});
