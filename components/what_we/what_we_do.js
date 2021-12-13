import styles from "./what.module.scss";

export default function What() {
  return (
    <>
      <div className={styles.whatWeDo}>
        <div className={styles.col1}>
          <div className={styles.head1}>WHAT WE DO</div>
          <div className={styles.head2}>WHAT WE DO</div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
          veniam, quis nostrud exercitation ullamco laboris nisi
        </div>
        <div className={styles.col2}>
          <div className={styles.col2Wrapper}>
            <div className={styles.listItems}>
              <img src="Images/debate.png" alt="" />
              <div className={styles.head}>National Debates</div>
              <div className={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna Ut enim
                minim veniam, quis nostrud exercitation
              </div>
            </div>
            <div className={styles.listItems}>
              <img src="Images/workshop.png" alt="" />
              <div className={styles.head}>Speaking Workshops</div>
              <div className={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna Ut enim
                minim veniam, quis nostrud exercitation
              </div>
            </div>
            <div className={styles.listItems}>
              <img src="Images/quiz.png" alt="" />
              <div className={styles.head}>Exciting Quizzes</div>
              <div className={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna Ut enim
                minim veniam, quis nostrud exercitation
              </div>
            </div>
            <div className={styles.listItems}>
              <img src="Images/events.png" alt="" />
              <div className={styles.head}>Fun Events</div>
              <div className={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna Ut enim
                minim veniam, quis nostrud exercitation
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
