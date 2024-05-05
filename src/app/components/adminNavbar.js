"use client";
import React, { useState } from "react";
import styles from "./styles/adminNavbar.module.css";
import { FaBars, FaTypo3 } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const router = useRouter();
  const [isopen, setisopen] = useState(true);
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
            <Link
              href="/adminLandingPage"
              className={styles.links}
              onClick={() => {
                setisopen(!isopen);
              }}
            >
              Queries
            </Link>
          </li>
          {/* <li>
            <Link
              href="/"
              className={styles.links}
              onClick={() => {
                setisopen(!isopen);
              }}
            >
              Trips
            </Link>
          </li> */}
          <li>
            <Link
              href="/adminLandingPage/contacts"
              className={styles.links}
              onClick={() => {
                setisopen(!isopen);
              }}
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              href=""
              className={styles.links}
              onClick={() => {
                setisopen(!isopen);
              }}
            >
              More
            </Link>
          </li>
        </ul>
        <div className={styles.btns}>
          <button className={styles.btn1}>profile</button>
          {/* <button
            className={styles.btn2}
            onClick={() => {
              router.push("/addDestination");
            }}
          >
            add
          </button> */}
        </div>
      </div>
    </div>
  );
}
