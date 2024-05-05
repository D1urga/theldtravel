"use client";
import React, { useState, useEffect } from "react";
import styles from "./contacts.module.css";

export default function ContactRecieved() {
  const [data, setData] = useState([]);
  const [isloading, setisloading] = useState(true);
  const fetchInfo = async () => {
    setisloading(false);
    const res = await fetch(
      "https://thetravelbackend.onrender.com/api/v1/contacts/getContact",
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
        <p className={styles.p1}>All messages</p>
        {isloading ? (
          <div className={styles.allmessages}>
            {data.map((val, index) => (
              <div className={styles.message}>
                <p className={styles.p5}>{val.fullname}</p>
                <div className={styles.mobs}>
                  <p className={styles.p2}>{val.mobile}</p>
                  <p className={styles.p2}>{val.email}</p>
                </div>
                <p className={styles.p3}>{val.subject}</p>
                <p className={styles.p4}>{val.note}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.loader}>loading please wait ..</p>
        )}
      </div>
    </div>
  );
}
