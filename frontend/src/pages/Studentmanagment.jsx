import React, { useState } from 'react';
import Header from '../components/header'; // Assuming you have a Header component

const StudentManagement = () => {
  // Sample student data
  const students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    { id: 3, name: 'Student 3' },
    { id: 4, name: 'Student 4' },
    { id: 5, name: 'Student 5' },
    { id: 6, name: 'Student 6' },
    { id: 7, name: 'Student 7' },
    { id: 8, name: 'Student 8' },
    // { id: 9, name: 'Student 9' },
    // { id: 10, name: 'Student 10' },
    // { id: 11, name: 'Student 11' },
    // { id: 12, name: 'Student 12' },
    // { id: 13, name: 'Student 13' },
    // { id: 14, name: 'Student 14' },
    // { id: 15, name: 'Student 15' },
    // { id: 16, name: 'Student 16' },
    // { id: 17, name: 'Student 17' },
    // { id: 18, name: 'Student 18' },
    // { id: 19, name: 'Student 19' },
    // { id: 20, name: 'Student 20' },
    // { id: 21, name: 'Student 21' },
    // { id: 22, name: 'Student 22' },
    // Add more students as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) => {
    // Convert search term to lowercase for case-insensitive search
    const searchTermLower = searchTerm.toLowerCase();
    // Check if student name or ID contains the search term
    return (
      student.name.toLowerCase().includes(searchTermLower) ||
      student.id.toString().toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      <main className="p-4 mt-24 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:ml-32 lg:mr-32 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-red-800">Student Management</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Search students"
              className="p-2 border border-gray-300 rounded-md mr-2"
              value={searchTerm}
              onChange={handleSearch}
            />
            {/* Add search button here if needed */}
          </div>
        </div>

        {/* List of Students */}
        <ul className="divide-y divide-gray-200">
          {filteredStudents.map((student) => (
            <li key={student.id} className="py-3">
              <a href={`/students/${student.id}`}>
                <div>
                  <h3 className="text-md font-semibold">{student.name}</h3>
                  {/* Additional student details can be added here */}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentManagement;
