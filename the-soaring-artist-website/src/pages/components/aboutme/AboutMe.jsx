import React, { useState, useEffect } from "react";
import styles from "./aboutme.module.css";

import Image from "next/image";
import Arushi from "../../Arushi.png";
import Owl from "../../owl.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const AboutMe = () => {
  const [text, setText] = useState("");
  const messages = ["  Hello"];

  useEffect(() => {
    //which tracks which message is currently being typed out
    let messageIndex = 0;
    //which tracks which character in the message is currently being typed out
    let charIndex = 0;
    //which is used to store the ID of the interval so that it can be cleared later
    let intervalId = null;

    const startTyping = () => {
      //If all messages have been typed, return immediately
      if (messageIndex === messages.length) {
        clearInterval(intervalId);
        return;
      }

      //current message that needs to be typed
      const message = messages[messageIndex];

      //If more characters need to be typed out
      if (charIndex < message.length) {
        //adds the current character to the existing text by getting the character at the current index of the message string and concatenating it to the existing text using the setText function. This function is used to update the state variable text
        setText((prevText) => prevText + message.charAt(charIndex));
        //increment index
        charIndex++;
        //new characters don't need to be typed out
      } else {
        //moves to the next message
        messageIndex++;
        //moves back the first index of the next message
        charIndex = 0;
        //removes the previous message for the new message
        // setTimeout(() => {

        //   setText((prevText) => prevText.slice(0, -message.length));
        // }, 1000);
      }
    };
    //Calls the start Typing Function every 100 ms
    intervalId = setInterval(startTyping, 100);

    //Only runs on mount, not on rerenders
    //Component looks like awful if this code is removed
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="aboutMe" className={styles.aboutMe}>
      <div className={styles.row}>
        <Image className={styles.Arushi} src={Arushi} />
        <div className={styles.column}>
          <h1 className={styles.heading}>{text}</h1>

          <p className={styles.text}>
            {" "}
            My Name is Arushi and I'm an inspiring 15 year old artist from
            Burlington Ontario
          </p>

          <p className={styles.text}> INSERT MORE TEXT HERE </p>

          <div className={styles.row}>
            <a
              href="https://www.instagram.com/thesoaringartist/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.contactBox}>
                <p className={styles.textWithinBox}>Contact me via Instagram</p>
                <FaInstagram className={styles.icon} />
              </div>
            </a>

            <a href="mailto:thesoaringartist@gmail.com">
              <div className={styles.contactBox}>
                <p className={styles.textWithinBox}>Contact me via Email</p>
                <AiOutlineMail className={styles.icon} />
              </div>
            </a>
          </div>

          <Image className={styles.Owl} src={Owl} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
