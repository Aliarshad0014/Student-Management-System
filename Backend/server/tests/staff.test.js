const request = require('supertest');
const app = require('../server');
const Department = require('../models/department-model'); 
const Staff = require('../models/staff-model'); 

let sampleDepartmentId;

beforeAll(async () => {
  // Create a sample department to be used in all tests
  const departmentData = {
    department_id: 123123123,
    name: "Sample Department",
    contact_number: "9876543210",
    head_of_department: "John Doe",
    image: "sample_image.jpg"
  };

  const response = await request(app)
    .post('/api/department/post')
    .send(departmentData);

  sampleDepartmentId = response.body.department_id;
});

describe('POST /staff/post', () => {
  test('It should create a new staff member', async () => {
    const staffData = {
      staff_id: 456,
      department_id: sampleDepartmentId,
      name: "Sample Staff",
      designation: "Sample Designation",
      email: "sample@example.com",
      contact_number: "1234567890"
    };

    const response = await request(app)
      .post('/api/staff/post')
      .send(staffData);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('staff_id');
  });
});

describe('GET /staff/all', () => {
  test('It should retrieve all staff members', async () => {
    const response = await request(app)
      .get('/api/staff/all');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /staff/:staff_id', () => {
  test('It should retrieve a specific staff member by ID', async () => {
    const response = await request(app)
      .get(`/api/staff/456`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('staff_id', 456);
  });
});

describe('DELETE /staff/delete/:staff_id', () => {
  test('It should delete a specific staff member by ID', async () => {
    const response = await request(app)
      .delete(`/api/staff/delete/456`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain(`Staff member with ID 456 has been deleted`);
  });
});

describe('PUT /staff/put', () => {
  let sampleStaffId;

  beforeAll(async () => {
    // Create a sample staff member to be used in update test
    const staffData = {
      staff_id: 789,
      department_id: sampleDepartmentId,
      name: "Original Staff",
      designation: "Original Designation",
      email: "original@example.com",
      contact_number: "9876543210"
    };

    const response = await request(app)
      .post('/api/staff/post')
      .send(staffData);

    sampleStaffId = response.body.staff_id;
  });

  test('It should update a staff member', async () => {
    const updatedStaffData = {
      staff_id: sampleStaffId,
      department_id: sampleDepartmentId,
      name: "Updated Staff",
      designation: "Updated Designation",
      email: "updated@example.com",
      contact_number: "1234567890"
    };

    const response = await request(app)
      .put('/api/staff/put')
      .send(updatedStaffData);

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toEqual(updatedStaffData.name);
  });
});
