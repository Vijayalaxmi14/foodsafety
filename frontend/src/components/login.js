import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);
      const { role } = res.data;

      // Navigate based on role
      if (role === 'Admin') navigate('/Dashboard/AdminDashboard');
else if (role === 'Chef') navigate('/Dashboard/ChefDashboard');
else if (role === 'FoodSafetyOfficer') navigate('/Dashboard/FoodSafetyOfficerDashboard');
else navigate('/dashboard');

    } catch (err) {
      console.error(err);
      alert('Login failed!');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
