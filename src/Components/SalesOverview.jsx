import React, { useState, useEffect } from 'react';
import SalesPage from './SalesPage';
import SalesReport from './SalesReport';

const SalesOverview = () => {
  const [showSalesReport, setShowSalesReport] = useState(false);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch sales data when the component mounts
    fetchSalesData();
  }, []);

  const fetchSalesData = () => {
    // Simulate fetching sales data from the server
    const dummySalesData = [
      { id: 1, date: '2023-12-01', totalSales: 100, profit: 20 },
      { id: 2, date: '2023-12-02', totalSales: 120, profit: 30 },
      // Add more dummy data or replace it with actual data
    ];
    setSalesData(dummySalesData);
    setShowSalesReport(true); // Set state to show SalesReport component
  };

  return (
    <div>
      <SalesPage />
      {showSalesReport && <SalesReport salesData={salesData} />}
    </div>
  );
};

export default SalesOverview;
