import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeeTable = ({ fees }) => {
  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/fee/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete fee');
      }

      toast.success('Fee deleted successfully!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error('Failed to delete fee');
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end">
        <Link to="/add-fee" className="bg-green-500 hover:bg-green-600 font-bold text-white px-4 py-2 rounded mb-4">
          Add Fee +
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Fee ID
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Student ID
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Month
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
              Due Date
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
          {fees.map((fee, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.fee_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.student_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.month}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.due_date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.paid ? 'Yes' : 'No'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="whitespace-nowrap text-sm text-gray-900">
                  <Link to={`/update-fee/${fee.student_id}`} className="ml-2 px-2 py-1 font-bold bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
                  <button onClick={() => handleDeleteClick(fee.fee_id)} className="ml-2 px-2 py-1 font-bold bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default FeeTable;
