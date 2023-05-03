import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewsletterPopup from "./components/newsletterPopup/NewsletterPopup";

import Hero from "./components/hero/Hero";

import { useState, useEffect } from "react";
import AboutMe from "./components/aboutme/AboutMe";
import Paintings from "./components/paintings/Paintings";


export default function Home() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNewsletter(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToAboutMe = () => {
    const aboutMeElement = document.getElementById("aboutMe");
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPaintings = () => {
    const paintingElement = document.getElementById("paintings");
    if (paintingElement) {
      paintingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToInstagramFeed = () => {
    const instagramFeedElement = document.getElementById("instagramFeed");
    if (instagramFeedElement) {
      instagramFeedElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <Head>
        <title> The Soaring Artist</title>
      </Head>
      <main className={styles.main}>
        <Header
          scrollToAboutMe={scrollToAboutMe}
          scrollToPaintings={scrollToPaintings}
          scrollToInstagramFeed={scrollToInstagramFeed}
        />

        <Hero> </Hero>

        <AboutMe />

        {showNewsletter && <NewsletterPopup />}

        <Paintings />

        <Footer
          scrollToAboutMe={scrollToAboutMe}
          scrollToPaintings={scrollToPaintings}
          scrollToInstagramFeed={scrollToInstagramFeed}
        >
          {" "}
        </Footer>
      </main>
    </>
  );
}
