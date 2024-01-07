import React, { useState } from "react";
import styles from "./styles.module.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
    console.log("se ejecuto " + showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles.nav}>
      <ul className={`${styles.navList} ${showMenu ? styles.showMenu : ""}`}>
        <li onClick={closeMenu}>Home</li>
        <li onClick={closeMenu}>Product</li>
        <li onClick={closeMenu}>About</li>
      </ul>t
      <button className={styles.burger} onClick={toggleMenu}>
        ☰
      </button>

      {showMenu ? (
        <ul>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>Product</li>
          <li onClick={closeMenu}>About</li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;
