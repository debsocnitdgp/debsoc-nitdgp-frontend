import styles from "./events.module.scss";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Events() {
  const url = "data/events/previous.json";
  const [data, setData] = useState([]);
  const [email, setEmail] = useState([""]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const past = await response.json();
    setData(past);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Email is submitted");
    setEmail("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head1}>EVENTS</div>
      </div>
      <div className={styles.events}>
        <div className={styles.head2}>OUR EVENTS</div>
        <div className={styles.content}>
          The Debating Society, NIT Durgapur, hosts an impressive roster of
          events, including some of the biggest debating events in the eastern
          circuit, drawing national as well as international participation.
        </div>

        <div className={styles.posters}>
          {data.map((pass) => (
            <img
              src={pass.img}
              alt=""
              key={pass.id}
              onClick={() => (window.location.href = "/event")}
            />
          ))}
        </div>

        <Link href="/event">
          <button className={styles.bigButton}>Know More</button>
        </Link>
      </div>
      <div className={styles.future}>
        <div className={styles.left}>
          <img src="Images/leftBubbles.png" alt="" />
        </div>
        <div className={styles.futureWrapper}>
          <div className={styles.head}>
            Get latest Updates on <br />
            <span>FUTURE EVENTS</span>
          </div>
          <div className={styles.col2}>
            <div className={styles.email}>
              <div className={styles.drop}>
                <input
                  type="email"
                  name="email"
                  placeholder="DROP YOUR EMAIL ID"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleSubmit}>SUBMIT</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="Images/rightBubbles.png" alt="" />
        </div>
      </div>
    </>
  );
}
