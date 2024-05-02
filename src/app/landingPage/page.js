"use client";

import React, { useState, useEffect } from "react";
import styles from "./landingpage.module.css";
import Destinationcard from "../components/destinationcard.js";

export default function LandingPage() {
  // const [data, setData] = useState([]);

  // const fetchInfo = async () => {
  //   const res = await fetch(
  //     "https://ldtravelbackend.onrender.com/api/v1/destinations/getDestination",
  //     {
  //       credentials: "include",
  //     }
  //   );
  //   const d = await res.json();
  //   return setData(d.data);
  // };
  // useEffect(() => {
  //   fetchInfo();
  // }, []);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <p className={styles.p1}>Trending destinations</p>

        <p className={styles.p2}>
          Most popular choices for travelers from India
        </p>
        <div className={styles.grids}>
          <Destinationcard
            img="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
            name="mumbai"
          />
          <Destinationcard
            img="https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg"
            name="himachal"
          />
          <Destinationcard
            img="https://delhitourism.gov.in/dttdc/images/About_Img.jpg"
            name="delhi"
          />
          <Destinationcard
            img="https://www.holidify.com/images/bgImages/LADAKH.jpg"
            name="ladakh"
          />
          <Destinationcard
            img="https://i0.wp.com/unciatrails.com/wp-content/uploads/2020/07/Taj2-1.jpg?fit=960%2C686&ssl=1"
            name="agra"
          />
          <Destinationcard
            img="https://m.economictimes.com/thumb/msid-57306924,width-1200,height-900,resizemode-4,imgsize-246622/enter-the-zone-of-tranquility-why-you-must-plan-a-visit-to-the-french-colony-of-pondicherry-soon.jpg"
            name="pondi cherry"
          />
          <Destinationcard
            img="https://pujacraft.com/cdn/shop/articles/Kapaleeshwarar-Temple-Chennai.jpg?v=1683957200"
            name="chennai"
          />
          <Destinationcard
            img="https://static.toiimg.com/photo/107164723.cms"
            name="jaipur"
          />
          <Destinationcard
            img="https://static.toiimg.com/photo/msid-69789635,width-96,height-65.cms"
            name="nepal"
          />
        </div>
      </div>{" "}
    </div>
  );
}
