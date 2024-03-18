import React, { useState } from 'react';

const Courses = () => {
  // Sample course data, replace with your actual data
  const courses = [
    { id: 1, name: 'Course A', description: 'Description for Course A' },
    { id: 2, name: 'Course B', description: 'Description for Course B' },
    { id: 3, name: 'Course C', description: 'Description for Course C' },
    { id: 4, name: 'Course D', description: 'Description for Course A' },
    { id: 1, name: 'Course A', description: 'Description for Course A' },
    { id: 2, name: 'Course B', description: 'Description for Course B' },
    { id: 3, name: 'Course C', description: 'Description for Course C' },
    { id: 1, name: 'Course A', description: 'Description for Course A' },
    { id: 2, name: 'Course B', description: 'Description for Course B' },
    { id: 3, name: 'Course C', description: 'Description for Course C' },

    // Add more courses as needed
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (course) => {
    // Handle click event, e.g., navigate to course details page
    console.log('Clicked:', course);
  };

  return (
    <div className="flex flex-col h-screen">
      <main className="p-4 mt-24 lg:ml-32 lg:mr-32 pb-16">
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
              <li
                key={course.id}
                className="p-4 mb-2 bg-white rounded-md cursor-pointer shadow-md hover:bg-red-50 transition duration-300 ease-in-out"
                onClick={() => handleClick(course)}
              >
                <h3 className="text-lg text-red-800 font-semibold mb-2">{course.name}</h3>
                <p>{course.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Courses;

