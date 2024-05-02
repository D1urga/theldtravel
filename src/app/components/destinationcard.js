import React from "react";
import styles from "./styles/destinationcard.module.css";

export default function Destinationcard() {
  return (
    <div className={styles.main}>
      <img
        src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
        className={styles.img}
      ></img>
      <div className={styles.name}>
        <p>Mumbai</p>
        <p>
          ☆ <span>4.5</span>
        </p>
      </div>
      <p className={styles.price}>₹ 899</p>
      <button className={styles.btn}>explore now</button>
    </div>
  );
}
