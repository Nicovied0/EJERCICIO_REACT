import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/Nav/Nav";
import AddProduct from "../../components/AddProduct/AddProduct";

function AddProductsView() {
  return (
    <div className={`${styles.container} fade-in`}>
      <div>
        <Nav />
      </div>
      <div>
        <AddProduct/>
      </div>
      <div></div>
    </div>
  );
}

export default AddProductsView;
