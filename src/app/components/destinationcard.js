import React from "react";
import styles from "./styles/destinationcard.module.css";

export default function Destinationcard({ img, name }) {
  return (
    <div className={styles.main}>
      <img src={img} className={styles.img}></img>
      <div className={styles.name}>
        <p>{name}</p>
        <p>
          ☆ <span>4.5</span>
        </p>
      </div>
      <p className={styles.price}>₹ 899</p>
      <button className={styles.btn}>explore now</button>
    </div>
  );
}
