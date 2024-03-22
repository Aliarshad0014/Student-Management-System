import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const ProgramTable = ({ programs, handleAddClick }) => {

  return (
    <div>
      <div className="flex justify-end">
      <Link to="/add-program" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4">
          Add Program +
        </Link>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/6">Program ID</th>
            <th className="px-4 py-2 w-1/6">Department ID</th>
            <th className="px-4 py-2 w-1/4">Name</th>
            <th className="px-4 py-2 w-1/4">Awarding Body</th>
            <th className="px-4 py-2 w-1/6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr key={index} className='bg-white'>
              <td className="border px-4 py-2">{program.program_id}</td>
              <td className="border px-4 py-2">{program.department_id}</td>
              <td className="border px-4 py-2">{program.name}</td>
              <td className="border px-4 py-2">{program.awarding_body}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-around">
                  <Link to="/update-program"ton className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
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

export default ProgramTable; // Exporting the component
