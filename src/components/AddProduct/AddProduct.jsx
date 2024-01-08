import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'food',
    quantity: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    onAdd(newProduct);
    setNewProduct({ name: '', category: 'food', quantity: 0 });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={handleInputChange}
      />
      <select
        name="category"
        value={newProduct.category}
        onChange={handleInputChange}
      >
        <option value="food">Food</option>
        <option value="drink">Drink</option>
      </select>
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={newProduct.quantity}
        onChange={handleInputChange}
      />
      <button onClick={handleAddProduct}  >Add Product</button>
    </div>
  );
};

export default AddProduct;
