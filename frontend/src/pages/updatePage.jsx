import React, { useState } from 'react';

const UpdatePage = () => {
  // Define initial sampleRowData state
  const [sampleRowData, setSampleRowData] = useState({
    campusId: 1,
    name: 'Head campus Islamabad',
    location: 'Location 1',
    contactNumber: '1234567890'
  });

  // Sample data for input fields
  const inputFields = [
    { name: 'campusId', label: 'Campus ID' },
    { name: 'name', label: 'Name' },
    { name: 'location', label: 'Location' },
    { name: 'contactNumber', label: 'Contact Number' },
  ];

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the sampleRowData state with the new value
    const updatedRowData = { ...sampleRowData, [name]: value };
    setSampleRowData(updatedRowData);
  };

  // Render input fields dynamically
  const renderInputFields = () => {
    return inputFields.map((field, index) => (
      <div key={index} className="mb-4">
        <label className="block text-gray-700 pb-2 pt-2">{field.label}</label>
        <input
          type="text"
          name={field.name}
          value={sampleRowData[field.name]}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    ));
  };

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Update Details</h2>
      <form>
        {renderInputFields()}
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

export default UpdatePage;
