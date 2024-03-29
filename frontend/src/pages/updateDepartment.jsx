import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const UpdateDepartment = () => {
  const [department, setDepartment] = useState({});
  const { id } = useParams(); // Get the ID from the URL params

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the department state with the new value
    const updatedDepartment = { ...department, [name]: value };
    setDepartment(updatedDepartment);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/department/put`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(department)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);  
            }
      toast.success('Department updated successfully');
    } catch (error) {
      toast.error(error.message); // Display error message in toast
    }
  };

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/department/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch department data');
        }
        const data = await response.json();
        setDepartment(data);
      } catch (error) {
        console.error('Error fetching department data:', error.message);
      }
    };
    fetchDepartmentData();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Department Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Department ID</label>
          <input
            type="text"
            name="department_id"
            value={department.department_id}
            onChange={(e) => handleInputChange('department_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Name</label>
          <input
            type="text"
            name="name"
            value={department.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Contact Number</label>
          <input
            type="text"
            name="contact_number"
            value={department.contact_number}
            onChange={(e) => handleInputChange('contact_number', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Head of Department</label>
          <input
            type="text"
            name="head_of_department"
            value={department.head_of_department}
            onChange={(e) => handleInputChange('head_of_department', e.target.value)}
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

export default UpdateDepartment;

