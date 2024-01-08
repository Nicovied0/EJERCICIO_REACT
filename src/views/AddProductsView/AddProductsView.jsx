import React, { useState } from "react";
import styles from "./styles.module.css";
import Nav from "../../components/Nav/Nav";
import AddProduct from "../../components/AddProduct/AddProduct";

function AddProductsView() {
  const [products, setProducts] = useState([]);

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
    const storedProducts = JSON.parse(localStorage.getItem("storedItems")) || [];
    const maxId = storedProducts.reduce((max, product) => (product.id > max ? product.id : max), 0);

    newProduct.id = maxId + 1;
    newProduct.quantity = parseInt(newProduct.quantity, 10);
    const updatedProducts = [...storedProducts, newProduct];

    localStorage.setItem("storedItems", JSON.stringify(updatedProducts));

  };

  return (
    <div className={`${styles.container} fade-in`}>
      <div>
        <Nav />
      </div>
      <div className={styles.addProduct}>
        <AddProduct onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default AddProductsView;
