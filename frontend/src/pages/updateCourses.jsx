import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const UpdateCourse = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams(); // Get the ID from the URL params

  // Handle input change
  const handleInputChange = (name, value) => {
    // Update the course state with the new value
    const updatedCourse = { ...course, [name]: value };
    setCourse(updatedCourse);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/course/put`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
      });
      if (!response.ok) {
        throw new Error('Failed to update course data');
      }
      toast.success('Course updated successfully');
    } catch (error) {
      console.error('Error updating course data:', error.message);
      toast.error('Failed to update course data');
    }
  };

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/course/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch course data');
        }
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course data:', error.message);
      }
    };
    fetchCourseData();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
      <h2 className="text-xl font-semibold mb-4">Update Course Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Course ID</label>
          <input
            type="text"
            name="course_id"
            value={course.course_id}
            onChange={(e) => handleInputChange('course_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Program ID</label>
          <input
            type="text"
            name="program_id"
            value={course.program_id}
            onChange={(e) => handleInputChange('program_id', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Name</label>
          <input
            type="text"
            name="name"
            value={course.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 pt-2">Credits</label>
          <input
            type="number"
            name="credits"
            value={course.credits}
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
      <ToastContainer />

    </div>
  );
};

export default UpdateCourse;
