import React from 'react';
import './Header.css';


function Header() {
  return (
    <header>
      <div>
      <img className='s-image' src="/Cover.jpeg" alt="glass"/>
      </div>
      <div>
        <h1>DOMESHA</h1>
        <p>An all-in-one platform to start, manage and grow your Business</p>
        <button>Register</button>
        
      </div>
    </header>
  );
}

export default Header;
