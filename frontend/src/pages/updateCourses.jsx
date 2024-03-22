import React, { useState } from 'react';

const UpdateCourse = () => {
  // Define initial sampleRowData state
  const [sampleRowData, setSampleRowData] = useState({
    courseId: 'C001',
    programId: 'P001',
    name: 'Introduction to Programming',
    credits: 3
  });

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the sampleRowData state with the new value
    const updatedRowData = { ...sampleRowData, [name]: value };
    setSampleRowData(updatedRowData);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Course Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Course ID</label>
          <input
            type="text"
            name="courseId"
            value={sampleRowData.courseId}
            onChange={(e) => handleInputChange('courseId', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Program ID</label>
          <input
            type="text"
            name="programId"
            value={sampleRowData.programId}
            onChange={(e) => handleInputChange('programId', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Name</label>
          <input
            type="text"
            name="name"
            value={sampleRowData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Credits</label>
          <input
            type="number"
            name="credits"
            value={sampleRowData.credits}
            onChange={(e) => handleInputChange('credits', e.target.value)}
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

export default UpdateCourse;
