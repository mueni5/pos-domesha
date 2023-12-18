import React, { useState, useEffect } from 'react';
import SalesOverview from './SalesOverview';
import './Admin.css'

const Admin = () => {
  const [stock, setStock] = useState([]);
  const [payments, setPayments] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [staffOnDuty, setStaffOnDuty] = useState([]);
  const [salesReports, setSalesReports] = useState([]);
  const [showSalesReport, setShowSalesReport] = useState(false); // Add state to control visibility

  useEffect(() => {
    // Fetch data when the component mounts
    fetchStock();
    fetchPayments();
    fetchTotalSales();
    fetchStaffOnDuty();
    fetchSalesReports();
  }, []);

  const fetchStock = () => {
    // Simulate fetching stock information from the server
    const dummyStockData = [
      { id: 1, itemName: 'Item A', quantity: 50 },
      { id: 2, itemName: 'Item B', quantity: 30 },
      { id: 3, itemName: 'Item C', quantity: 20 },
    ];
    setStock(dummyStockData);
  };

  const fetchPayments = () => {
    // Simulate fetching payments information from the server
    const dummyPaymentsData = [
      { id: 1, amount: 100 },
      { id: 2, amount: 50 },
      { id: 3, amount: 80 },
    ];
    setPayments(dummyPaymentsData);
  };

  const fetchTotalSales = () => {
    // Simulate fetching total sales information from the server
    const dummyTotalSales = 230; // Replace with actual total sales data
    setTotalSales(dummyTotalSales);
  };

  const fetchStaffOnDuty = () => {
    // Simulate fetching staff on duty information from the server
    const dummyStaffData = [
      { id: 1, name: 'Staff A' },
      { id: 2, name: 'Staff B' },
    ];
    setStaffOnDuty(dummyStaffData);
  };

  const fetchSalesReports = () => {
    // Simulate fetching sales reports information from the server
    const dummyReportsData = [
      { id: 1, date: '2023-12-01', totalSales: 100, profit: 20 },
      { id: 2, date: '2023-12-02', totalSales: 120, profit: 30 },
    ];
    setSalesReports(dummyReportsData);
    setShowSalesReport(true); // Set state to show SalesReport component
  };

  return (
    <div>
  
      <section>
        <h3>Stock Available</h3>
        <table>
          {/* Render stock information */}
          
        </table>
      </section>
      <section>
        <h3>Payments Received</h3>
        <table>
          {/* Render payments information */}
          
        </table>
      </section>
      <section>
        <h3>Total Sales of the Day</h3>
        <p>Total Sales: ${totalSales}</p>
      </section>
      <section>
        <h3>Staff on Duty</h3>
        <ul>
          {/* Render staff on duty information */}
          {staffOnDuty && staffOnDuty.map((staff) => (
            <li key={staff.id}>{staff.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Generate Reports</h3>
        <button onClick={fetchSalesReports}>Generate Sales Report</button>
        {showSalesReport && <SalesOverview />} {/* Use SalesOverview component */}
        <table>
          {/* Render sales reports information */}
          {/* ... */}
        </table>
      </section>
    </div>
  );
};

export default Admin;
