import Image from "next/image";
import React from "react";
import styles from './Car.module.css'; 

function Cars() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {[
          {
            image: "/hummer.png",
            title: "GMC Hummer",
            price: "$5500/Day",
          },
          {
            image: "/toyota.png",
            title: "Toyota Thundra",
            price: "$4800/Day",
          },
          {
            image: "/blueJeep.png",
            title: "Jeep",
            price: "$4000/Day",
          },
          {
            image: "/jeep.png",
            title: "Off-Road Jeep",
            price: "$6000/Day",
          },
        ].map((car, i) => (
          <div
            key={i}
            className={styles.card}
          >
            <div className={styles.imageContainer}>
              <Image
                src={car.image}
                alt={car.title}
                width={1000}
                height={1000}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.title}>
                {car.title}
              </h2>
              <p className={styles.price}>
                {car.price}
              </p>
              <button className={styles.button}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
