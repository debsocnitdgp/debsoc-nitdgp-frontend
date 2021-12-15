import styles from "./events.module.scss";

export default function Events() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head1}>EVENTS</div>
      </div>
      <div className={styles.events}>
        <div className={styles.head2}>OUR EVENTS</div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
          veniam, quis nostrud exercitation ullamco laboris nisi
        </div>
      </div>
      <div className={styles.future}>
        <div className={styles.left}>
          <img src="Images/leftBubbles.png" alt="" />
        </div>
        <div className={styles.futureWrapper}>
          <div className={styles.head}>Get latest Updates on FUTURE EVENTS</div>
          <div className={styles.col2}>
            <div className={styles.email}>
              <div className={styles.drop}>
                <input
                  type="email"
                  name="name"
                  placeholder="DROP YOUR EMAIL ID"
                />
              </div>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="Images/rightBubbles.png" alt="" />
        </div>
      </div>
    </>
  );
}
