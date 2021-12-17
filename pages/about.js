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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
          veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna Ut enim minim veniam, quis
          nostrud exercitation ullamco laboris nisi
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
