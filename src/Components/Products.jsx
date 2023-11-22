import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ProductForm from './ProductForm'; // Assuming ProductForm is a component you have
// import { handleSave, editProduct } from './YourApi'; // Assuming these functions are somewhere in your code

const Products = ({ addToOrder }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]); // Assuming you have a products state

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:9292/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    getProduct();
  }, [id]);

  // Assuming addToOrder is a function passed from the parent component
  const handleAddToOrder = () => {
    addToOrder(product);
  };

  // Assuming this function is for saving a product, replace with your actual implementation
  const handleSave = async (product) => {
    // Call API to add/update product
  };

  // Assuming this is for editing a product, replace with your actual implementation
  const editProduct = (product) => {
    // Some logic for editing
  };

  const ShowProduct = () => {
    return (
      <>
        {/* Your product display code */}
      </>
    );
  };

  return (
    <div>
      <ProductForm onSave={handleSave} />
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
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button onClick={() => editProduct(p)}> Edit </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
