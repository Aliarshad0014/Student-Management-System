const request = require('supertest');
const app = require('../server');
const Department = require('../models/department-model');
const Staff = require('../models/staff-model');
const Salary = require('../models/salary-model');

let sampleStaffId;
let sampleDepartmentId;

beforeAll(async () => {
  // Create a sample department
  const departmentData = {
    department_id: 98765,
    name: "Sample Department",
    contact_number: "9876543210",
    head_of_department: "John Doe",
    image: "sample_image.jpg"
  };
  const departmentResponse = await request(app)
    .post('/api/department/post')
    .send(departmentData);
  sampleDepartmentId = departmentResponse.body.department_id;

  // Create a sample staff
  const staffData = {
    staff_id: 67890,
    department_id: sampleDepartmentId,
    name: "Sample Staff",
    designation: "Sample Designation",
    email: "sample@staff.com",
    contact_number: "9876543210"
  };
  const staffResponse = await request(app)
    .post('/api/staff/post')
    .send(staffData);
  sampleStaffId = staffResponse.body.staff_id;
});

describe('POST /salary/post', () => {
  test('It should create a new salary entry', async () => {
    const salaryData = {
      salary_id: 123,
      staff_id: sampleStaffId,
      amount: 5000,
      month: "January",
      paid: false
    };

    const response = await request(app)
      .post('/api/salary/post')
      .send(salaryData);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('salary_id');
  });
});

describe('GET /salary/all', () => {
  test('It should retrieve all salary entries', async () => {
    const response = await request(app)
      .get('/api/salary/all');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /salary/:staff_id', () => {
  test('It should retrieve salary entries for a specific staff member', async () => {
    const response = await request(app)
      .get(`/api/salary/${sampleStaffId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.staff_id).toBe(sampleStaffId);
  });
});

describe('PUT /salary/put', () => {
  let sampleSalaryId;

  beforeAll(async () => {
    // Create a sample salary entry to be used in update test
    const salaryData = {
      salary_id: 456,
      staff_id: sampleStaffId,
      amount: 6000,
      month: "February",
      paid: true
    };
    const salaryResponse = await request(app)
      .post('/api/salary/post')
      .send(salaryData);
    sampleSalaryId = salaryResponse.body.salary_id;
  });

  test('It should update a salary entry', async () => {
    const updatedSalaryData = {
      salary_id: sampleSalaryId,
      staff_id: sampleStaffId,
      amount: 7000,
      month: "February",
      paid: true
    };

    const response = await request(app)
      .put('/api/salary/put')
      .send(updatedSalaryData);

    expect(response.statusCode).toBe(200);
    expect(response.body.amount).toBe(updatedSalaryData.amount);
  });
});

describe('DELETE /salary/delete/:salary_id', () => {
  let sampleSalaryIdToDelete;

  beforeAll(async () => {
    // Create a sample salary entry to be deleted
    const salaryData = {
      salary_id: 789,
      staff_id: sampleStaffId,
      amount: 8000,
      month: "March",
      paid: false
    };
    const salaryResponse = await request(app)
      .post('/api/salary/post')
      .send(salaryData);
    sampleSalaryIdToDelete = salaryResponse.body.salary_id;
  });

  test('It should delete a salary entry by ID', async () => {
    const response = await request(app)
      .delete(`/api/salary/delete/${sampleSalaryIdToDelete}`);

    expect(response.statusCode).toBe(200);
  });
});
