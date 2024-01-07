import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const HomeView = () => {
  return (
    <div className={styles.container}>
      <div>
        <Nav />
      </div>
      <div>

      <h1 className={styles.title}>Hello, CSS Modules!</h1>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeView;
