const request = require('supertest');
const app = require('../server');
const Department = require('../models/department-model');
const Program = require('../models/program-model');
const Student = require('../models/student-model');

describe('Student API Endpoints', () => {
  let sampleProgramId;
  let sampleDepartmentId;
  let sampleStudentId;

  beforeAll(async () => {
    // Create a sample department
    const departmentData = {
      department_id: 44456,
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
      program_id: 11123,
      department_id: sampleDepartmentId,
      name: "Sample Program",
      awarding_body: "Sample Awarding Body"
    };

    const programResponse = await request(app)
      .post('/api/program/post')
      .send(programData);

    sampleProgramId = programResponse.body.program_id;

    // Create a sample student associated with the sample program and department
    const studentData = {
      student_id: 789,
      program_id: sampleProgramId,
      department_id: sampleDepartmentId,
      name: "Sample Student",
      email: "sample@student.com",
      contact_number: "9876543210"
    };

    const studentResponse = await request(app)
      .post('/api/student/post')
      .send(studentData);

    sampleStudentId = studentResponse.body.student_id;
  });

  afterAll(async () => {
    // Clean up: Delete the sample department, program, and student after all tests are done
    await Department.deleteMany({ department_id: sampleDepartmentId });
    await Program.deleteMany({ program_id: sampleProgramId });
    await Student.deleteMany({ student_id: sampleStudentId });
  });

  describe('POST /student/post', () => {
    test('It should create a new student', async () => {
      const studentData = {
        student_id: 987,
        program_id: sampleProgramId,
        department_id: sampleDepartmentId,
        name: "New Student",
        email: "new@student.com",
        contact_number: "1234567890"
      };

      const response = await request(app)
        .post('/api/student/post')
        .send(studentData);

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(studentData);
    });
  });

  describe('GET /student/all', () => {
    test('It should get all students', async () => {
      const response = await request(app)
        .get('/api/student/all');

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0); // Assuming there are students in the database
    });
  });

  describe('GET /student/:student_id', () => {
    test('It should get a student by ID', async () => {
      const response = await request(app)
        .get(`/api/student/${sampleStudentId}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.student_id).toBe(sampleStudentId);
    });
  });

  describe('DELETE /student/delete/:student_id', () => {
    test('It should delete a student by ID', async () => {
      const response = await request(app)
        .delete(`/api/student/delete/${sampleStudentId}`);

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe(`Student with ID ${sampleStudentId} has been deleted`);
    });
  });

  describe('PUT /student/put', () => {
    test('It should update a student', async () => {
      // First, create a sample student
      const studentData = {
        student_id: 123456,
        program_id: sampleProgramId,
        department_id: sampleDepartmentId,
        name: "Original Student",
        email: "original@student.com",
        contact_number: "1234567890"
      };
  
      const createResponse = await request(app)
        .post('/api/student/post')
        .send(studentData);
  
      const createdStudentId = createResponse.body.student_id;
  
      // Now, update the student
      const updatedStudentData = {
        student_id: 123456,
        program_id: sampleProgramId,
        department_id: sampleDepartmentId,
        name: "Updated Student",
        email: "updated@student.com",
        contact_number: "9876543210"
      };
  
      const updateResponse = await request(app)
        .put('/api/student/put')
        .send(updatedStudentData);
  
      expect(updateResponse.statusCode).toBe(200);
      expect(updateResponse.body.name).toEqual(updatedStudentData.name);
  
      // Clean up: Delete the sample student after the test is done
      await Student.deleteOne({ student_id: createdStudentId });
    });
  });
  
});
