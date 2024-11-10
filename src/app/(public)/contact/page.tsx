import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <form
      className={styles.formContainer}
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input
        type="hidden"
        name="access_key"
        value="97b9413e-2ea8-4b21-921b-f87d710755d6"
      />

      <h2 className={styles.heading}>Contact Us</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>
          Full Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="fullName"
          placeholder="Enter Your Full Name"
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <input
          required
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter the Subject"
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          placeholder="Write Your Message Here"
          rows={6}
          className={styles.textarea}
        ></textarea>
      </div>

      <button type="submit" className={styles.button}>
        Send Message
      </button>
    </form>
  );
}

export default Contact;
