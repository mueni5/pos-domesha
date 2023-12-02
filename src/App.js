import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Orders from './Components/Orders';
import Footer from './Components/Footer';
import SalesPage from './Components/SalesPage';
import AdminPage from './Components/AdminPage';
import Cashier from './Components/Cashier';
import Waiter from './Components/Waiter';

function App() {
  // Replace this with your actual authentication logic to determine the user's role
  const userRoles = ['cashier', 'waiter', 'bartender', 'admin'];

  // Define a helper function to conditionally render components based on user roles
  const renderUserRoleComponent = () => {
    if (userRoles.includes('cashier')) {
      return <Cashier />;
    } else if (userRoles.includes('admin')) {
      return <AdminPage />;
    } else if (userRoles.includes('waiter')) {
      return <Waiter />;
    
    } else {
      return <div>Unauthorized Access</div>; // Fallback for unknown roles
    }
  };

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
          <Route path="/user" element={renderUserRoleComponent()} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/sales" element={<SalesPage />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
