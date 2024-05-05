"use client";

import React, { useState } from "react";
import styles from "./logins.module.css";
import { FaUser, FaUserCircle, FaUserTie } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Logins() {
  const router = useRouter();
  const [activepage, setActivePage] = useState(0);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p>choose option</p>
        <p>enter your credentials to access your account</p>
      </div>
      {activepage == 0 ? (
        <div className={styles.outer_div}>
          <div
            className={styles.div1}
            onClick={() => router.push("/landingPage")}
          >
            <div>
              <FaUserCircle className={styles.logo} />
            </div>
            <div className={styles.dv2}>
              <p className={styles.p1}>User</p>
              <p className={styles.p2}>login as an user</p>
            </div>
          </div>
          <div
            className={styles.div2}
            onClick={() => {
              setActivePage(2);
            }}
          >
            <div>
              <FaUserTie className={styles.logo} />
            </div>
            <div className={styles.dv2}>
              <p className={styles.p1}>Admin</p>
              <p className={styles.p2}>login as admin</p>
            </div>
          </div>
        </div>
      ) : activepage == 1 ? (
        <div className={styles.userlogin}></div>
      ) : activepage == 2 ? (
        <div className={styles.adminlogin}>
          <input
            className={styles.input}
            placeholder="username ex .. chaudhary"
          ></input>
          <input
            className={styles.input}
            placeholder="password ex .. #Pass123"
          ></input>
          <button
            className={styles.btn}
            onClick={() => router.push("/adminLandingPage")}
          >
            login
          </button>
          <p
            className={styles.backbtn}
            onClick={() => {
              setActivePage(0);
            }}
          >
            go back
          </p>
        </div>
      ) : null}
      <p className={styles.p11}>
        Log in to your account to continue exploring and connecting.
      </p>
    </div>
  );
}
