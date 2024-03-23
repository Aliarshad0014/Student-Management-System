import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const CoursesTable = ({ courses, onAddClick }) => {
  const handleAddClick = () => {
    if (onAddClick) {
      onAddClick();
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end">
      <Link to="/add-courses" className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded mb-4">
          Add Courses +
        </Link>
      </div >
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Program ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Credits</th>
            <th className="px-16 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {courses.map((course, index) => (
            <tr key={index} className='bg-white'>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.course_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.program_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.credits}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="whitespace-nowrap text-sm text-gray-900">
                  <Link to={`/update-course/${course.course_id}`} className="ml-2 px-2 py-1 font-bold bg-blue-500  hover:bg-blue-600 text-white rounded">Update</Link>
                  <button className="ml-2 px-2 py-1 font-bold bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable; // Exporting the component
