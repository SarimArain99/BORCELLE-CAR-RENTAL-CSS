import Image from "next/image";
import React from "react";
import styles from "./HeroSec.module.css";

function HeroSec() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Your Ride Awaits</h1>
          <p className={styles.subtitle}>
            Where the Road Meets Your Destination
          </p>
        </div>
        <Image
          src="/jeep.png"
          alt="jeep"
          width={1000}
          height={1000}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default HeroSec;
