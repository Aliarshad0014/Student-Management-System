import React from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';

const Programs = ({ programs }) => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      {/* Main Content with margin-top to create space */}
      <main className="p-4 mt-24 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:ml-32 lg:mr-32"> {/* Adjust the mt value based on your header height */}
        {/* Programs Heading */}
        <h2 className="text-2xl font-bold mb-4 mt-4 text-red-900 text-left">Programs</h2>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link to={'/courses'}
              key={program.id}
              className="relative bg-black p-4 rounded-md flex flex-col justify-center items-center transition ease-in-out duration-500 transform hover:scale-105 focus:outline-none shadow-md"
              style={{
                height: '240px',
                backgroundColor: program.color // Set background color based on program color
              }}
            > 
              <h3 className="text-white text-xl font-bold mb-4 z-20">{program.name}</h3> {/* Increase the z-index value */}
              <hr className="border-b-2 border-white w-14" /> {/* Underline below program name */}
              {/* <p className="text-white text-sm z-20">{program.details}</p> */}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Programs;
