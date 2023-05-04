import React from "react";
import styles from "./hero.module.css";

import Image from "next/image";
import llama from "../../images/llama.png";
import bird from "../../images/bird.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.row}>
        <div className={styles.textStack}>
          <h1 className= {styles.title}> The Soaring Artist</h1>
          <h1 className= {styles.title} > Always Soaring Higher</h1>
          <p className= {styles.text}> Local Artist Pursuing her Passion in Art</p>
          <button className={styles.viewCollection}>
            {" "}
            View my Collection{" "}
          </button>
          <Image className={styles.bird} src={bird} alt = "Bird"/>
        </div>
        <div className={styles.llamaBackground}></div>
        <Image className={styles.llama} src={llama} alt="Llama" />
      </div>
    </div>
  );
};

export default Hero;
