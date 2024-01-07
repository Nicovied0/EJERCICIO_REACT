import React from "react";
import styles from "./styles.module.css";

const Button = (props) => {
  return <button className={styles.btn}>{props.text}</button>;
};

export default Button;
