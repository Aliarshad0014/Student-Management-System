import React from 'react';

function Header({ isLoggedIn, setIsLoggedIn }) {
    const headerStyle = {
        backgroundColor: 'white',
        position: 'relative',
        width: '100%',
        zIndex: 10,
    };

    const handleLogout = () => {
        // Set isLoggedIn state to false
        setIsLoggedIn(false);
        // Clear the isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');
        // Redirect the user to the login page
        window.location.replace('/login');
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
                            <a href="/admin" className="hover:text-red-600 ease-in-out duration-300 text-purple-700">
                                Admin
                            </a>
                        </li>
                        {/* Render logout button only if isLoggedIn is true */}
                    </ul>
                </nav>
                {isLoggedIn && (
                    <button onClick={handleLogout} className="bg-gradient-to-b rounded-sm text-black from-red-600 to-red-600 p-2 px-6 hover:from-red-700 hover:to-red-700 hover:scale-105 transition-all ease-in-out duration-300 w-28 hover:text-white">
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
