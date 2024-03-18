import React from 'react';

const Register = () => {
  return (
    <div className="relative flex h-screen">
      {/* Background image */}
      <img className='w-full h-full object-cover' src={'/static/images/loginbg.png'} alt="" />
      {/* Blur effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      </div>
      {/* Registration form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-8 max-w-md w-full bg-gray-100 rounded-md">
          <h2 className="text-3xl font-semibold mb-4">Register</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-400 transition duration-300 ease-in-out"
            >
              Register
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

