import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const DepartmentTable = ({ departments, handleAddClick }) => {

  return (
    <div>
      <div className="flex justify-end">
      <Link to="/add-departments" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4">
          Add Department +
        </Link>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/6">Department ID</th>
            <th className="px-4 py-2 w-1/4">Name</th>
            <th className="px-4 py-2 w-1/4">Contact Number</th>
            <th className="px-4 py-2 w-1/6">Head of Department</th>
            <th className="px-4 py-2 w-1/6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={index} className='bg-white'>
              <td className="border px-4 py-2">{department.department_id}</td>
              <td className="border px-4 py-2">{department.name}</td>
              <td className="border px-4 py-2">{department.contact_number}</td>
              <td className="border px-4 py-2">{department.head_of_department}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-around">
                  <Link to="/update-department" className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
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

export default DepartmentTable; 
