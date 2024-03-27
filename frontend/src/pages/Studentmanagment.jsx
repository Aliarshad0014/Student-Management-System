import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const StudentManagement = ({ students, studentInCourses }) => {
  const { course_id } = useParams(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const courseIdNumber = parseInt(course_id, 10);

  // Filter studentInCourses by course_id
  const filteredStudentInCourses = studentInCourses.filter(student => student.course_id === courseIdNumber);

  useEffect(() => {
    // Filter students by student_id from filteredStudentInCourses
    const filteredStudents = students.filter(student =>
      filteredStudentInCourses.some(sc => sc.student_id === student.student_id)
    );
    setFilteredStudents(filteredStudents);
  }, [students, filteredStudentInCourses]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudentsByNameOrId = filteredStudents.filter((student) => {
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
      <main className="p-4 lg:ml-32 lg:mr-32 flex flex-col">
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
          </div>
        </div>

        {/* List of Students */}
        <div className="overflow-y-auto max-h-[500px]">
          <ul className="divide-y divide-gray-200">
            {filteredStudentsByNameOrId.map((student) => (
              <li key={student.id} className="py-3 text-left">
                {/* Link to StudentProfile with student's details */}
                <Link to={`/student-profile/${student.student_id}`} className="hover:underline">
                  <div>
                    <h3 className="text-md font-semibold">{student.student_id} - {student.name}</h3>
                    {/* Additional student details can be added here */}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default StudentManagement;
