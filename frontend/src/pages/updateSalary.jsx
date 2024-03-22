import React, { useState } from 'react';

const UpdateSalary = () => {
  // Define initial sampleRowData state
  const [sampleRowData, setSampleRowData] = useState({
    salaryId: 'S001',
    staffId: 'ST001',
    amount: '1000',
    month: 'January',
    paid: 'true'
  });

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the sampleRowData state with the new value
    const updatedRowData = { ...sampleRowData, [name]: value };
    setSampleRowData(updatedRowData);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Salary Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Salary ID</label>
          <input
            type="text"
            name="salaryId"
            value={sampleRowData.salaryId}
            onChange={(e) => handleInputChange('salaryId', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Staff ID</label>
          <input
            type="text"
            name="staffId"
            value={sampleRowData.staffId}
            onChange={(e) => handleInputChange('staffId', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Amount</label>
          <input
            type="text"
            name="amount"
            value={sampleRowData.amount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Month</label>
          <input
            type="text"
            name="month"
            value={sampleRowData.month}
            onChange={(e) => handleInputChange('month', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Paid</label>
          <input
            type="text"
            name="paid"
            value={sampleRowData.paid}
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
    </div>
  );
};

export default UpdateSalary;
