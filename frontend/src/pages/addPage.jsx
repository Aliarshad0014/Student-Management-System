import React, { useState } from 'react';

const AddPage = ({ headers }) => {
    // Define initial state for input values
    const [inputValues, setInputValues] = useState({});

    // Handle input change
    const handleInputChange = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };

    // Render input fields dynamically based on table headers
    const renderInputFields = () => {
        return headers.map((header, index) => (
            <div key={index} className="mb-4">
                <label className="block text-gray-700">{header}</label>
                <input
                    type="text"
                    name={header}
                    value={inputValues[header] || ''}
                    onChange={(e) => handleInputChange(header, e.target.value)}
                    className="block w-full mt-1 p-4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
        ));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., sending data to backend)
        console.log('Form submitted with data:', inputValues);
    };

    return (
        <div className="max-w-lg mx-auto mb-8 mt-8 p-6 bg-purple-100 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            <form onSubmit={handleSubmit}>
                {renderInputFields()}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 w-1/2 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPage;
