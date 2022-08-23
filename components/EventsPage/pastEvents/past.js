import styles from "./past.module.scss";
import { useState, useEffect, useCallback } from "react";

export default function PastEvents() {
  const posterurl = process.env.NEXT_PUBLIC_IMG_URL
  const url = process.env.NEXT_PUBLIC_EVENT_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const getData = useCallback(async () => {
    setLoading(true);

    const response = await fetch(url);    
    const past = await response.json();
    const events = past.all    
    setData(events);
    setLoading(false);

  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return (
    <>
      <div className={styles.past}>
      {loading && <span className={styles.loaderSpinner} />}
        {data.map((pass) => (
          <div className={styles.col1} key={pass.id}>
            <div className={styles.col2}>
              <img src={posterurl+pass.poster} alt="" key={pass.id} />
              <div className={styles.head} key={pass.event_name}>
                {pass.event_name}
              </div>
              <div className={styles.content} key={pass.event_description}>
                {pass.event_description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
