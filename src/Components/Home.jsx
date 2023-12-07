import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div>
        <img className='s-image' src="/Cover.jpeg" alt="Domesha Cover" />
      </div>
      <div className="text-overlay"></div>
      <div>
        <h1>DOMESHA</h1>
        <p>An all-in-one platform to start, manage and grow your Business</p>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
}

export default Home;
