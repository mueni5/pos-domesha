import React, { useState, useEffect } from 'react';
import SalesReport from './SalesReport';

const AdminPage = () => {
  const [adminProfile, setAdminProfile] = useState({});
  const [totalSales, setTotalSales] = useState(0);
  const [profit, setProfit] = useState(0);
  const [loss, setLoss] = useState(0);

  // Dummy data for admin profile
  const dummyAdminProfile = {
    username: 'admin123',
    email: 'admin@example.com',
    fullName: 'Admin Manager',
  };

  // Dummy data for total sales, profit, and loss
  const dummyTotalSales = 50000;
  const dummyProfit = 20000;
  const dummyLoss = 10000;

  useEffect(() => {
    // Simulate fetching admin profile data
    setAdminProfile(dummyAdminProfile);

    // Simulate fetching total sales, profit, and loss data
    setTotalSales(dummyTotalSales);
    setProfit(dummyProfit);
    setLoss(dummyLoss);
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>

      <div>
        <h2>Admin Profile</h2>
        <p>Username: {adminProfile.username}</p>
        <p>Email: {adminProfile.email}</p>
        <p>Full Name: {adminProfile.fullName}</p>
      </div>

      <div>
        <h2>Financial Overview</h2>
        <p>Total Sales: ${totalSales}</p>
        <p>Profit: ${profit}</p>
        <p>Loss: ${loss}</p>
      </div>

      {/* Add more sections for other admin-related data as needed */}
    </div>
  );
};

export default AdminPage;
