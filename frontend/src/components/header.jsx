import React from 'react';

function Header() {
    const headerStyle = {
        backgroundColor: 'white',
        position: 'fixed',
        width: '100%',
        zIndex: 10,
    };

    return (
        <header
            style={headerStyle}
            className="py-5 shadow-sm"
        >
            <div className="container mx-auto flex justify-around items-center">
                <div>
                    <img src={'./static/images/Tmuc.png'} alt="Tmuc Logo" className="w-full h-14" />
                </div>
                <nav className="hidden md:hidden lg:flex">
                    <ul className="flex space-x-10 text-black text-lg font-light">
                    <li>
                            <a href="/" className="hover:text-red-600 ease-in-out duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/Campuses" className="hover:text-red-600 ease-in-out duration-300">
                                Campuses
                            </a>
                        </li>
                        <li>
                            <a href="/Courses" className="hover:text-red-600 ease-in-out duration-300">
                                Courses
                            </a>
                        </li>
                        <li>
                            <a href="/Departments" className="hover:text-red-600 ease-in-out duration-300">
                                Departments
                            </a>
                        </li>
                        <li>
                            <a href="/Programs" className="hover:text-red-600 ease-in-out duration-300">
                                Programs
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className="bg-gradient-to-b rounded-sm text-black from-red-600 to-red-600 p-2 px-6 hover:from-red-700 hover:to-red-700 hover:scale-105 transition-all ease-in-out duration-300  flex items-center justify-center w-28 hover:text-white">
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;
