import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDepartments = () => {
    // Define initial state for input values
    const [inputValues, setInputValues] = useState({
        department_id: '',
        name: '',
        contact_number: '',
        head_of_department: ''
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
            const response = await fetch('http://localhost:5000/api/department/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputValues)
            });
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
            toast.success('Department added successfully!');
            // Optionally, reset the form fields
            setInputValues({
                department_id: '',
                name: '',
                contact_number: '',
                head_of_department: ''
            });
        } catch (error) {
            toast.error(error.message); // Display error message in toast
        }
    };

    return (
        <div className="max-w-lg mx-auto mb-8 mt-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
            <h2 className="text-xl font-semibold mb-4">Add New Department</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Department ID</label>
                    <input
                        type="text"
                        name="department_id"
                        value={inputValues.department_id}
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
                    <label className="block text-gray-700">Contact Number</label>
                    <input
                        type="text"
                        name="contact_number"
                        value={inputValues.contact_number}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Head of Department</label>
                    <input
                        type="text"
                        name="head_of_department"
                        value={inputValues.head_of_department}
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

export default AddDepartments;
