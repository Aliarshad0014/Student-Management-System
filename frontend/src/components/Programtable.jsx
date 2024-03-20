import React from 'react';

const ProgramTable = ({ programs, handleAddClick }) => {

  return (
    <div>
      <div className="flex justify-end">
        <button onClick={handleAddClick} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4">
          Add Program +
        </button>
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
              <td className="border px-4 py-2">{program.awardingbody}</td>
              <td className="border px-4 py-2">{program.name}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-around">
                  <button className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</button>
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
