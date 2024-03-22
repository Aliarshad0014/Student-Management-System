import React from 'react';

const Departments = ({ departments }) => {
  return (
    <div className="flex flex-col h-screen">

      {/* Main Content with margin-top to create space */}
      <main className="p-4 lg:ml-32 lg:mr-32"> {/* Adjust the mt value based on your header height */}
        {/* Departments Heading */}
        <h2 className="text-2xl font-bold mb-4 mt-4 text-red-800 text-left">Departments</h2>

        {/* Grid of Departments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department) => (
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
    </div>
  );
};

export default Departments;
