import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccountPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session or user data here
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Your Account</h2>
        <p className="text-gray-700 text-center mb-6">
          Here you can view and edit your account information.
        </p>
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 bg-red-600 text-white font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AccountPage;
