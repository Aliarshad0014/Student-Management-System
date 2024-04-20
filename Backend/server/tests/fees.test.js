const request = require('supertest');
const app = require('../server');
const Department = require('../models/department-model');
const Program = require('../models/program-model');
const Student = require('../models/student-model');
const Fee = require('../models/fees-model');

let sampleStudentId;
let sampleProgramId;
let sampleDepartmentId;

beforeAll(async () => {
  // Create a sample department
  const departmentData = {
    department_id: 9898,
    name: "Sample Department",
    contact_number: "9876543210",
    head_of_department: "John Doe",
    image: "sample_image.jpg"
  };
  const departmentResponse = await request(app)
    .post('/api/department/post')
    .send(departmentData);
  sampleDepartmentId = departmentResponse.body.department_id;

  // Create a sample program
  const programData = {
    program_id: 4545,
    department_id: sampleDepartmentId,
    name: "Sample Program",
    awarding_body: "Sample Awarding Body"
  };
  const programResponse = await request(app)
    .post('/api/program/post')
    .send(programData);
  sampleProgramId = programResponse.body.program_id;

  // Create a sample student
  const studentData = {
    student_id: 9090,
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

describe('POST /fee/post', () => {
  test('It should create a new fee entry', async () => {
    const feeData = {
      fee_id: 123,
      student_id: sampleStudentId,
      amount: 1000,
      month: "January",
      due_date: "2024-01-31",
      paid: false
    };

    const response = await request(app)
      .post('/api/fee/post')
      .send(feeData);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('fee_id');
  });
});

describe('GET /fee/all', () => {
  test('It should retrieve all fee entries', async () => {
    const response = await request(app)
      .get('/api/fee/all');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /fee/:student_id', () => {
  test('It should retrieve fee entries for a specific student', async () => {
    const response = await request(app)
      .get(`/api/fee/${sampleStudentId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.student_id).toBe(sampleStudentId);
  });
});

describe('PUT /fee/put', () => {
  let sampleFeeId;

  beforeAll(async () => {
    // Create a sample fee entry to be used in update test
    const feeData = {
      fee_id: 456,
      student_id: sampleStudentId,
      amount: 2000,
      month: "February",
      due_date: "2024-02-28",
      paid: true
    };
    const feeResponse = await request(app)
      .post('/api/fee/post')
      .send(feeData);
    sampleFeeId = feeResponse.body.fee_id;
  });

  test('It should update a fee entry', async () => {
    const updatedFeeData = {
      fee_id: sampleFeeId,
      student_id: sampleStudentId,
      amount: 2500,
      month: "February",
      due_date: "2024-02-28",
      paid: true
    };

    const response = await request(app)
      .put('/api/fee/put')
      .send(updatedFeeData);

    expect(response.statusCode).toBe(200);
    expect(response.body.amount).toBe(updatedFeeData.amount);
  });
});

describe('DELETE /fee/delete/:fee_id', () => {
  let sampleFeeIdToDelete;

  beforeAll(async () => {
    // Create a sample fee entry to be deleted
    const feeData = {
      fee_id: 789,
      student_id: sampleStudentId,
      amount: 1500,
      month: "March",
      due_date: "2024-03-31",
      paid: false
    };
    const feeResponse = await request(app)
      .post('/api/fee/post')
      .send(feeData);
    sampleFeeIdToDelete = feeResponse.body.fee_id;
  });

  test('It should delete a fee entry by ID', async () => {
    const response = await request(app)
      .delete(`/api/fee/delete/${sampleFeeIdToDelete}`);

    expect(response.statusCode).toBe(200);
  });
});
