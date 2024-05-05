"use client";

import React, { useState } from "react";
import styles from "./contactPage.module.css";
import axios from "axios";

export default function ContactPage() {
  const [isposting, setisposting] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    subject: "",
    note: "",
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    setisposting(true);

    const formData1 = new FormData();
    formData1.append("fullname", formData.fullname);
    formData1.append("email", formData.email);
    formData1.append("mobile", formData.mobile);
    formData1.append("subject", formData.subject);
    formData1.append("note", formData.note);

    const response = await axios({
      method: "post",
      url: `https://thetravelbackend.onrender.com/api/v1/contacts/postContact`,
      data: formData1,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setisposting(false);
    alert("posted");
  };
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <p className={styles.p1}>Contact Us</p>
          <p className={styles.p2}>
            Have a question, suggestion, or just want to say hello? We're here
            and eager to hear from you! Simply fill out the form below and one
            of our dedicated team members will get back to you as soon as
            possible.
          </p>
          <p className={styles.con}>
            mobile : <span>639693????</span>
          </p>
          <p className={styles.con1}>
            email : <span>email@gmail.com</span>
          </p>
        </div>
        <div className={styles.div2}>
          <p className={styles.tit}>Fill out form</p>
          <form onSubmit={handleSubmitRegister}>
            <div>
              <p className={styles.title}>fullname</p>
              <input
                className={styles.input}
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="fullname ..ex bill ackman"
              ></input>
              <p className={styles.title}>email</p>
              <input
                className={styles.input}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email ..ex email@gmail.com"
              ></input>
              <p className={styles.title}>mobile number</p>
              <input
                className={styles.input}
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="mobile ..ex 639693????"
              ></input>
              <p className={styles.title}>subject</p>
              <input
                className={styles.input}
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="subject ..ex need a car"
              ></input>
              <p className={styles.title}>note</p>
              <textarea
                className={styles.input1}
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                placeholder="note ..ex write your detailed explaination here ..."
              ></textarea>
              <br />
              <button className={styles.btn} type="submit">
                {!isposting ? "post" : "posting"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
