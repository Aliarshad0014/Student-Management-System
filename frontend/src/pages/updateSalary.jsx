import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const UpdateSalary = () => {
  const [salaryData, setSalaryData] = useState({});
  const { id } = useParams(); // Get the ID from the URL params

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the salaryData state with the new value
    const updatedSalaryData = { ...salaryData, [name]: value };
    setSalaryData(updatedSalaryData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/salary/put`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(salaryData)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);  
      }
      toast.success('Salary data updated successfully');
    } catch (error) {
      toast.error(error.message); // Display error message in toast
    }
  };

  useEffect(() => {
    const fetchSalaryData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/salary/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch salary data');
        }
        const data = await response.json();
        setSalaryData(data);
      } catch (error) {
        console.error('Error fetching salary data:', error.message);
      }
    };
    fetchSalaryData();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Salary Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Salary ID</label>
          <input
            type="text"
            name="salary_id"
            value={salaryData.salary_id}
            onChange={(e) => handleInputChange('salary_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Staff ID</label>
          <input
            type="text"
            name="staff_id"
            value={salaryData.staff_id}
            onChange={(e) => handleInputChange('staff_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Amount</label>
          <input
            type="text"
            name="amount"
            value={salaryData.amount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Month</label>
          <input
            type="text"
            name="month"
            value={salaryData.month}
            onChange={(e) => handleInputChange('month', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Paid</label>
          <input
            type="text"
            name="paid"
            value={salaryData.paid}
            onChange={(e) => handleInputChange('paid', e.target.value)}
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

export default UpdateSalary;

