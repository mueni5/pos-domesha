import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Orders from './Components/Orders';
import Footer from './Components/Footer';
// import SalesPage from './Components/SalesPage';
import SalesReport from './Components/SalesReport';
import Cashier from './Components/Cashier';
import Waiter from './Components/Waiter';
import Dashboard from './Components/Dashboard';
import Admin from './Components/Admin';
import MenuItemDetails from './Components/MenuItemDetails';

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
          return <SalesReport />;
        case 'waiter':
          return <Waiter />;
        default:
          return <div>Unauthorized Access</div>; // Fallback for unknown roles
      }
    } else {
      return <div>Unauthorized Access</div>; // Fallback for unknown roles
    }
  };

  return (
    <Router>
      <UserRoleContext.Provider value={{ userRole, setUserRole }}>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <main className="text-black-400 bg-black-900 body-font">
                  <Navbar />
                  <Home />
                </main>
              }
            />
            <Route path="/user" element={renderUserRoleComponent()} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuItemDetails />} />
            <Route path="/orders" element={<Orders />} />
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
