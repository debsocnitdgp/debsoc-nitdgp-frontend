import styles from "./sophomore.module.scss";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Sophomore() {
  const dpurl = process.env.NEXT_PUBLIC_IMG_URL
  const url = process.env.NEXT_PUBLIC_MEMBERS_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const getData = useCallback(async () => {
    setLoading(true);

    const response = await fetch(url);
    const past = await response.json();
    const sophomore = past["2"]
    setData(sophomore);
    setLoading(false);

  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return (
    <>
      <div className={styles.sopho}>
      {loading && <span className={styles.loaderSpinner} />}
        {data?.map((pass) => (
          <div className={styles.col1} key={pass.id}>
            <img src={dpurl+pass.dp} alt="" key={pass.id} className={styles.photo} />
            <div className={styles.col2}>
              <div className={styles.head1} key={pass.firstname}>
                {pass.firstname} {pass.lastname}
              </div>
              <div className={styles.head2}>{pass.post}</div>
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
