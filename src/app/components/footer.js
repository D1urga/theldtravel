"use client";
import React from "react";
import Styles from "./styles/footer.module.css";
import Link from "next/link";
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className={Styles.main_div}>
      <div className={Styles.outer_div_1}>
        <div className={Styles.inner_div_1}>
          <p className={Styles.txt}>EXPLORE</p>
          <Link href="" className={Styles.one}>
            beaches
          </Link>
          <Link href="" className={Styles.one}>
            mountains
          </Link>
          <Link href="" className={Styles.one}>
            himalaya
          </Link>
          <Link href="" className={Styles.one}>
            eastern india
          </Link>
          <Link href="" className={Styles.one}>
            southern india
          </Link>
        </div>

        <div className={Styles.inner_div_2}>
          <p className={Styles.txt}>CORPORATE INFO</p>
          <Link href="" className={Styles.one}>
            Career
          </Link>
          <Link href="" className={Styles.one}>
            About
          </Link>
          <Link href="" className={Styles.one}>
            Sustainability
          </Link>
          <Link href="" className={Styles.one}>
            Press
          </Link>
          <Link href="" className={Styles.one}>
            Investor
          </Link>
        </div>

        <div className={Styles.inner_div_3}>
          <p className={Styles.txt}>HELP</p>
          <Link href="" className={Styles.one}>
            Customer Service
          </Link>
          <Link href="" className={Styles.one}>
            Find
          </Link>
          <Link href="" className={Styles.one}>
            Legal and privacy
          </Link>
          <Link href="" className={Styles.one}>
            Contact
          </Link>
          <Link href="" className={Styles.one}>
            Report Scam
          </Link>
        </div>

        <div className={Styles.inner_div_4}>
          <p>
            Sign up now and be the first to know
            <br /> about exclusive offers, new trips
            <br />
            and destinations !
          </p>

          <div className={Styles.two}>
            <Link href="" className={Styles.three}>
              Read More
            </Link>
            <FaArrowRight className={Styles.icon1} />
          </div>
        </div>
      </div>

      <div className={Styles.outer_div_2}>
        <div className={Styles.inner_div_2_1}>
          <Link href="">
            <FaInstagram className={Styles.icon2} />
          </Link>
          <Link href="">
            <FaFacebook className={Styles.icon2} />
          </Link>
          <Link href="">
            <FaYoutube className={Styles.icon2} />
          </Link>
          <Link href="">
            <FaPinterest className={Styles.icon2} />
          </Link>
          <Link href="">
            <FaTwitter className={Styles.icon2} />
          </Link>
        </div>
        <div className={Styles.inner_div_2_2}>
          <p>
            The content of this site is copyright-protected and is the property
            of LdTravels.
          </p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
