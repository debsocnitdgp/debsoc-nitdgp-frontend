import styles from "./2018.module.scss";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Eight() {
  const dpurl = 'https://debsoc-website.herokuapp.com'
  const url = "https://debsoc-website.herokuapp.com/main/api/alumni";
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const past = await response.json();
    const eight = past[2021]
    setData(eight);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return (
    <>
      <div className={styles.sopho}>
        {data?.map((pass) => (
          <div className={styles.col1} key={pass.id}>
            <img src={dpurl+pass.dp} alt="" key={pass.id} className={styles.photo} />
            <div className={styles.col2}>
              <div className={styles.head1} key={pass.firstname}>
                {pass.firstname} {pass.lastname}
              </div>
              <div className={styles.head2}></div>
              <div className={styles.links}>
              {pass.facebook_url &&    
                    (<Link href={pass.facebook_url}>
                    <a>
                    <img src="Images/facebook.png" alt="" key={pass.facebook_url} />
                    </a>
                    </Link>)
                  }

                  {pass.linkedin_url &&    
                    (<Link href={pass.linkedin_url}>
                    <a>
                    <img src="Images/linkedin.png" alt="" key={pass.linkedin_url} />
                    </a>
                    </Link>)
                  }

                  {pass.instagram_url &&    
                    (<Link href={pass.instagram_url}>
                    <a>
                    <img src="Images/insta.png" alt="" key={pass.instagram_url} />
                    </a>
                    </Link>)
                  }
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
