import React, { useState } from "react";
import styles from "./styles.module.css"
import Button from "../Button/Button";


const AddProduct = ({ onAdd }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "food",
    quantity: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.quantity > 0) {
      onAdd(newProduct);
      setNewProduct({ name: "", category: "food", quantity: 0 });
      alert("Product was added successfully.");
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <select
        name="category"
        value={newProduct.category}
        onChange={handleInputChange}
        className={styles.selectField}
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
        className={styles.inputField}
      />
      {/* <button  className={styles.addButton}>
        Add Product
      </button> */}

      <div onClick={handleAddProduct} className={styles.addButton}>
        <Button text="Add Product"/>

      </div>
    </div>
  );
};

export default AddProduct;
