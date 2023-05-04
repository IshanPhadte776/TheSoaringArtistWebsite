import React from "react";
import styles from "./legal.module.css";
import Head from "next/head";
import Link from 'next/link'


import { BiLeftArrow } from "react-icons/bi";

const Legal = () => {
  return (
    <div className={styles.legal}>
      <Head>
        <title> The Soaring Artist Legal </title>
      </Head>
      <div className={styles.blur}></div>

      <h1 className={styles.title}> Legal </h1>
      <h2 className={styles.subheading}> 05 / 01 / 2023 </h2>

      <h2 className={styles.subheading}> Links to Other Websites </h2>

      <p className={styles.text}>
        I, the author am not responible for privacy policies or practices of any
        third party web sites or services. I strongly advise to read and
        understand the terms and conditions of all third parties that are
        visited
      </p>


      <h2 className={styles.subheading}> Data Storage </h2>

      <p className={styles.text}>
        By Submitting personal information to the system, you agree to allow the author to store their data in-order to improve the user experience.
        Data will not be shared with non-authorized users. We don ot take responiblity or can be held liable for damages if the data is breached by third-parties
      </p>    

      <Link href="/" > <BiLeftArrow className={styles.backArrow}> </BiLeftArrow>  </Link>



    </div>
  );
};

export default Legal;
