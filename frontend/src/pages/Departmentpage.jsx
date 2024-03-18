import React from 'react';
import Header from '../components/header';

const Departments = () => {
  // Sample department data, replace with your actual data
  const departmentsData = [
    { id: 1, name: 'Computer Science', image: './static/images/dept1.png', details: 'Details for Department 1' },
    { id: 2, name: 'Business Administration', image: './static/images/dept2.png', details: 'Details for Department 2' },
    { id: 3, name: 'Law', image: './static/images/dept3.png', details: 'Details for Department 3' },
    { id: 4, name: 'Accounting', image: './static/images/dept4.png', details: 'Details for Department 4' }, // Fixed id value
    // Add more departments as needed
  ];

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      {/* Main Content with margin-top to create space */}
      <main className="p-4 mt-24 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:ml-32 lg:mr-32"> {/* Adjust the mt value based on your header height */}
        {/* Departments Heading */}
        <h2 className="text-2xl font-bold mb-4 mt-4 text-red-800 text-left">Departments</h2>

        {/* Grid of Departments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsData.map((department) => (
            <button
              key={department.id}
              className="relative bg-black rounded-md overflow-hidden transition ease-in-out duration-500 transform hover:scale-105 focus:outline-none shadow-md"
              style={{
                height: '240px'
              }}
            > 
              <div className="h-1/2 bg-cover" style={{ backgroundImage: `url(${department.image})`}}></div>
              <div className="flex flex-col justify-center items-center h-1/2 p-4 bg-white text-black">
                <h3 className="text-xl font-bold mb-2">{department.name}</h3>
                <p>{department.details}</p>
              </div>
            </button>
          ))}
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Departments;
