import React from "react";
import styles from "./hero.module.css";

import Image from "next/image";
import llama from "../../llama.png";
import owl from "../../owl.png";
import bird2 from "../../bird2.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.row}>
        <div className={styles.textStack}>
          <h1> The Soaring Artist</h1>
          <h1> Always Soaring Higher</h1>
          <p> Local Artist Pursuing her Passion in Art</p>
          <button className={styles.viewCollection}>
            {" "}
            View my Collection{" "}
          </button>
          <Image className={styles.bird2} src={bird2} />
        </div>
        <div className={styles.llamaBackground}></div>
        <Image className={styles.llama} src={llama} alt="Llama" />
      </div>
    </div>
  );
};

export default Hero;
