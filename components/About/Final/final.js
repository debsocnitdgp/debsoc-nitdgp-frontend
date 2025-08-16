import styles from "../sophomore/sophomore.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import ENDPOINTS, { BASE_URL } from "../../../api/endpoints";

export default function Sophomore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(ENDPOINTS.FINAL_YEAR);
        const result = await response.json();

        // If your API response is wrapped like { data: [...] }, adjust here:
        const fetchedData = Array.isArray(result) ? result : result.data;

        console.log("Fetched data:", fetchedData);

        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else {
          console.warn("Unexpected data format:", result);
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <span className={styles.loaderSpinner} />;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.sopho}>
      {data.map((person) => (
        <div className={styles.col1} key={person.id}>
          <img
            src={BASE_URL + person.dp}
            alt={`${person.firstname} ${person.lastname}`}
            className={styles.photo}
          />
          <div className={styles.col2}>
            <div className={styles.head1}>
              {person.firstname} {person.lastname}
            </div>
            <div className={styles.head2}>{person.post}</div>
            <div className={styles.links}>
              {person.facebook_url && (
                <Link href={person.facebook_url} target="_blank" rel="noopener noreferrer">
                  <img src="/Images/facebook.png" alt="Facebook" />
                </Link>
              )}
              {person.linkedin_url && (
                <Link href={person.linkedin_url} target="_blank" rel="noopener noreferrer">
                  <img src="/Images/linkedin.png" alt="LinkedIn" />
                </Link>
              )}
              {person.instagram_url && (
                <Link href={person.instagram_url} target="_blank" rel="noopener noreferrer">
                  <img src="/Images/insta.png" alt="Instagram" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
