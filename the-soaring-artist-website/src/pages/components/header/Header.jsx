import React, { useState, useRef } from "react";
import styles from "./Header.module.css";
import NewsletterPopup from "../newsletterPopup/NewsletterPopup";

const Header = ({ scrollToAboutMe, scrollToPaintings }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleNewsletterClick = () => {
    setShowPopup((prevShowPopup) => !prevShowPopup);
  };

  const handleAboutMeClick = () => {
    scrollToAboutMe();
  };

  const handlePaintingsClick = () => {
    scrollToPaintings();
  };


  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <h1 className={styles.brandName}> The Soaring Artist</h1>
        <h2 className={styles.subHeading} onClick={handleAboutMeClick}>
          About Me
        </h2>
        <h2 className={styles.subHeading} onClick={handlePaintingsClick}> My Paintings </h2>
        <h2 className={styles.subHeading}> My Instagram Feed </h2>
        <h2 className={styles.subHeading} onClick={handleNewsletterClick}>
          {" "}
          Newsletter{" "}
        </h2>
      </div>
      {showPopup && <NewsletterPopup onClose={setShowPopup} />}
    </div>
  );
};

export default Header;
