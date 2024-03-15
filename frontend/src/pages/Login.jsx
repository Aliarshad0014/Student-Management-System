import React from 'react';

const Login = () => {
  return (
    <div className="flex h-screen">
      <img className='w-full h-full object-cover' src={'/static/images/loginbg.png'} alt="" />
      <div className="w-1/2 bg-white flex items-center justify-center">
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
              className="w-full bg-purple-300 text-white p-2 rounded-md hover:bg-purple-400"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
