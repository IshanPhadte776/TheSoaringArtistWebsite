import React, { useState } from "react";
import styles from "./Header.module.css";
import NewsletterPopup from "../newsletterPopup/NewsletterPopup";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleNewsletterClick = () => {
    setShowPopup(true);
  };

  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <h1 className= {styles.brandName}> The Soaring Artist</h1>

        <h2> About Me </h2>
        <h2> My Paintings </h2>
        <h2> My Merchandise </h2>
        <h2 onClick={handleNewsletterClick}> Newsletter </h2>
      </div>
      {showPopup && <NewsletterPopup onClose={setShowPopup} />}

    </div>
  );
};

export default Header;
