import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const StudentsTable = ({ students, handleAddClick }) => {

  return (
    <div>
      <div className="flex justify-end">
      <Link to="/add-student" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4">
          Add Student +
        </Link>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/8">Student ID</th>
            <th className="px-4 py-2 w-1/8">Campus ID</th>
            <th className="px-4 py-2 w-1/8">Program ID</th>
            <th className="px-4 py-2 w-1/8">Department ID</th>
            <th className="px-4 py-2 w-1/4">Name</th>
            <th className="px-4 py-2 w-1/4">Email</th>
            <th className="px-4 py-2 w-1/6">Contact Number</th>
            <th className="px-4 py-2 w-1/6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className='bg-white'>
              <td className="border px-4 py-2">{student.student_id}</td>
              <td className="border px-4 py-2">{student.campus_id}</td>
              <td className="border px-4 py-2">{student.program_id}</td>
              <td className="border px-4 py-2">{student.department_id}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.email}</td>
              <td className="border px-4 py-2">{student.contact_number}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-around">
                  <Link to="/update-student" className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
                  <button className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable; // Exporting the component
