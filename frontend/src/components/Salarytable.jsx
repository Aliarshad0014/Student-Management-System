import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const SalaryTable = ({ salaries }) => {
  return (
    <div className="overflow-x-auto">
    <div className="flex justify-end">
    <Link to="/add-salary" className="bg-green-500 hover:bg-green-600 font-bold text-white px-4 py-2 rounded mb-4">
          Add Salary +
        </Link>
    </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Salary ID
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Staff ID
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Month
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Paid
            </th>
            <th className="px-16 py-3 text-left text-xs text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {salaries.map((salary, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{salary.salary_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{salary.staff_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{salary.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{salary.month}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{salary.paid ? 'Yes' : 'No'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="whitespace-nowrap text-sm text-gray-900">
                  <Link to="/update-salary  " className="ml-2 px-2 py-1 font-bold bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
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

export default SalaryTable;