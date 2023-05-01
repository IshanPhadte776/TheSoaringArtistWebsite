import React, { useState } from "react";
import styles from "./paintings.module.css";

import Image from "next/image";
import Owl from "../../owl.png";

const Paintings = () => {
  return (
    <div id="paintings" className={styles.paintings}>

      <Image className={styles.logo} src={Owl} />


    </div>
  );
};

export default Paintings;
