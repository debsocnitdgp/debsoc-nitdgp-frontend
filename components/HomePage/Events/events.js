import styles from "./events.module.scss";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Events() {
  const url = "data/events/previous.json";
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const past = await response.json();
    setData(past);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

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
    </>
  );
}
