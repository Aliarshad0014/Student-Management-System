import React from 'react';

const Login = () => {
  return (
    <div className="relative flex h-screen">
      {/* Background image */}
      <img className='w-full h-full object-cover' src={'/static/images/loginbg.png'} alt="" />
      {/* Right side with login form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="./static/images/Tmuc.png" className="mb-4 h-52" alt="Profile" />
        <div className="p-8 max-w-md w-full bg-gray-100 rounded-md">
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <form>
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
              Log In
            </button>
          </form>
          {/* "New user?" register now statement */}
          <p className="text-gray-700 text-sm mt-4">
            New user? <a href="/register" className="text-purple-500 hover:underline">Register now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;



