import styles from "../Upcoming/upcoming.module.scss";
import { useState, useEffect, useCallback } from "react";

export default function OngoingEvents() {
    const url = "data/events/ongoing.json";
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const ongoing = await response.json();
    setData(ongoing);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]); 
  return (
    <>
      <div className={styles.upcoming}>
           {data.map((pass) => (
          <div className={styles.col1} key={pass.id}>
            <div className={styles.col2}>
              <img src={pass.img} alt="" key={pass.id} />
              <div className={styles.head} key={pass.name}>
                {pass.name}
              </div>
              <div className={styles.content} key={pass.desc}>
                {pass.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
