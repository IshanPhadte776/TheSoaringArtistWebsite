import React, { useState } from "react";
import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import NewsletterPopup from "../newsletterPopup/NewsletterPopup";



const Footer = ({ scrollToAboutMe, scrollToPaintings }) => {

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
    <div className={styles.footer}>
      <h1 className={styles.headings}>Contact Me</h1>
      {/* target is for a new window, rel is for safety */}
      <a
        href="https://www.instagram.com/thesoaringartist/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={styles.logo} />
      </a>

      <a href="mailto:thesoaringartist@gmail.com">
      <FaEnvelope className={styles.logo} />
    </a>

    <FaMapMarkerAlt className={styles.logo} />

    <h1 className={styles.headings} onClick={handleAboutMeClick} > About Me </h1>

    <h1 className={styles.headings} onClick={handlePaintingsClick} > My Paintings </h1>

    <h1 className={styles.headings}> My Instagram Feed </h1>

    <h1 className={styles.headings} onClick={handleNewsletterClick}> Newsletter </h1>

    {showPopup && <NewsletterPopup onClose={setShowPopup} />}

    </div>
  );
};

export default Footer;
