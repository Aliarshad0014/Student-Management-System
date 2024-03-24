import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StaffTable = ({ staff }) => {
  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/staff/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete staff member');
      }

      toast.success('Staff member deleted successfully!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error('Failed to delete staff member');
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end">
        <Link to="/add-staff" className="bg-green-500 hover:bg-green-600 font-bold text-white px-4 py-2 rounded mb-4">
          Add Staff +
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Staff ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campus ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Designation</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {staff.map((staff, index) => (
            <tr key={index} className='bg-white'>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.staff_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.campus_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.department_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.designation}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">{staff.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.contact_number}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" >
                <div className="whitespace-nowrap text-sm text-gray-900">
                  <Link to={`/update-staff/${staff.staff_id}`} className="ml-2 px-2 py-1 font-bold bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
                  <button onClick={() => handleDeleteClick(staff.staff_id)} className="ml-2 px-2 py-1 font-bold bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
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

export default StaffTable;
