import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.selectWrapper}>
        <select name="Brand" className={styles.select}>
          <option value="" hidden>
            Brands
          </option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Toyota">Toyota</option>
        </select>
      </div>

      <div className={styles.selectWrapper}>
        <select name="Type" className={styles.select}>
          <option value="" hidden>
            Type
          </option>
          <option value="4 Seater">4 Seater</option>
          <option value="2 Seater">2 Seater</option>
          <option value="Diesel Engine">Diesel Engine</option>
        </select>
      </div>

      <div className={styles.selectWrapper}>
        <select name="Price" className={styles.select}>
          <option value="" hidden>
            Price
          </option>
          <option value="$5000/Day">$5000/Day</option>
          <option value="$4000/Day">$4000/Day</option>
          <option value="$4500/Day">$4500/Day</option>
        </select>
      </div>

      <div className={styles.selectWrapper}>
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
}

export default Search;
