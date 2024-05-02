"use client";
import React, { useState } from "react";
import styles from "./styles/navbar.module.css";
import { FaBars, FaTypo3 } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isopen, setisopen] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <FaBars
          className={styles.bars}
          onClick={() => {
            setisopen(!isopen);
          }}
        />
        <div className={styles.title}>
          {" "}
          <FaTypo3 className={styles.logo} />
          <p>LdTravel</p>
        </div>
        <ul className={isopen ? styles.list1 : styles.list}>
          <li>
            <Link href="/" className={styles.links}>
              Discover
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.links}>
              Trips
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.links}>
              Review
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.links}>
              More
            </Link>
          </li>
        </ul>
        <div className={styles.btns}>
          <button className={styles.btn1}>signIn</button>
          <button className={styles.btn2}>profile</button>
        </div>
      </div>
    </div>
  );
}
