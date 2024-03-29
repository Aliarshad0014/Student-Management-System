import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const UpdateProgram = () => {
  const [program, setProgram] = useState({});
  const { id } = useParams(); // Get the ID from the URL params

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the program state with the new value
    const updatedProgram = { ...program, [name]: value };
    setProgram(updatedProgram);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/program/put`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(program)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);  
            }
      toast.success('Program updated successfully');
    } catch (error) {
      toast.error(error.message); // Display error message in toast

    }
  };

  useEffect(() => {
    const fetchProgramData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/program/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch program data');
        }
        const data = await response.json();
        setProgram(data);
      } catch (error) {
        console.error('Error fetching program data:', error.message);
      }
    };
    fetchProgramData();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Program Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Program ID</label>
          <input
            type="text"
            name="program_id"
            value={program.program_id}
            onChange={(e) => handleInputChange('program_id', e.target.value)}
            className="block w-full mt-1 p-4 rounded-md shadow-sm disabled:opacity-60 disabled:bg-gray-300"
            disabled          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Department ID</label>
          <input
            type="text"
            name="department_id"
            value={program.department_id}
            onChange={(e) => handleInputChange('department_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Name</label>
          <input
            type="text"
            name="name"
            value={program.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Awarding Body</label>
          <input
            type="text"
            name="awarding_body"
            value={program.awarding_body}
            onChange={(e) => handleInputChange('awarding_body', e.target.value)}
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

export default UpdateProgram;
