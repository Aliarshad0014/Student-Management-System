import React, { useState } from 'react';
import Header from '../components/header';

const StudentManagement = ({ students }) => {
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
      student.student_id.toString().toLowerCase().includes(searchTermLower)
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
        <div className="overflow-y-auto max-h-[500px]">
          <ul className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <li key={student.id} className="py-3 text-left">
                <a href={`/students/${student.student_id}`}>
                  <div>
                    <h3 className="text-md font-semibold hover:underline">{student.name}</h3>
                    {/* Additional student details can be added here */}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default StudentManagement;

