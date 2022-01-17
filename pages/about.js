import styles from "../components/About/about.module.scss";
import Navbar from "../components/Navbar/navbar";
import React, { useState, useEffect } from "react";
import Sophomore from "../components/About/sophomore/sophomore";
import PreFinal from "../components/About/pre-final/prefinal";
import Final from "../components/About/Final/final";
import Footer from "../components/Footer/footer";

export default function About() {
  const [isActive, setActive] = useState(false);
  const [isTrue, setTrue] = useState(false);
  const add = () => {
    setActive(true);
    setTrue(false);
  };
  const add2 = () => {
    setTrue(true);
    setActive(false);
  };
  const add3 = () => {
    setTrue(false);
    setActive(false);
  };
  useEffect(() => {
    add();
    add2();
    add3();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>WHO WE ARE</div>
          <div className={styles.head2}>ABOUT US</div>
        </div>
        <div className={styles.content}>
          The Debating Society is the official debating club of NIT Durgapur. At
          its core, this club is an ideological interest group that aims to
          promote the culture of debating on campus and remove the phobia
          associated with public speaking. We distinguish ourselves from most
          other debate clubs at a variety of institutions across the country by
          emphasizing the use of technology in our practices.
          <br /> <br /> <br />
          <ul>
            <h3>Our mission?</h3>
            <li>
              To encourage young people to become actively involved in social
              concerns and uprisings.
            </li>
            <li>
              To aid students in the formation and articulation of their ideas
              in a logical and coherent manner.
            </li>
            <li>
              To assist students in developing the confidence to express
              themselves on a larger scale.
            </li>
            <li>
              To raise NIT Durgapur's profile in elocution by competing in
              various debating and public speaking competitions held across the
              country
            </li>
          </ul>
        </div>
        <div className={styles.col2}>
          <div className={styles.head1}>OUR TEAM</div>
          <div className={styles.head2}>MEMBERS</div>
        </div>
        <div className={styles.col3}>
          <div
            className={
              isActive || isTrue ? `${styles.head2}` : `${styles.head1}`
            }
            onClick={add3}
          >
            SOPHOMORE
          </div>
          <div
            className={
              isTrue && !isActive ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={add2}
          >
            PRE-FINAL YEAR
          </div>
          <div
            className={
              isActive && !isTrue ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={add}
          >
            FINAL YEAR
          </div>
        </div>
        {!isActive && !isTrue ? <Sophomore /> : <></>}
        {!isActive && isTrue ? <PreFinal /> : <></>}
        {isActive && !isTrue ? <Final /> : <></>}
      </div>
      <Footer />
    </>
  );
}
