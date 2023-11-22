import React, { useState } from 'react';

const ProductForm = ({ onSave, product }) => {
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price || ''); // Initialize as an empty string
  const [quantity, setQuantity] = useState(product?.quantity || ''); // Initialize as an empty string

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert price and quantity to numbers
    const productData = {
      name,
      description,
      price: parseFloat(price), // Convert to number
      quantity: parseInt(quantity, 10), // Convert to integer
    };

    onSave(productData);

    // Clear form
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text" // Change type to "text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text" // Change type to "text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button type="submit">Save Product</button>
    </form>
  );
};

export default ProductForm;
