import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Orders from './Components/Orders';
import LogIn from './Components/LogIn';  
import SignUp from './Components/SignUp';
import Products from './Components/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </Router>
  );
}

export default App;
