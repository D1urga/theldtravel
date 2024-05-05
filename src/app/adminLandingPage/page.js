"use client";
import React, { useState } from "react";
import styles from "./adminLandingPage.module.css";
import { FaUser, FaUserCircle } from "react-icons/fa";
import axios from "axios";

export default function AddDestination() {
  const [isposting, setisposting] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    description: "",
    duration: "",
    price: "",
    distance: "none",
  });
  const [imgurl, setimgurl] = useState(null);
  const handleContentchange = (e) => {
    setimgurl(e.target.files[0]);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    // setCurrentValue1(false);
    // setIsuploading(false);
    setisposting(true);

    const formData1 = new FormData();
    formData1.append("img", imgurl);
    formData1.append("destination", formData.destination);
    formData1.append("description", formData.description);
    formData1.append("price", formData.price);
    formData1.append("duration", formData.duration);
    formData1.append("distance", formData.distance);

    const response = await axios({
      method: "post",
      url: `https://thetravelbackend.onrender.com/api/v1/destinations/postDestination`,
      data: formData1,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // setIsuploading(true);
    // setCurrentValue1(true);
    setisposting(false);
    alert("posted");
  };
  return (
    <div className={styles.main}>
      {" "}
      <p className={styles.plan}>Add a place or trip</p>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <FaUserCircle className={styles.logo} />
          <p className={styles.p1}>admin</p>
          <p className={styles.p2}>
            You are the owner <br /> Please fill all the details
          </p>
        </div>
        <div className={styles.div2}>
          <form onSubmit={handleSubmitRegister}>
            <p className={styles.titles}>destination</p>
            <input
              className={styles.input}
              type="text"
              placeholder="ex .. himachal"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
            ></input>
            <p className={styles.titles}>description</p>
            <input
              className={styles.input}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="ex .. 3 days himachal trip"
            ></input>
            <p className={styles.titles}>duration</p>
            <input
              className={styles.input}
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="ex .. 4 nights & 3 days"
            ></input>
            <p className={styles.titles}>price</p>
            <input
              className={styles.input}
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="ex .. 2300"
            ></input>
            <p className={styles.titles}>attach image</p>
            <input
              type="file"
              name="imgurl"
              id="imgurl"
              onChange={handleContentchange}
              className={styles.input1}
            ></input>
            <br />
            <button type="submit" className={styles.btn}>
              {isposting ? "posting" : "submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
