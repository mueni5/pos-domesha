import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Orders from './Components/Orders';
import Footer from './Components/Footer';
import SalesPage from './Components/SalesPage';
import Admin from './Components/Admin';
import Cashier from './Components/Cashier';
import Waiter from './Components/Waiter';
import Dashboard from './Components/Dashboard';

const UserRoleContext = React.createContext();

function App() {
  const [userRole, setUserRole] = useState('guest');

  const userRoles = ['cashier', 'waiter', 'bartender', 'admin'];

  const renderUserRoleComponent = () => {
    if (userRoles.includes(userRole)) {
      switch (userRole) {
        case 'cashier':
          return <Cashier />;
        case 'admin':
          return <Admin />;
        case 'waiter':
          return <Waiter />;
        default:
          return <div>Unauthorized Access</div>; 
      }
    } else {
      return <div>Unauthorized Access</div>; 
    }
  };

  const renderLogIn = (props) => (
    <LogIn {...props} setUserRole={setUserRole} />
  );

  return (
    <Router>
      <UserRoleContext.Provider value={{ userRole, setUserRole }}>
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
            <Route path="/login" element={<LogIn setUserRole={setUserRole} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<Menu />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
          </Routes>
          <Footer />
        </div>
      </UserRoleContext.Provider>
    </Router>
  );
}

export { UserRoleContext, App as default };
