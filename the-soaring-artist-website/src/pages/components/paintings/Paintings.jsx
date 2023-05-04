import React from "react";
import styles from "./paintings.module.css";

import Image from "next/image";
import Owl from "../../images/owl.png";
import Butterflies from "../../images/butterflies.png";
import Flower from "../../images/flower.png";



const Paintings = () => {




  const butterFlyPaintingText =
    "The Paint The Town Project is hosted by the Halton Regional Police Service. Students across the Halton region create artwork to be auctioned off. Proceeds will go to Joseph Brant Hospital’s Mental Health Program. The theme for this year is “joy”. My artwork is in the auction! The title is “The Light Within” and the size is 20x24 inches.";
  const owlPaintingText =
    "Owls are a group of nocturnal birds of prey characterized by their large eyes, hooked beaks, and sharp talons. They are found in diverse habitats across the world, including forests, deserts, and tundras. Owls are known for their ability to fly silently, thanks to their specialized feathers that reduce turbulence and noise. These birds are carnivorous and feed on a variety of prey, including rodents, insects, and small mammals. Some owl species are known for their distinctive calls, which are used for communication and territorial defense.";
  const flowerPaintingText =
    "Flowers are one of the most beautiful creations of nature. They are known for their vibrant colors, sweet fragrances, and delicate petals. Flowers come in a wide variety of shapes and sizes, and they can be found in every corner of the world. From the tall sunflowers that tower over gardens, to the delicate cherry blossoms that grace the branches of trees, flowers are a symbol of beauty and life.";

  // const [isFullscreen, setIsFullscreen] = useState(false);

  // function toggleFullscreen() {
  //   setIsFullscreen(!isFullscreen);
  // }

  return (
    <div id="paintings" className={styles.paintings}>
      <h1 className={styles.title}> My Collection </h1>

      <div class={styles.outerBox}>
        <div className={styles.row}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardBack}>
                <Image src={Flower} className={styles.flowerPainting} alt="Flower" />
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <h1 className={styles.paintingTitle}> Painting Title</h1>
            <p className={styles.paintingText}> {flowerPaintingText} </p>
          </div>
        </div>
      </div>

      <div class={styles.outerBox}>
        <div className={styles.row}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardBack}>
                <Image src={Butterflies} className={styles.butterflyPainting} alt="Butterfly" />
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <h1 className={styles.paintingTitle}> Painting Title</h1>
            <p className={styles.paintingText}> {butterFlyPaintingText} </p>
          </div>
        </div>
      </div>

      <div className={styles.outerBox}>
        <div className={styles.row}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardBack}>
                <Image src={Owl} className={styles.owlPainting} alt="Owl"/>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h1 className={styles.paintingTitle}> Painting Title</h1>
            <p className={styles.paintingText}> {owlPaintingText} </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Paintings;
