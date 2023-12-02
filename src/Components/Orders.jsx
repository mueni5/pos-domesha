import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  // Dummy data for orders
  const dummyOrders = [
    { id: 1, total: 25.99 },
    { id: 2, total: 15.5 },
    { id: 3, total: 32.0 },
  ];

  const fetchOrders = () => {
    // Simulate fetching orders from the API
    setOrders(dummyOrders);
  };

  const handleProcess = async (orderId) => {
    // Simulate calling API to mark order as processed
    console.log(`Order ${orderId} processed.`);
    // Navigate to the payment section after processing
    navigate('/sales');
  };

  const handleConvertToCredit = async (orderId) => {
    // Simulate calling API to convert cash order to credit
    console.log(`Order ${orderId} converted to credit.`);
    // Navigate to the admin section after converting to credit
    navigate('/admin');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.total}</td>
              <td>
                <button onClick={() => handleProcess(o.id)}>Process</button>
                <button onClick={() => handleConvertToCredit(o.id)}>Credit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
