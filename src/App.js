import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Components/LogIn';  
import SignUp from './Components/SignUp';
import Products from './Components/Products';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Orders from './Components/Orders';

function App() {
  return (
    <Router>
      <Navbar/>
      <Header />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
