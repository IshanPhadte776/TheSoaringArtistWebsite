import React, { useState } from "react";
import styles from "./newletter.module.css";



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
            <h1 className={styles.title}>Subscribe to the Newsletter</h1>
            <h2 className={styles.subtitle}>
              Provide your name and email address for exclusive information
            </h2>

            <form className={styles.emailForm} onSubmit={handleSubmit}>
              <label>
                Email Address:
                <input
                  type="text"
                  value={emailValue}
                  onChange={handleEmailChange}
                  autoComplete="email"
                />
              </label>

              <label>
                Name:
                <input
                  type="text"
                  value={nameValue}
                  onChange={handleNameChange}
                  autoComplete="name"
                />
              </label>

              <button type="submit">Submit</button>
            </form>

            <button className={styles.closeButton} onClick={handleClosePopup}>
              I don't wish for emails regarding The Soaring Artist
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterPopup;
