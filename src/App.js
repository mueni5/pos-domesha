import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Components/LogIn';  
import SignUp from './Components/SignUp';
import Products from './Components/Products';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Orders from './Components/Orders';
import Footer from './Components/Footer';
import SalesPage from './Components/SalesPage';
import AdminPage from './Components/AdminPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <main className="text-gray-400 bg-gray-900 body-font">
                <Navbar />
                <Header />
              </main>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/admin" element={<AdminPage />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
