import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AccountPage from './components/AccountPage';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        {/* Redirect to /login as default */}
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;
