import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic here
    navigate('/account');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-md w-full transform transition duration-500 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Username Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Don't Have an Account Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
