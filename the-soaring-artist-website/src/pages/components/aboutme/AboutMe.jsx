import React, { useState } from "react";
import styles from "./aboutme.module.css";

import Image from "next/image";
import Arushi from "../../Arushi.png";
import Owl from "../../owl.png";
import { FaInstagram } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="aboutMe" className={styles.aboutMe}>
      <div className={styles.row}>
        <Image className={styles.Arushi} src={Arushi} />
        <div className={styles.column}>
          <h1 className= {styles.heading}> Hello! </h1>

          <p className= {styles.text}>
            My Name is Arushi and I'm a 15 year old aspiring artist from
            Burlington Ontario
          </p>
          <p className= {styles.text} > Insert More Text Here</p>
          <p className= {styles.text} > Insert Even More Text Here</p>
          <div className={styles.row}>
            <a href="https://www.instagram.com/thesoaringartist/">
              <p>Contact me via Instagram</p>
            </a>
            <a href="https://www.instagram.com/thesoaringartist/">
              <FaInstagram />
            </a>
          </div>

          <h2> Contact me via Email </h2>
        </div>
        <Image className={styles.logo} src={Owl} />
      </div>
    </div>
  );
};

export default AboutMe;
