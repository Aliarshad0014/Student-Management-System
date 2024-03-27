import React from 'react';

function Header() {
    const headerStyle = {
        backgroundColor: 'white',
        position: 'relative',
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
                    <a href="/">
                        <img src={'./static/images/Tmuc.png'} alt="Tmuc Logo" className="w-full h-14" />
                    </a>
                </div>
                <nav className="hidden md:hidden lg:flex">
                    <ul className="flex space-x-10 text-black text-lg font-light">
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
                        <li>
                            <a href="/Courses" className="hover:text-red-600 ease-in-out duration-300">
                                Courses
                            </a>
                        </li>
                        <li>
                            <a href="/admin" className="hover:text-red-800 ease-in-out duration-300 text-red-500 inline-block transform transition-transform hover:scale-110">
                                Admin
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

