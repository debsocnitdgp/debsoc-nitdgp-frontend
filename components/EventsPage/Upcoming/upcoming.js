import ENDPOINTS, { BASE_URL } from "../../../api/endpoints";
import styles from "./upcoming.module.scss";
import { useState, useEffect, useCallback } from "react";

export default function UpcomingEvents() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const registerHandler = () => {
    window.location.href = "/takedebait";
  };

  const getData = useCallback(async () => {
    setLoading(true);

    // const response = await fetch(`/api/events`, {
    //   method: 'POST',
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     event: 'upcoming'
    //   })
    // });
    const response = await fetch(ENDPOINTS.UPCOMING_EVENTS);
    const upComing = await response.json();
    const events = upComing.upcoming;
    setData(events);
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      <div className={styles.upcoming}>
        {loading && <span className={styles.loaderSpinner} />}
        {data.map((pass) => (
          <div className={styles.col1} key={pass.id}>
            <div className={styles.cols2}>
              <img src={BASE_URL + pass.poster} alt="" key={pass.id} />
              <div className={styles.head} key={pass.event_name}>
                {pass.event_name}
              </div>
              <div className={styles.content} key={pass.event_description}>
                {pass.event_description}
              </div>
            </div>
            <div>
              {/* <button className={styles.btn} onClick={registerHandler}>REGISTER NOW!</button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
