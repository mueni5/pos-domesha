// SalesPage.jsx
import React, { useState, useEffect } from 'react';
import Payment from './Payment';
import { Link } from 'react-router-dom';
import Cashier from './Cashier'; 

function SalesPage() {
  const [orderLines, setOrderLines] = useState([]);
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPaymentMade, setIsPaymentMade] = useState(false);

  // Dummy data to simulate orders
  const dummyOrders = [
    { id: 1, itemName: 'Item A', quantity: 2, price: 15 },
    { id: 2, itemName: 'Item B', quantity: 1, price: 10 },
    { id: 3, itemName: 'Item C', quantity: 3, price: 8 },
  ];

  useEffect(() => {
    setOrderLines(dummyOrders);

    // Simulate calculating tax and total price
    const calculatedTax = dummyOrders.reduce((acc, order) => acc + (order.price * order.quantity * 0.1), 0);
    const calculatedTotalPrice = dummyOrders.reduce((acc, order) => acc + (order.price * order.quantity), 0);

    setTaxAmount(calculatedTax);
    setTotalPrice(calculatedTotalPrice);
  }, []);

  const removeOrder = (item) => {
    const updatedOrders = orderLines.filter((order) => order.id !== item.id);
    setOrderLines(updatedOrders);
  };

  const renderOrders = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orderLines.map((order) => (
            <tr key={order.id}>
              <td>{order.itemName}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>
                <button onClick={() => removeOrder(order)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div>
        <p>Tax Amount: ${taxAmount}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>

      <div>
        {orderLines.length > 0 ? (
          renderOrders()
        ) : (
          <img src="/cashier.jpeg" alt="Cashier" />
        )}
      </div>

      <div>
        {!isPaymentMade && (
          <Link onClick={() => setIsPaymentMade(true)}>
            Go to Payment
          </Link>
        )}
      </div>

      {isPaymentMade && <Payment order={orderLines} />}
    </div>
  );
}

export default SalesPage;
