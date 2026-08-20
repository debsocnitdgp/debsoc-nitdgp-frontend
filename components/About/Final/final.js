import styles from "../sophomore/sophomore.module.scss";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import ENDPOINTS,{BASE_URL} from "../../../api/endpoints";

export default function Sophomore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // const response = await fetch(`/api/members?year=2`);
        const response = await fetch(ENDPOINTS.FINAL_YEAR);

        const past = await response.json();
        
        
      
          setData(past);
          setLoading(false);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

  
  }, []);

  if (loading) {
    return <span className={styles.loaderSpinner} />;
  }

  if (!Array.isArray(data)) {
    return <div>No data available</div>; 
  }


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
              <div className={styles.head2}>{pass.post}</div>
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
