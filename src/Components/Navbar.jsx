import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <nav>
        <ul>
          <li><a href="/orders">Order Section</a></li>
          <li><a href="/sales">Sales</a></li>
          <li><a href="/Products">Products</a></li>
          <li><a href="admin">Admin</a></li>
          <li><a href="login">LogIn</a></li>
          <li><a href="signup">SignUp</a></li>
          
        </ul>
      </nav>
    );
}
export default Navbar