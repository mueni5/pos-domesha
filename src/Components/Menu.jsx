import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuItemDetails from './MenuItemDetails';

const Menu = ({ addToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated API call with dummy data
    const fetchMenu = async () => {
      setLoading(true);
      // Simulated API response
      const dummyData = [
        { id: 1, name: 'Beers', price: 10, quantity: 20, image: 'burger.jpg' },
        { id: 2, name: 'Pizza', price: 15, quantity: 15, image: 'pizza.jpg' },
        { id: 3, name: 'cocktails', price: 12, quantity: 25, image: 'pasta.jpg' },
        // Add more dummy items as needed
      ];
      setMenuItems(dummyData);
      setLoading(false);
    };

    fetchMenu();
  }, []);

  const handleAddToOrder = (menuItem) => {
    addToOrder(menuItem);
    // Navigate to the "Orders" section
    navigate('/orders');
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((menuItem) => (
              <tr key={menuItem.id}>
                <td>{menuItem.name}</td>
                <td>{menuItem.price}</td>
                <td>{menuItem.quantity}</td>
                <td>
                  <img
                    src={menuItem.image}
                    alt={menuItem.name}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                <td>
                  <button onClick={() => handleAddToOrder(menuItem)}>
                    Add to Order
                  </button>
                  <Link to={`/menu/${menuItem.id}`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/orders">Go to Orders</Link>
    </div>
  );
};

export default Menu;
