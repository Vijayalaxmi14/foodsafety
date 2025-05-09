import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
        <h1>Welcome to FSMS</h1>
      <p>Food Safety Management System</p>
      <h2>Select your Role</h2>
      <div className="dashboard-options">
        <Link to="/Dashboard/AdminDashboard" className="dashboard-card">Admin Dashboard</Link>
        <Link to="/Dashboard/ChefDashboard" className="dashboard-card">Chef Dashboard</Link>
        <Link to="/Dashboard/FoodSafetyOfficerDashboard" className="dashboard-card">Food Safety Officer Dashboard</Link>
      </div>
    </div>
  );
};

export default DashboardPage;
