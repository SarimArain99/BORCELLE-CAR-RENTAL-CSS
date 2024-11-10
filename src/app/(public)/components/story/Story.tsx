import Image from "next/image";
import React from "react";
import styles from "./Story.module.css"; // Import the CSS Module

function Story() {
  return (
    <div className={`${styles.storyContainer}`}>
      <Image
        src="/hummer.png"
        alt=""
        height={1000}
        width={1000}
        className={`${styles.image}`}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Our Story</h1>
        <p className={styles.description}>
          At <strong className={styles.highlight}>BROCELLE CAR RENTAL</strong>,
          our journey began with a simple yet powerful vision: to make every
          journey unforgettable. Founded by a passionate team of car enthusiasts
          and innovators, we set out to redefine how people experience travel.
        </p>
      </div>
    </div>
  );
}

export default Story;
