import React from "react";
import styles from "./styles/destinationcard.module.css";

export default function Destinationcard({
  img,
  destination,
  description,
  duration,
  price,
}) {
  return (
    <div className={styles.main}>
      <img src={img} className={styles.img}></img>
      <div className={styles.name}>
        <p>{destination}</p>
        <p>
          ☆ <span>4.5</span>
        </p>
      </div>
      <p className={styles.des}>{description}</p>
      <p className={styles.duration}>{duration}</p>
      <p className={styles.price}>₹ {price}</p>
      <button className={styles.btn}>book now</button>
    </div>
  );
}
