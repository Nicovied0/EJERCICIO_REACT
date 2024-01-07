import React from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router";

const LandingView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, CSS Modules!</h1>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
};

export default LandingView;
