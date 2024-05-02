import React from "react";
import styles from "./landingpage.module.css";
import Destinationcard from "../components/destinationcard.js";

export default function LandingPage() {
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <p className={styles.p1}>Trending destinations</p>
        <p className={styles.p2}>
          Most popular choices for travelers from India
        </p>
        <div className={styles.grids}>
          <Destinationcard />
          <Destinationcard /> <Destinationcard /> <Destinationcard />
          <Destinationcard /> <Destinationcard /> <Destinationcard />
        </div>
      </div>
    </div>
  );
}
