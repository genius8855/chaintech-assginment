import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Registration logic here
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-md w-full transform transition duration-500 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-200 ease-in-out"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-200 ease-in-out"
              placeholder="Enter your email"
            />
          </div>

          {/* Username Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-200 ease-in-out"
              placeholder="Choose a username"
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
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-200 ease-in-out"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition transform hover:scale-105"
          >
            Register
          </button>
        </form>

        {/* Already Have Account Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-800 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
