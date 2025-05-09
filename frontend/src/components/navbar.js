import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = ({ role }) => {
  return (
    <nav className="navbar">
      <h2>FSMS</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {role === 'admin' && <Link to="/admin">Dashboard</Link>}
        {role === 'staff' && <Link to="/staff">Dashboard</Link>}
      </div>
    </nav>
  );
};

export default Navbar;