import React from 'react';

const StaffTable = ({staff, handleAddClick}) => {

  return (
    <div>
            <div className="flex justify-end">
        <button onClick={handleAddClick} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4">
          Add Staff +
        </button>
      </div>
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 w-1/8">Staff ID</th>
          <th className="px-4 py-2 w-1/8">Campus ID</th>
          <th className="px-4 py-2 w-1/8">Department ID</th>
          <th className="px-4 py-2 w-1/4">Name</th>
          <th className="px-4 py-2 w-1/6">Designation</th>
          <th className="px-4 py-2 w-1/6">Email</th>
          <th className="px-4 py-2 w-1/6">Contact Number</th>
          <th className="px-4 py-2 w-1/6">Actions</th>
        </tr>
      </thead>
      <tbody>
        {staff.map((staff, index) => (
          <tr key={index} className='bg-white'>
            <td className="border px-4 py-2">{staff.staff_id}</td>
            <td className="border px-4 py-2">{staff.campus_id}</td>
            <td className="border px-4 py-2">{staff.department_id}</td>
            <td className="border px-4 py-2">{staff.name}</td>
            <td className="border px-4 py-2">{staff.designation}</td>
            <td className="border px-4 py-2">{staff.email}</td>
            <td className="border px-4 py-2">{staff.contact_number}</td>
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

export default StaffTable; // Exporting the component
