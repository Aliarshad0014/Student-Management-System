import React from 'react';
import { Link } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const studentincoursesTable = ({ studentInCourses, onDeleteClick }) => {
    
    const handleDeleteClick = async (id) => {
        try {
          const response = await fetch(`http://localhost:5000/api/studentInCourse/delete/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
    
          if (!response.ok) {
            throw new Error('Failed to delete salary');
          }
    
          toast.success('Salary deleted successfully!');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } catch (error) {
          toast.error('Failed to delete salary');
        }
      };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end">
        <Link to="/add-studentincourses" className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded mb-4">
          Add Student In Course +
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course ID</th>
            <th className="px-16 py-3 text-right text-xs text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {studentInCourses.map((studentincourse, index) => (
            <tr key={index} className='bg-white'>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{studentincourse.student_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{studentincourse.course_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="whitespace-nowrap text-sm text-gray-900 flex justify-end">
                  <button onClick={() => handleDeleteClick(studentincourse.student_id)} className="ml-2 px-2 py-1 font-bold bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />

    </div>
  );
};

export default studentincoursesTable; // Exporting the component
