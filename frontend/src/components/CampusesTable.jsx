import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CampusesTable = ({ campuses, onAddClick }) => {
  const handleAddClick = () => {
    if (onAddClick) {
      onAddClick();
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end">
        <Link to="/add-campuses" className="bg-green-500 hover:bg-green-600 font-bold text-white px-4 py-2 rounded mb-4">
          Add Campus +
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Campus ID</th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Location</th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Contact Number</th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Manager</th>
            <th className="px-16 py-3 text-left text-xs text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {campuses.map((campus, index) => (
            <tr key={index} className=' bg-white'>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campus.campus_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campus.location}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campus.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campus.contact_number}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campus.manager}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="whitespace-nowrap text-sm text-gray-900">
                  <Link to="/update-campus" className="ml-2 px-2 py-1 font-bold bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
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

export default CampusesTable;

