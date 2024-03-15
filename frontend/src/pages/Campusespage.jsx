import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Campuses = () => {
  // Sample campus data, replace with your actual data
  const campusesData = [
    { id: 1, name: 'ISLAMABAD CAMPUS', image: './static/images/isb.png' },
    { id: 2, name: 'RAWALPINDI CAMPUS', image: './static/images/rwp.png' },
    { id: 3, name: 'KARACHI CAMPUS', image: './static/images/khi.png' },
    { id: 4, name: 'LAHORE CAMPUS', image: './static/images/lhr.png' }, // Fixed id value
    // Add more campuses as needed
  ];

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      {/* Main Content with margin-top to create space */}
      <main className="p-4 mt-24 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:ml-32 lg:mr-32"> {/* Adjust the mt value based on your header height */}
        {/* Campuses Heading */}
        <h2 className="text-2xl font-bold mb-4 mt-4 text-red-900">Choose Your Campus</h2>

        {/* Grid of Campuses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusesData.map((campus) => (
            <button
              key={campus.id}
              className="relative bg-black p-4 rounded-md flex flex-col justify-center items-center transition ease-in-out duration-500 transform hover:scale-105 focus:outline-none shadow-md"
              style={{
                height: '240px'
              }}
            > 
              <div className="absolute inset-0 bg-cover transition-opacity duration-300 opacity-75 rounded-md hover:opacity-100 shadow-md" style={{ backgroundImage: `url(${campus.image})`}}></div>
              <h3 className="text-black text-xl font-bold mb-2 z-20 hover: pointer-events-none lg:w-[25rem] h-12 flex items-center justify-center bg-red-700 opacity-80">{campus.name}</h3>
            </button>
          ))}
        </div>
      {/* <Footer/> */}
      </main>
    </div>
  );
};

export default Campuses;
