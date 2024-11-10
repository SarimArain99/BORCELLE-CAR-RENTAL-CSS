import React from "react";
import styles from "./About.module.css";

function page() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container}`}>
        <div className={styles.textCenter}>
          <h1 className={styles.heading}>
            Welcome to BROCELLE CAR RENTAL
          </h1>
          <p className={styles.description}>
            At BROCELLE CAR RENTAL, we&apos;re dedicated to turning every
            journey into an exceptional experience. Born from a passion for
            travel and a commitment to quality, our company provides top-tier
            vehicles and seamless rental services to travelers, adventurers, and
            locals alike. Whether you&apos;re seeking the thrill of a luxury
            sports car, the comfort of a premium SUV, or the efficiency of a
            compact car, BROCELLE CAR RENTAL is your trusted partner on the
            road.
          </p>
        </div>

        <div className={`${styles.subText} ${styles.mb16}`}>
          <p>
            From our humble beginnings, we&apos;ve expanded to become a go-to
            choice in car rentals, recognized for our personalized service, a
            meticulously maintained fleet, and competitive pricing...
          </p>
        </div>

        <div className={styles.subText}>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <p>
            Our diverse fleet of vehicles is handpicked to cater to a variety of
            preferences. Whether you&apos;re embarking on a scenic road trip,
            require a business-class vehicle, or need a reliable car for a
            weekend getaway...
          </p>
        </div>

        <div className={styles.subText}>
          <h2 className={styles.sectionTitle}>Why Choose BROCELLE CAR RENTAL?</h2>
          <ul className={`${styles.list}`}>
            <li className={styles.listItem}>
              <span className={styles.boldText}>Exceptional Service:</span> Our team is here to make your rental experience as smooth as
              possible...
            </li>
            <li className={styles.listItem}>
              <span className={styles.boldText}>Quality and Reliability:</span> Each vehicle in our fleet is thoroughly inspected...
            </li>
            <li className={styles.listItem}>
              <span className={styles.boldText}>Affordable Options:</span> We believe that luxury and quality should be accessible...
            </li>
          </ul>
        </div>

        <div className={styles.subText}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p>
            Our mission at BROCELLE CAR RENTAL is to redefine car rental
            experiences by blending luxury, convenience, and affordability...
          </p>
          <p className={styles.description}>
            At BROCELLE CAR RENTAL, we believe that your journey begins the
            moment you step into one of our vehicles. Let us take you where you
            need to go, while you enjoy the ride.
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
