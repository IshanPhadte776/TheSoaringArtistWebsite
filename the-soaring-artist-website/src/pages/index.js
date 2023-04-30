import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NewsletterPopup from './components/newsletterPopup/NewsletterPopup'

import { useState, useEffect } from "react";



export default function Home() {

  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNewsletter(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      <Head>
        <title> The Soaring Artist</title>
      </Head>
      <main className={styles.main}>

      <Header> </Header>

      {showNewsletter && <NewsletterPopup />}

      <Footer> </Footer>

      </main>
    </>
  )
}
