import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const CoursesTable = ({ courses, onAddClick }) => {
  const handleAddClick = () => {
    if (onAddClick) {
      onAddClick();
    }
  };

  return (
    <div>
      <div className="flex justify-end">
      <Link to="/add-courses" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4">
          Add Courses +
        </Link>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/6">Course ID</th>
            <th className="px-4 py-2 w-1/6">Program ID</th>
            <th className="px-4 py-2 w-1/4">Name</th>
            <th className="px-4 py-2 w-1/6">Credits</th>
            <th className="px-4 py-2 w-1/6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className='bg-white'>
              <td className="border px-4 py-2">{course.course_id}</td>
              <td className="border px-4 py-2">{course.program_id}</td>
              <td className="border px-4 py-2">{course.name}</td>
              <td className="border px-4 py-2">{course.credits}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-around">
                  <Link to="/update-course" className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</Link>
                  <button className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
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
