import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";

const Nav = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navigate = useNavigate();

  const handleNavigation = (props) => {
    navigate(props);
  };

  return (
    <div className={styles.nav}>
      <ul className={`${styles.navList} ${showMenu ? styles.showMenu : ""}`}>
        <li onClick={() => { closeMenu(); handleNavigation("/"); }}>Home</li>
        <li onClick={() => { closeMenu(); handleNavigation("/home"); }}>Products</li>
        <li onClick={() => { closeMenu(); handleNavigation("/addProducts"); }}>Add product</li>
        <li onClick={() => { closeMenu(); handleNavigation("/about"); }}>About</li>
      </ul>
      <div className={styles.icon} onClick={() => { handleNavigation("/home"); }}>
        <h2>Products</h2>
      </div>
      <button className={styles.burger} onClick={toggleMenu}>
        ☰
      </button>

      {showMenu ? (
        <div className={`${styles.showOpen} fade-in2`}>
          <ul className={styles.showList}>
            <li className={styles.element} onClick={() => { closeMenu(); handleNavigation("/"); }}>Home</li>
            <li className={styles.element} onClick={() => { closeMenu(); handleNavigation("/home"); }}>Products</li>
            <li className={styles.element} onClick={() => { closeMenu(); handleNavigation("/addProducts"); }}>Add product</li>
            <li className={styles.element} onClick={() => { closeMenu(); handleNavigation("/about"); }}>About</li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;
