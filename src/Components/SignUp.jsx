import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
  });
  const [showWelcome, setShowWelcome] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process signup logic here
    setShowWelcome(true);
    setTimeout(() => {
      setShowWelcome(false);
      navigate('/Home');
    }, 3000); // Redirect after 3 seconds (adjust as needed)
  };

  return (
    <div className='Layout'>
      <div className="container">
        <h1 id="appName">DOMESHA</h1>
        <h1 id="createAccount">Create an account</h1>
        <h3 id="connect">Connect your business!</h3>
        {showWelcome && (
          <div className="notification">
            <p>Welcome! You have successfully signed up.</p>
          </div>
        )}
        <form id="signUpBox" onChange={handleChange} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Username"
            className='inputs'
            required
          /><br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className='inputs'
            required
          /><br />
          <input
            type="tel"
            name="contact"
            placeholder="Enter Your Phone Number"
            className='inputs'
            required
          /><br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className='inputs'
            required
          /><br />
          <button id='s-btn' type="submit">
            Sign Up
          </button>
        </form>
        <p id='s-account'>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
      <img className='s-image' src="/on the rocks.png" alt="glass" />
    </div>
  );
}

export default SignUp;



    