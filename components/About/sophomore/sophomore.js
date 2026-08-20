import styles from "./sophomore.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import ENDPOINTS,{BASE_URL} from "../../../api/endpoints";

export default function Sophomore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    //let isMounted = true; // Flag to track component mount status

    const fetchData = async () => {
      setLoading(true);

      try {

        // const response = await fetch(`/api/members?year=0`);
        const response = await fetch(ENDPOINTS.SOPHOMORES);

        const past = await response.json();
        //const sophomore = past["2"];
        
      
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
    <div className={styles.sopho}>
    {loading && <span className={styles.loaderSpinner} />}
      {data.map((pass) => (
        <div className={styles.col1} key={pass.id}>
          <img src={BASE_URL + pass.dp} alt="" className={styles.photo} />
          <div className={styles.col2}>
            <div className={styles.head1}>{pass.firstname} {pass.lastname}</div>
            <div className={styles.head2}>{pass.post != "NA" && pass.post}</div>
            <div className={styles.links}>
              {pass.facebook_url && (
                <Link href={pass.facebook_url}>
                    <img src="Images/facebook.png" alt="" />
                </Link>
              )}
              {pass.linkedin_url && (
                <Link href={pass.linkedin_url}>
                    <img src="Images/linkedin.png" alt="" />
                </Link>
              )}
              {pass.instagram_url && (
                <Link href={pass.instagram_url}>
                    <img src="Images/insta.png" alt="" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
