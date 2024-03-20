import React from 'react';

const CampusesTable = ({ campuses, onAddClick }) => {
  const handleAddClick = () => {
    if (onAddClick) {
      onAddClick();
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button onClick={handleAddClick} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4">
          Add Campus +
        </button>
      </div>
      <table className="table-auto w-full h-full">
        <thead>
          <tr>
            <th className="px-2 py-2 w-1/6">Campus ID</th>
            <th className="px-2 py-2 w-1/6">Name</th>
            <th className="px-2 py-2 w-1/4">Location</th>
            <th className="px-2 py-2 w-1/6">Contact Number</th>
            <th className="px-2 py-2 w-1/6">Manager</th>
            <th className="px-2 py-2 w-1/6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campuses.map((campus, index) => (
            <tr key={index} className=' bg-white'>
              <td className="border px-4 py-2">{campus.campus_id}</td>
              <td className="border px-4 py-2">{campus.name}</td>
              <td className="border px-4 py-2">{campus.location}</td>
              <td className="border px-4 py-2">{campus.contact_number}</td>
              <td className="border px-4 py-2">{campus.manager}</td>
              <td className="border px-4 py-2 text-right">
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

export default CampusesTable;

