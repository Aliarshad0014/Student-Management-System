import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 

const AllCourses = ({courses}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="p-4 lg:ml-32 lg:mr-32 pb-16">
        {/* Courses Heading with Search Bar */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-red-800 font-bold">Courses</h2>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search courses"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-md w-48"
          />
        </div>
        
        {/* List of Courses */}
        <div className="overflow-y-auto max-h-[500px]">
          <ul className="text-left">
            {filteredCourses.map((course) => (
              <Link to={`/student-management/${course.course_id}`}
                key={course.id}
                className="block p-4 mb-2 bg-white rounded-md cursor-pointer shadow-md hover:bg-red-50 transition duration-300 ease-in-out"
              >
                <h3 className="text-lg font-semibold mb-2"> {course.course_id} - {course.name}</h3>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default AllCourses
