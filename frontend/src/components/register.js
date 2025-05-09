import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'staff', // default role
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      alert('Registered successfully!');
      history.push('/Login');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" required onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" required onChange={handleChange} placeholder="Password" />
        <select name="role" onChange={handleChange}>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
          <option value="officer">Food Safety Officer</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
