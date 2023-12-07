import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const MenuItemDetails = ({ addToOrder }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated API response
  const menuItem = {
    id: 1,
    name: 'Burger',
    price: 10,
    quantity: 20,
    image: 'burger.jpg',
  };

  const handleBack = () => {
    navigate('/menu');
  };

  const handleOrder = () => {
    addToOrder(menuItem);
    alert(`${menuItem.name} added to your order!`);
  };

  return (
    <div className="item-container">
      <div className="item">
        <h2>Menu Item Details</h2>
        <div>
          <h3>{menuItem.name}</h3>
          <p>Price: {menuItem.price}</p>
          <p>Quantity: {menuItem.quantity}</p>
          <img
            src={menuItem.image}
            alt={menuItem.name}
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleOrder}>Add to Order</button>
      </div>
    </div>
  );
};

export default MenuItemDetails;
