import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/dashboard');
  };

  return (
    <header>
      <div>
        <img className='s-image' src="/Cover.jpeg" alt="glass"/>
      </div>
      <div>
        <h1>DOMESHA</h1>
        <p>An all-in-one platform to start, manage and grow your Business</p>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </header>
  );
}

export default Header;



