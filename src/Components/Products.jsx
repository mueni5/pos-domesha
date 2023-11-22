import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from './ProductForm'; 
import './Products.css';
// import { saveProduct, fetchProducts, editProduct } from './api/products';

const Products = ({ addToOrder }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [id]);

  const handleAddToOrder = (product) => {
    addToOrder(product);
  };

  const handleSave = async (product) => {
    // Assuming you have an API function to save the product
    // await saveProduct(product);
    // Fetch the updated products
    // fetchProducts();
  };

  const editProductItem = async (product) => {
    // Assuming you have an API function to edit the product
    // await editProduct(product);
    // Fetch the updated products
    // fetchProducts();
  };

  const ShowProducts = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => editProductItem(product)}>Edit</button>
                <button onClick={() => handleAddToOrder(product)}>
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
      {loading ? <div>Loading...</div> : <ShowProducts />}
    </div>
  );
};

export default Products;
