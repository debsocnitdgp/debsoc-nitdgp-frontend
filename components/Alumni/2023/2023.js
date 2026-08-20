import styles from "../2021/2021.module.scss";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import ENDPOINTS, {BASE_URL} from "../../../api/endpoints";

export default function TwentyThree() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const getData = useCallback(async () => {
    setLoading(true);

    // const response = await fetch(`/api/alumni?year=2023`);
    const response = await fetch(ENDPOINTS.ALUMNI + 2023);
    const past = await response.json();
    setData(past);
    setLoading(false);

  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      <div className={styles.sopho}>
      {loading && <span className={styles.loaderSpinner} />}
        {data?.map((pass) => (
          <div className={styles.col1} key={pass.id}>
            <img src={BASE_URL + pass.dp} alt="" key={pass.id} className={styles.photo} />
            <div className={styles.col2}>
              <div className={styles.head1} key={pass.firstname}>
                {pass.firstname} {pass.lastname}
              </div>
              <div className={styles.head2}></div>
              <div className={styles.links}>
              {pass.facebook_url &&    
                    (<Link href={pass.facebook_url}>
                    <img src="Images/facebook.png" alt="" key={pass.facebook_url} />
                    </Link>)
                  }

                  {pass.linkedin_url &&    
                    (<Link href={pass.linkedin_url}>
                    <img src="Images/linkedin.png" alt="" key={pass.linkedin_url} />
                    </Link>)
                  }

                  {pass.instagram_url &&    
                    (<Link href={pass.instagram_url}>
                    <img src="Images/insta.png" alt="" key={pass.instagram_url} />
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
