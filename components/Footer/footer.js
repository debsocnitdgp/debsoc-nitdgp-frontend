import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.col}>
          <div className={styles.head}>FIND US HERE</div>
          <img src="Images/facebook.png" alt="" />
          <img src="Images/linkedin.png" alt="" />
          <img src="Images/insta.png" alt="" />
        </div>
        <div className={styles.col}>
          <div className={styles.head}>CONTACT INFO</div>
          <div className={styles.Items}>+91 8981610561</div>
          <div className={styles.Items}>debatingsociety.nitdgp@gmail.com</div>
        </div>
        <div className={styles.col}>
          <div className={styles.head}>QUICK LINKS</div>
          <div className={styles.Items}>Home</div>
          <div className={styles.Items}>Event</div>
          <div className={styles.Items}>About Us</div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.body}>
          &copy; The Debating Scoiety, NIT Durgapur
        </div>
      </div>
    </>
  );
}
