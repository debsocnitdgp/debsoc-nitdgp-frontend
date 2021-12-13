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
      </div>
    </>
  );
}
