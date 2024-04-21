import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Programs = ({ programs }) => {
  const { department_id } = useParams();

  const departmentIdNumber = parseInt(department_id, 10);

  // Filter programs based on department_id
  const filteredPrograms = programs.filter(program => program.department_id === departmentIdNumber);
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="p-4 lg:ml-32 lg:mr-32">
        <h2 className="text-2xl font-bold mb-4 mt-4 text-red-900 text-left">Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <Link to={`/courses/${program.program_id}`} // Assuming you have a route for individual programs
              key={program.id}
              className="relative bg-black p-4 rounded-md flex flex-col justify-center items-center transition ease-in-out duration-500 transform hover:scale-105 focus:outline-none shadow-md"
              style={{
                height: '240px',
                backgroundColor: program.color
              }}
            > 
              <h3 className="text-white text-xl font-bold mb-4 z-20">{program.name}</h3>
              <hr className="border-b-2 border-white w-14 mb-4" />
              <p className="text-white text-xs">Program ID: {program.program_id}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Programs;
