import React from 'react';

export default function Landingpage() {
    return (
        <section className="h-screen bg-gradient-to-b from-white via-slate-100 to-purple-900 justify-around flex flex-col md:flex-row items-center">
            <div className="text-center md:text-left md:w-1/2 md:pl-12 ml-10 mt-10">
            <h1 className="text-4xl md:text-6xl font-bold text-black">
            <p className="text-black">Student <br /><span className="text-red-500">Management</span> <span className="text-black">System</span></p>
                </h1>
                <h2 className='pt-4 pb-8 text-base md:text-lg text-black max-w-sm md:max-w-md font-light '>Manage your students effectively with our innovative digital solutions.</h2>
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded transition duration-300 ease-in-out flex items-start shadow-md mt-4">
                    Student Management
                </button>
                <button className="bg-green-600 hover:bg--500 text-white font-semibold py-3 px-9 rounded transition duration-300 ease-in-out flex items-start shadow-md mt-4">
                    Staff Management
                </button>

            </div>
            <div className="flex justify-center items-center md:w-1/2 mt-8 mr-10 md:mt-0">
                <img className='rounded-lg mt-10' src={'/static/images/img.png'} alt="" width="80%" max-width="400" />
            </div>
        </section>
    );
}







