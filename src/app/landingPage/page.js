"use client";

import React, { useState, useEffect } from "react";
import styles from "./landingpage.module.css";
import Destinationcard from "../components/destinationcard.js";

export default function LandingPage() {
  const [data, setData] = useState([]);
  const [isloading, setisloading] = useState(true);
  const fetchInfo = async () => {
    setisloading(false);
    const res = await fetch(
      "https://thetravelbackend.onrender.com/api/v1/destinations/getDestination",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    setisloading(true);
    return setData(d.data);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <p className={styles.p1}>Trending destinations</p>

        <p className={styles.p2}>
          Most popular choices for travelers from India
        </p>
        {isloading ? (
          <div className={styles.grids}>
            {data.map((val, index) => (
              <Destinationcard
                key={index}
                img={val.imgurl}
                description={val.description}
                destination={val.destination}
                duration={val.duration}
                price={val.price}
              />
            ))}
          </div>
        ) : (
          <p className={styles.indicator}>loading please wait ...</p>
        )}
      </div>{" "}
    </div>
  );
}
