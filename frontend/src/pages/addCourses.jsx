import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourses = () => {
    // Define initial state for input values
    const [inputValues, setInputValues] = useState({
        course_id: '',
        program_id: '',
        name: '',
        credits: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/course/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
        });

        if (!response.ok) {
            // Extract error message from response
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        toast.success('Course added successfully!');
        // Optionally, reset the form fields
        setInputValues({
            course_id: '',
            program_id: '',
            name: '',
            credits: ''
        });
    } catch (error) {
        toast.error(error.message); // Display error message in toast
    }
};

    return (
        <div className="max-w-lg mx-auto mb-8 mt-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
            <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Course ID</label>
                    <input
                        type="text"
                        name="course_id"
                        value={inputValues.course_id}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Program ID</label>
                    <input
                        type="text"
                        name="program_id"
                        value={inputValues.program_id}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={inputValues.name}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Credits</label>
                    <input
                        type="text"
                        name="credits"
                        value={inputValues.credits}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 w-1/2 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out"
                    >
                        Add
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddCourses;
