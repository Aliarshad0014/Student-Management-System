import React from 'react';
import Header from '../components/header';

const Programs = () => {
  // Sample program data, replace with your actual data
  const programsData = [
    { id: 1, name: ' University of Hertfordshire', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis feugiat arcu. Vivamus convallis, velit vel ultrices ultrices, ex nisi vestibulum nunc, sit amet rhoncus sem lacus vel orci.  ', color: '#ff7f0e' },
    { id: 2, name: 'Bachelors University of London', details: 'Sed at libero at erat luctus vulputate. Integer eget feugiat mi. Cras et nunc non magna consectetur egestas eget eget urna. Vivamus eu erat id ipsum vehicula rhoncus. ', color: '#2ca02c' },
    { id: 3, name: 'Higher National Diploma', details: 'Duis et nisi non neque dapibus dictum nec et eros. Aenean convallis justo nec purus suscipit tristique. Nam ac suscipit ligula. ', color: '#1f77b4' },
    // Add more programs as needed
  ];

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      {/* Main Content with margin-top to create space */}
      <main className="p-4 mt-24 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:ml-32 lg:mr-32"> {/* Adjust the mt value based on your header height */}
        {/* Programs Heading */}
        <h2 className="text-2xl font-bold mb-4 mt-4 text-red-900">Programs</h2>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsData.map((program) => (
            <div
              key={program.id}
              className="relative bg-black p-4 rounded-md flex flex-col justify-center items-center transition ease-in-out duration-500 transform hover:scale-105 focus:outline-none shadow-md"
              style={{
                height: '240px',
                backgroundColor: program.color // Set background color based on program color
              }}
            > 
              <h3 className="text-white text-xl font-bold mb-4 z-20">{program.name}</h3> {/* Increase the z-index value */}
              <hr className="border-b-2 border-white w-14 mb-10" /> {/* Underline below program name */}
              <p className="text-white text-sm z-20">{program.details}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Programs;
