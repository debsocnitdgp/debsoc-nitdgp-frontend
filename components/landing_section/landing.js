import styles from "./landing.module.scss";

export default function Landing() {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.colwrapper}>
          <div className={styles.col1}>
            <img src="Images/DEBSOClogo.png" alt="" />
          </div>
          <div className={styles.col2}>
            <div className={styles.heading}>
              <div className={styles.head1}>DEBSOC</div>
              <div className={styles.head2}>
                THE <span>DEBATING</span> SOCIETY
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.head3}>NIT DURGAPUR</div>
            <div className={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
              veniam, quis nostrud exercitation ullamco laboris nisi
            </div>
            <button className={styles.bigButton}>Know More</button>
          </div>
        </div>
        <div className={styles.body2}>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
            veniam, quis nostrud exercitation ullamco
          </div>
          <button className={styles.smallButton}>Know More</button>
        </div>
      </div>
    </>
  );
}
