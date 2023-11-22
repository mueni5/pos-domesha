import { useState, useEffect } from 'react';

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await fetch('/api/orders');
    const data = await res.json();
    setOrders(data);
  }

  const handleProcess = async (orderId) => {
    // Call API to mark order as processed
  };

  const handleConvertToCredit = async (orderId) => {
    // Call API to convert cash order to credit 
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
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.total}</td>
              <td>
                <button onClick={() => handleProcess(o.id)}>
                  Process
                </button>
                <button onClick={() => handleConvertToCredit(o.id)}>
                  Credit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
