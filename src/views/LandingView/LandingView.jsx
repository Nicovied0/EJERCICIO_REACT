import React from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";

const LandingView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={`${styles.container} fade-in`}>
      <h1 className={styles.title}>Hello, welcome to products dashboard!</h1>
      <div onClick={handleClick} className={styles.button}>
        <Button text="GO Home" />
      </div>
    </div>
  );
};

export default LandingView;
