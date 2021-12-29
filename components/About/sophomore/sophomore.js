import styles from "./sophomore.module.scss";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Sophomore() {
   const url = "data/teams/sophomore.json";
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
      <div className={styles.sopho}>
       {data?.map((pass) => (
        <div className={styles.col1} key={pass.id}>
          <img src={pass.img} alt="" key={pass.id}/>
          <div className={styles.col2}>
            <div className={styles.head1} key={pass.name}>{pass.name}</div>
            <div className={styles.head2}>Junior Member</div>
            <div className={styles.links}>
              <Link href={pass.fb}>
                <img src="Images/facebook.png" alt="" key={pass.fb}/>
              </Link>
              <Link href={pass.linkedin}>
                <img src="Images/linkedin.png" alt="" key={pass.insta}/>
              </Link>
              <Link href={pass.insta}>
                <img src="Images/insta.png" alt="" key={pass.linkedin}/>
              </Link>
            </div>
          </div>
        </div>
       ))}
      </div>
    </>
  );
}
