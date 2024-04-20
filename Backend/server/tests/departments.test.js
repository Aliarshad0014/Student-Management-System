const request = require('supertest');
const app = require('../server');
const Department = require('../models/department-model');

describe('POST /department/post', () => {
  test('It should create a new department', async () => {
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

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(departmentData);
  });
});

describe('GET /department/all', () => {
  test('It should get all departments', async () => {
    const response = await request(app)
      .get('/api/department/all');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0); // Assuming there are departments in the database
  });
});

describe('GET /department/:department_id', () => {
  test('It should get a department by ID', async () => {
    const departmentId = 123; // Assuming this department ID exists in the database

    const response = await request(app)
      .get(`/api/department/${departmentId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.department_id).toBe(departmentId);
  });
});

describe('DELETE /department/delete/:department_id', () => {
  test('It should delete a department by ID', async () => {
    const departmentId = 123; // Assuming this department ID exists in the database

    const response = await request(app)
      .delete(`/api/department/delete/${departmentId}`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(`Department with department_id ${departmentId} has been deleted`);
  });
});

describe('PUT /department/put', () => {
    test('It should update a department', async () => {
      // Create a sample department first
      const departmentData = {
        department_id: 22222,
        name: "Sample Department",
        contact_number: "1234567890",
        head_of_department: "John Doe",
        image: "sample_image.jpg"
      };
  
      await request(app)
        .post('/api/department/post')
        .send(departmentData);
  
      // Update the department
      const updatedDepartmentData = {
        department_id: 22222,
        name: "Updated Department",
        contact_number: "9876543210",
        head_of_department: "Jane Doe",
        image: "updated_image.jpg"
      };
  
      const response = await request(app)
        .put('/api/department/put')
        .send(updatedDepartmentData);
  
      expect(response.statusCode).toBe(200);
      expect(response.body.name).toEqual(updatedDepartmentData.name);
    });
  });
  