import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';

import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';

import AdminDashboard from './components/AdminDashboard';
import ChefDashboard from './components/Dashboard/ChefDashboard';
import FoodSafetyOfficerDashboard from './components/Dashboard/FoodSafetyOfficerDashboard';
import DashboardPage from './pages/DashboardPage'; // Optional fallback dashboard

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Auth Pages */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          {/* Role-Based Dashboards */}
          <Route path="/Dashboard/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/Dashboard/ChefDashboard" element={<ChefDashboard />} />
          <Route path="/Dashboard/FoodSafetyOfficerDashboard" element={<FoodSafetyOfficerDashboard />} />

          {/* Optional Generic Dashboard */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Fallback */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
