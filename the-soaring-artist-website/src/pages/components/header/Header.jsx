import React, { useState, useRef } from "react";
import styles from "./Header.module.css";
import NewsletterPopup from "../newsletterPopup/NewsletterPopup";
import Logo from "../../images/logo.png";
import Image from "next/image";

const Header = ({ scrollToAboutMe, scrollToPaintings, scrollToInstagramFeed }) => {
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

  const handleInstagramFeedClick = () => {
    scrollToInstagramFeed();
  };

  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <div className={styles.logoAndName}>
          <Image className={styles.logo} src={Logo} alt="Logo"/>
          <h1 className={styles.brandName}> The Soaring Artist</h1>
        </div>

        <h2 className={styles.subHeading} onClick={handleAboutMeClick}>
          About Me
        </h2>
        <h2 className={styles.subHeading} onClick={handlePaintingsClick}>
          {" "}
          My Paintings{" "}
        </h2>
        <h2 className={styles.subHeading} onClick={handleInstagramFeedClick}> My Instagram Feed </h2>
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
