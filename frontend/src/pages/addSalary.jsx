import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSalary = () => {
    // Define initial state for input values
    const [inputValues, setInputValues] = useState({
        salary_id: '',
        staff_id: '',
        amount: '',
        month: '',
        paid: ''
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
            const response = await fetch('http://localhost:5000/api/salary/post', {
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
            toast.success('Salary added successfully!');
            // Optionally, reset the form fields
            setInputValues({
                salary_id: '',
                staff_id: '',
                amount: '',
                month: '',
                paid: ''
            });
        } catch (error) {
            toast.error(error.message); // Display error message in toast
        }
    };

    return (
        <div className="max-w-lg mx-auto mb-8 mt-8 p-6 bg-purple-100 shadow-md rounded-md text-left">
            <h2 className="text-xl font-semibold mb-4">Add New Salary</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Salary ID</label>
                    <input
                        type="text"
                        name="salary_id"
                        value={inputValues.salary_id}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Staff ID</label>
                    <input
                        type="text"
                        name="staff_id"
                        value={inputValues.staff_id}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Amount</label>
                    <input
                        type="text"
                        name="amount"
                        value={inputValues.amount}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Month</label>
                    <input
                        type="text"
                        name="month"
                        value={inputValues.month}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Paid</label>
                    <input
                        type="text"
                        name="paid"
                        value={inputValues.paid}
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

export default AddSalary;

