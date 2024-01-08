import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/Nav/Nav";
import ItemList from "../../components/ItemList/ItemList";

const HomeView = () => {
  return (
    <div className={`${styles.container} fade-in`}> 
      <div>
        <Nav />
      </div>
      <div className={styles.containerProducts}>
        <div className={styles.products}>
          <h1 className={styles.title}>List of products</h1>
          <ItemList/>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomeView;
