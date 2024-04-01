import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";

const Login = ({setIsLoggedIn}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compare the entered password with the hardcoded one
    if (password === 'aliarshad') {
      setIsLoggedIn(true);
      // Store login state in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      // Password is correct, navigate to the Landing Page
      navigate('/');
    } else {
      toast.error('Incorrect Password');        
    }
  };

  return (
    <div className="relative flex h-screen">
      {/* Background image */}
      <img className='w-full h-full object-cover' src={'/static/images/loginbg.png'} alt="" />
      {/* Right side with login form */}
      <div className="absolute inset-0 flex items-center justify-center text-left">
        <img src="./static/images/Tmuc.png" className="mb-4 h-52 mr-14" alt="Profile" />
        <div className="p-8 max-w-md w-full bg-gray-100 rounded-md">
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-12 right-0 flex items-center px-2 focus:outline-none"
              >
                {showPassword ? <  RiEyeFill /> : <RiEyeCloseLine /> }
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-400 transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
