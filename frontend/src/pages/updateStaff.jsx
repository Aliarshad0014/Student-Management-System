import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const UpdateStaff = () => {
  const [staff, setStaff] = useState({});
  const { id } = useParams(); // Get the ID from the URL params

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the staff state with the new value
    const updatedStaff = { ...staff, [name]: value };
    setStaff(updatedStaff);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/staff/put`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(staff)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage); 
            }
      toast.success('Staff updated successfully');
    } catch (error) {
      toast.error(error.message); // Display error message in toast

    }
  };

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/staff/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch staff data');
        }
        const data = await response.json();
        setStaff(data);
      } catch (error) {
        console.error('Error fetching staff data:', error.message);
      }
    };
    fetchStaffData();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Staff Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Staff ID</label>
          <input
            type="text"
            name="staff_id"
            value={staff.staff_id}
            onChange={(e) => handleInputChange('staff_id', e.target.value)}
            className="block w-full mt-1 p-4 rounded-md shadow-sm disabled:opacity-60 disabled:bg-gray-300"
            disabled          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Department ID</label>
          <input
            type="text"
            name="department_id"
            value={staff.department_id}
            onChange={(e) => handleInputChange('department_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Name</label>
          <input
            type="text"
            name="name"
            value={staff.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Designation</label>
          <input
            type="text"
            name="designation"
            value={staff.designation}
            onChange={(e) => handleInputChange('designation', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Email</label>
          <input
            type="email"
            name="email"
            value={staff.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Contact Number</label>
          <input
            type="text"
            name="contact_number"
            value={staff.contact_number}
            onChange={(e) => handleInputChange('contact_number', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 w-1/2 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out"
          >
            Update
          </button>
        </div>
      </form>
      <ToastContainer />

    </div>
  );
};

export default UpdateStaff;
