import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import styles from "../components/EventsPage/events.module.scss";

export default function EVENT() {
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
      <div className={styles.event}>
        <div className={styles.col1}>
          <div className={styles.head1}>EVENTS</div>
          <div className={styles.head2}>OUR EVENTS</div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
          veniam, quis nostrud exercitation ullamco laboris nisiLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna Ut enim minim veniam, quis
          nostrud exercitation ullamco laboris nisi
        </div>
        <div className={styles.col2}>
          <div
            className={
              isActive || isTrue ? `${styles.head2}` : `${styles.head1}`
            }
            onClick={add3}
          >
            PAST EVENTS
          </div>
          <div
            className={
              isTrue && !isActive ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={add2}
          >
            UPCOMING EVENTS
          </div>
          <div
            className={
              isActive && !isTrue ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={add}
          >
            ONGOING EVENT
          </div>
        </div>
      </div>
    </>
  );
}
