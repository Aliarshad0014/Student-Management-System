import React from 'react';
import Header from '../components/header'; // Assuming you have a Header component

const FinancePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      <main className="p-4 mt-24 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:ml-32 lg:mr-32">
        <h2 className="text-2xl font-bold mb-4 text-red-800">Finance Managment</h2>

        {/* Grid of Boxes */}
        <div className="grid grid-cols-2 gap-6 h-[70vh] relative">
          {/* Fees Box */}
          <a href="/fees" className="bg-gray-200 p-8 rounded-lg flex justify-center items-center text-center relative transform transition duration-500 ease-in-out hover:scale-105 ">
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('./static/images/fee.png')" }}></div>
            <h3 className="text-2xl font-semibold relative z-10">Fees</h3>
          </a>

          {/* Salaries Box */}
          <a href="/salaries" className="bg-gray-200 p-8 rounded-lg flex justify-center items-center text-center relative transform transition duration-500 ease-in-out hover:scale-105 ">
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('./static/images/salary.png')" }}></div>
            <h3 className="text-2xl font-semibold relative z-10">Salaries</h3>
          </a>
        </div>
      </main>
    </div>
  );
};

export default FinancePage;

