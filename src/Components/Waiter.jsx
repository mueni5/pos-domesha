// WaiterPage.jsx

import React from 'react';
import Products from './Menu';
import Orders from './Orders'; 

const Waiter = () => {
  return (
    <div>
      <h1>Waiter Page</h1>
      
      <Products addToOrder={() => {}} />
      {/* Render the component for handling orders */}
      <Orders />
    </div>
  );
};

export default Waiter;
