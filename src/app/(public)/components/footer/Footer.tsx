import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.heading}>Subscribe Now</h2>
          <p className={styles.text}>
            Join our newsletter to stay updated on the latest offers, new
            releases, and exciting events. Enter your email and subscribe today
            to be the first to know!
          </p>
        </div>

        <div>
          <h2 className={styles.heading}>Information</h2>
          <p className={styles.text}>
            Discover more about our company, mission, and the values that drive
            us. We are committed to offering exceptional services and ensuring
            customer satisfaction.
          </p>
        </div>

        <div>
          <h2 className={styles.heading}>Helpful Links</h2>
          <p className={styles.text}>
            Explore resources like FAQs, our support center, and guides designed
            to help you get the most out of our offerings and navigate through
            our services easily.
          </p>
        </div>

        <div>
          <h2 className={styles.heading}>Investments</h2>
          <p className={styles.text}>
            Learn more about investment opportunities with us, from real estate
            to stocks. We offer guidance and support for those looking to make
            smart financial choices.
          </p>
        </div>

        <div>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.text}>
            Have any questions? Reach out to us via phone or email, and our team
            will be happy to assist you. We&apos;re here to support you with any
            inquiries.
            <br />
            Phone: <strong>+1 (123456789)</strong>
            <br />
            Email: <strong>abc99@gmail.com</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
