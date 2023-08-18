import styles from "../components/Alumni/alumni.module.scss";
import Navbar from "../components/Navbar/navbar";
import React, { useState, useEffect } from "react";
//import Twenty from "../components/Alumni/2020/2020";
import Eight from "../components/Alumni/2021/2021";
import Nine from "../components/Alumni/2022/2022";
import TwentyThree from "../components/Alumni/2023/2023";
import Footer from "../components/Footer/footer";

export default function About() {
  const [isActive, setActive] = useState(1);

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>OUR ANCESTORS</div>
          <div className={styles.head2}>ALUMNI</div>
        </div>
        <div className={styles.content}>
          We are delighted to introduce our alumni, who have established themselves as successful individuals in virtually every aspect of their lives. Our alumni have raised our institution&apos;s reputation to such heights as they now work for some of the most coveted corporations in the world.
        </div>
        <div className={styles.col3}>
          <div
            className={
              isActive === 1 ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={() => setActive(1)}
          >
           2017 - 2021
          </div>
          <div
            className={
              isActive === 2 ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={() => setActive(2)}
          >
            2018 - 2022
          </div>
          <div
            className={
             isActive === 3 ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={() => setActive(3)}
          >
            2019 - 2023
          </div>
        </div>
        {isActive === 1 &&  <Eight />}
        {isActive === 2 &&  <Nine />}
        {isActive === 3 &&  <TwentyThree />}

      </div>
      <Footer />
    </>
  );
}