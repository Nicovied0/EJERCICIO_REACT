import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/Nav/Nav";
import ItemList from "../../components/ItemList/ItemList";

const HomeView = () => {
  return (
    <div className={styles.container}>
      <div>
        <Nav />
      </div>
      <div>
        <div>
          <h1 className={styles.title}>Productos!</h1>
          <ItemList/>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomeView;
