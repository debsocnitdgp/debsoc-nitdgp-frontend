import styles from "../Upcoming/upcoming.module.scss";

export default function OngoingEvents() {
  return (
    <>
      <div className={styles.upcoming}>
        <div className={styles.col1}>
                 
          <div className={styles.col2}>
            <img src="Images/incipio.png" alt="" />
            <div className={styles.head}>INCIPIO</div>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
              veniam, quis nostrud exercitation ullamco laboris nisi
            </div>
          </div>
        </div>
          <div className={styles.col1}>
          <div className={styles.col2}>
            <img src="Images/apd.png" alt="" />
            <div className={styles.head}>Asian Parliamentary Debate</div>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
              veniam, quis nostrud exercitation ullamco laboris nisi
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <div className={styles.col2}>
            <img src="Images/apd.png" alt="" />
            <div className={styles.head}>Asian Parliamentary Debate</div>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
              veniam, quis nostrud exercitation ullamco laboris nisi
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
