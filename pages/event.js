import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
//import OngoingEvents from "../components/EventsPage/Ongoing/ongoing";
import PastEvent from "../components/EventsPage/pastEvents/past";
import UpcomingEvents from "../components/EventsPage/Upcoming/upcoming";
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
          The Debating Society, NIT Durgapur, hosts an impressive roster of
          events, including some of the biggest debating events in the eastern
          circuit, drawing national as well as international participation.
        </div>
        <div className={styles.col2}>
          <div
            className={
              isActive || isTrue ? `${styles.head2}` : `${styles.head1}`
            }
            onClick={add3}
          >
            ALL EVENTS
          </div>
          <div
            className={
              isTrue && !isActive ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={add2}
          >
            UPCOMING EVENTS
          </div>
          {/* <div
            className={
              isActive && !isTrue ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={add}
          >
            UPCOMING EVENTS
          </div> */}
        </div>
        {!isActive && !isTrue ? <PastEvent /> : <></>}
        {!isActive && isTrue ? <UpcomingEvents /> : <></>}
        {/* {isActive && !isTrue ? <OngoingEvents /> : <></>} */}
      </div>
      <Footer />
    </>
  );
}
