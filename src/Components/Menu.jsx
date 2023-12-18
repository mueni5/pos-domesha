import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from './ProductForm'; 
// import './Menu.css';

const Menu = ({ addToOrder }) => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulated API call with dummy data
    const fetchMenu = async () => {
      setLoading(true);
      // Simulated API response
      const dummyData = [
        { id: 1, name: 'Burger', price: 10, quantity: 20, image: 'burger.jpg' },
        { id: 2, name: 'Pizza', price: 15, quantity: 15, image: 'pizza.jpg' },
        { id: 3, name: 'Pasta', price: 12, quantity: 25, image: 'pasta.jpg' },
        // Add more dummy items as needed
      ];
      setMenuItems(dummyData);
      setLoading(false);
    };

    fetchMenu();
  }, [id]);

  const handleAddToOrder = (menuItem) => {
    addToOrder(menuItem);
  };

  const handleSave = async (menuItem) => {
    // Simulated save function
    console.log(`Saved: ${menuItem.name}`);
    // Simulated fetch updated menu
    fetchMenu();
  };

  const editMenuItem = async (menuItem) => {
    // Simulated edit function
    console.log(`Edited: ${menuItem.name}`);
    // Simulated fetch updated menu
    fetchMenu();
  };

  const fetchMenu = async () => {
    // Simulated fetch function
    setLoading(true);
    // Simulated API response
    const dummyData = [
      { id: 1, name: 'Burger', price: 10, quantity: 20, image: 'burger.jpg' },
      { id: 2, name: 'Pizza', price: 15, quantity: 15, image: 'pizza.jpg' },
      { id: 3, name: 'Pasta', price: 12, quantity: 25, image: 'pasta.jpg' },
      // Add more dummy items as needed
    ];
    setMenuItems(dummyData);
    setLoading(false);
  };

  const ShowMenu = () => {
    return (
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
                <button onClick={() => editMenuItem(menuItem)}>Edit</button>
                <button onClick={() => handleAddToOrder(menuItem)}>
                  Add to Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <ProductForm onSave={handleSave} />
      {loading ? <div>Loading...</div> : <ShowMenu />}
    </div>
  );
};

export default Menu;
