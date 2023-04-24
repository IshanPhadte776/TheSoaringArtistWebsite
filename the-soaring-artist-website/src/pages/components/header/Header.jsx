import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <h1> The Soaring Artist</h1>

        <h2> About Me </h2>
        <h2> My Paintings </h2>
        <h2> My Merchandise </h2>
        <h2> Newsletter </h2>
      </div>
    </div>
  );
};

export default Header;
