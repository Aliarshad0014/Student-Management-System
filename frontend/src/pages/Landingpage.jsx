import React from 'react';
import { Link } from 'react-router-dom';

export default function Landingpage() {
    return (
        <section className="h-screen bg-gradient-to-b from-white via-slate-100 to-purple-900 justify-around flex flex-col md:flex-row items-center">
            <div className="text-center md:text-left md:w-1/2 md:pl-12 ml-10">
                <h1 className="text-4xl md:text-6xl font-bold text-black">
                    <p className="text-black">Student <br /><span className="text-red-500">Management</span> <span className="text-black">System</span></p>
                </h1>
                <h2 className='pt-4 pb-8 text-base md:text-lg text-black max-w-sm md:max-w-md font-light '>Manage your students effectively with our innovative digital solutions.</h2>
                <Link to="/student-management" className=" w-1/3 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded transition duration-300 ease-in-out flex items-start shadow-md mt-4">
                    <button>Student Management</button>
                </Link>

                <Link to="/staff-management"  className="w-1/3 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-9 rounded transition duration-300 ease-in-out flex items-start shadow-md mt-4 mb-16">
                    <button>Staff Management</button>                
                </Link>
            </div>
            <div className="flex justify-center items-center md:w-1/2 mr-10 md:mt-0 mb-16">
                <img className='rounded-lg' src={'/static/images/img.png'} alt="" width="80%" max-width="400" />
            </div>
        </section>
    );
}







