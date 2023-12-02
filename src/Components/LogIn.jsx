import React, { useState } from 'react';
import './LogIn.css';
import { NavLink, useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    role: '', // Added role in the login data
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here based on the selected role
    // For now, it just navigates to the root '/'
    navigate('/');
  };

  return (
    <div className="Layout">
      <div className="container">
        <h1 id='domesha'>DOMESHA</h1>
        <h1 id="welcome">Hi, Welcome Back! 👋</h1>
        <form id="loginBox" onChange={handleChange} onSubmit={handleSubmit}>
          <label htmlFor="email" id="e-label">
            Email
          </label><br />
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            id="input"
            required
          /><br />
          <label htmlFor="password" id="p-label">
            Password
          </label><br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id="input"
            required
          /><br />
          <label htmlFor="role" id="role-label">
            User Role
          </label><br />
          <select
            name="role"
            id="role"
            onChange={handleChange}
            value={loginData.role}
            required
          >
            <option value="" disabled>Select User Role</option>
            <option value="cashier">Cashier</option>
            <option value="waiter">Waiter</option>
            <option value="bartender">Bartender</option>
            <option value="supervisor">Supervisor</option>
            <option value="admin">Admin</option>
          </select><br />
          <button
            id='l-btn'
            type='submit'
          >
            Login
          </button>
        </form>
        <p id='l-account'>
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </div>
      <img className='s-image' src="/on the rocks.png" alt="glass" />
    </div>
  );
}

export default LogIn;
