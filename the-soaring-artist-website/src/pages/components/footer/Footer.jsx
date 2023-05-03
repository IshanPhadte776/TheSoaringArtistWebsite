import React, { useState } from "react";
import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
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
      <div className={styles.row}>
        <h1 className={styles.headings}>Contact Me</h1>
        {/* target is for a new window, rel is for safety */}
        <a
          href="https://www.instagram.com/thesoaringartist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.contactLogo} />
        </a>

        <a href="mailto:thesoaringartist@gmail.com">
          <FaEnvelope className={styles.contactLogo} />
        </a>


        <div className={styles.rowForResources}>
          <h2 className={styles.headings} onClick={handleAboutMeClick}>
            {" "}
            About Me{" "}
          </h2>

          <h2 className={styles.headings} onClick={handlePaintingsClick}>
            {" "}
            My Paintings{" "}
          </h2>

          <h2 className={styles.headings}> My Instagram Feed </h2>

          <h2 className={styles.headings} onClick={handleNewsletterClick}>
            {" "}
            Newsletter{" "}
          </h2>
        </div>

        <p>
          <a className={styles.legal} href="/components/legal/Legal">
            {" "}
            © The Soaring Artist 2023 Legal
          </a>
        </p>

        {showPopup && <NewsletterPopup onClose={setShowPopup} />}
      </div>
    </div>
  );
};

export default Footer;
