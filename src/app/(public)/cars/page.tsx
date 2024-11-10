import React from "react";
import Cars from "../components/cars/Car";
import styles from "./Cars.module.css";

function page() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Our Vehicles</h1>
      <Cars />
      <Cars />
      <Cars />
      <Cars />
    </div>
  );
}

export default page;
