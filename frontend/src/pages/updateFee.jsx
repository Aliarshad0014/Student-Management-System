import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const UpdateFee = () => {
  const [fee, setFee] = useState({});
  const { id } = useParams(); // Get the ID from the URL params

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the fee state with the new value
    const updatedFee = { ...fee, [name]: value };
    setFee(updatedFee);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/fee/put`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fee)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);  
      }
      toast.success('Fee updated successfully');
    } catch (error) {
      toast.error(error.message); // Display error message in toast
    }
  };

  useEffect(() => {
    const fetchFeeData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/fee/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch fee data');
        }
        const data = await response.json();
        console.log("fee"+ JSON.stringify(data))
        setFee(data);
      } catch (error) {
        console.error('Error fetching fee data:', error.message);
      }
    };
    fetchFeeData();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Fee Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Fee ID</label>
          <input
            type="text"
            name="fee_id"
            value={fee.fee_id}
            onChange={(e) => handleInputChange('fee_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Student ID</label>
          <input
            type="text"
            name="student_id"
            value={fee.student_id}
            onChange={(e) => handleInputChange('student_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Amount</label>
          <input
            type="text"
            name="amount"
            value={fee.amount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Month</label>
          <input
            type="text"
            name="month"
            value={fee.month}
            onChange={(e) => handleInputChange('month', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Due Date</label>
          <input
            type="text"
            name="dueDate"
            value={fee.due_date}
            onChange={(e) => handleInputChange('due_date', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Paid</label>
          <input
            type="text"
            name="paid"
            value={fee.paid}
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

export default UpdateFee;
