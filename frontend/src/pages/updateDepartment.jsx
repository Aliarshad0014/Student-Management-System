import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';


const UpdateDepartment = () => {
  const [department, setDepartment] = useState([]);
  const { id } = useParams(); // Get the ID from the URL params

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the sampleRowData state with the new value
    const updatedRowData = { ...department, [name]: value };
    setDepartment(updatedRowData);
  };

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/department/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch Course data');
        }
        const data = await response.json();
        console.log("course" + data)
        setDepartment(data);
      } catch (error) {
        console.error('Error fetching Course data:', error.message);
      }
    };
    fetchCourseData();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Department Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Department ID</label>
          <input
            type="text"
            name="departmentId"
            value={department.department_id}
            onChange={(e) => handleInputChange('departmentId', e.target.value)}
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
            name="contactNumber"
            value={department.contact_number}
            onChange={(e) => handleInputChange('contactNumber', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Head of Department</label>
          <input
            type="text"
            name="headOfDepartment"
            value={department.head_of_department}
            onChange={(e) => handleInputChange('headOfDepartment', e.target.value)}
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
    </div>
  );
};

export default UpdateDepartment;
