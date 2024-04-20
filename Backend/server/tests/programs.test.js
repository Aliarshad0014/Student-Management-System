const request = require('supertest');
const app = require('../server');
const Department = require('../models/department-model');
const Program = require('../models/program-model');

describe('Program API Endpoints', () => {
  let sampleDepartmentId;

  beforeAll(async () => {
    // Create a sample department to be used in all tests
    const departmentData = {
      department_id: 123,
      name: "Sample Department",
      contact_number: "1234567890",
      head_of_department: "John Doe",
      image: "sample_image.jpg"
    };

    const response = await request(app)
      .post('/api/department/post')
      .send(departmentData);

    sampleDepartmentId = response.body.department_id;
  });

  afterAll(async () => {
    // Clean up: Delete the sample department after all tests are done
    await Department.deleteMany({ department_id: sampleDepartmentId });
  });

  describe('POST /program/post', () => {
    test('It should create a new program', async () => {
      const programData = {
        program_id: 456,
        department_id: sampleDepartmentId,
        name: "Sample Program",
        awarding_body: "Sample Awarding Body"
      };

      const response = await request(app)
        .post('/api/program/post')
        .send(programData);

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(programData);
    });
  });

  describe('GET /program/all', () => {
    test('It should get all programs', async () => {
      const response = await request(app)
        .get('/api/program/all');

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0); // Assuming there are programs in the database
    });
  });

  describe('GET /program/:program_id', () => {
    test('It should get a program by ID', async () => {
      const programId = 456; // Assuming this program ID exists in the database

      const response = await request(app)
        .get(`/api/program/${programId}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.program_id).toBe(programId);
    });
  });

  describe('DELETE /program/delete/:program_id', () => {
    test('It should delete a program by ID', async () => {
      const programId = 456; // Assuming this program ID exists in the database

      const response = await request(app)
        .delete(`/api/program/delete/${programId}`);

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe(`Program with ID ${programId} has been deleted`);
    });
  });

  describe('PUT /program/put', () => {
    test('It should update a program', async () => {
      // First, create a sample program to update
      const programData = {
        program_id: 789,
        department_id: sampleDepartmentId,
        name: "Sample Program",
        awarding_body: "Sample Awarding Body"
      };

      await request(app)
        .post('/api/program/post')
        .send(programData);

      // Update the program
      const updatedProgramData = {
        program_id: 789,
        department_id: sampleDepartmentId,
        name: "Updated Program",
        awarding_body: "Updated Awarding Body"
      };

      const response = await request(app)
        .put('/api/program/put')
        .send(updatedProgramData);

      expect(response.statusCode).toBe(200);
      expect(response.body.name).toEqual(updatedProgramData.name);
    });
  });
});
