import React, { useState } from "react";
import styles from "./newletter.module.css";

import Image from "next/image";
import logo from "../../images/logo.png";

import { FaTimes } from "react-icons/fa";

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  //Starts with one or more characters that are not whitespace or @ (^[^\s@]+)
  // Followed by @ symbol (@)
  // Followed by one or more characters that are not whitespace or @ ([^\s@]+)
  // Followed by a dot (\.)
  // Followed by one or more characters that are not whitespace or @ ([^\s@]+)
  // Ends with the end of the string ($)
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the form from submitting normally

    //Check if email is valid
    if (!isValidEmail(emailValue)) {
      setMessage("Please enter a valid email address");
      return;
    }

    // Send POST request to API route
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nameValue, email: emailValue }),
    });

    if (response.status === 200) {
      setMessage("Thanks for subscribing!");
    } else {
      setMessage("Something went wrong, please try again later.");
    }
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  return (
    <>
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popUp}>
            <div className={styles.row}>
              <Image className={styles.logo} src={logo} alt="My Image" />
              <h1 className={styles.title}>Subscribe to the Newsletter</h1>
              <button className = {styles.closePopup} onClick={handleClosePopup}>
                <FaTimes />
              </button>
            </div>
            <h2 className={styles.subHeading}>Art. Painting. Merchandise.</h2>

            <h2 className={styles.subHeading}>
              Provide your name and email address for exclusive information
            </h2>

            <form className={styles.emailForm} onSubmit={handleSubmit}>
              <label>
                <input className= {styles.input}
                  type="text"
                  value={nameValue}
                  onChange={handleNameChange}
                  autoComplete="name"
                  placeholder="Name"
                />
              </label>

              <label>
                <input className= {styles.input}
                  type="text"
                  value={emailValue}
                  onChange={handleEmailChange}
                  autoComplete="email"
                  placeholder="Email"
                />
              </label>

              <button className= {styles.input} type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterPopup;
