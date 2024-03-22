import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const StudentsTable = ({ students, handleAddClick }) => {

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end">
      <Link to="/add-student" className="bg-green-500 hover:bg-green-600 font-bold text-white px-4 py-2 rounded mb-4">
          Add Student +
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campus ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Program ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student, index) => (
            <tr key={index} className='bg-white'>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.student_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.campus_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.program_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.department_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.contact_number}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="whitespace-nowrap text-sm text-gray-900">
                  <Link to="/update-student" className="ml-2 px-2 py-1 font-bold bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
                  <button className="ml-2 px-2 py-1 font-bold bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
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
