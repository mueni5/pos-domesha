import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <nav>
        <ul>
          
      
          <li><a href="/menu">Menu</a></li>
          <li><a href="/orders">Order Section</a></li>
          <li><a href="/sales">Sales</a></li>
          <li><a href="admin">Admin</a></li>
          <li><a href='dashboard'>Dashboard</a></li>
          <li><a href="signup">SignUp</a></li>
          
        </ul>
      </nav>
    );
}
export default Navbar