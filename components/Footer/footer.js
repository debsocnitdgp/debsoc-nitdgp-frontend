import styles from "./footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.col}>
          <div className={styles.head}>FIND US HERE</div>
          <Link href="https://www.facebook.com/debatingsociety3103.nitd/">
            <img src="Images/facebook.png" alt="" />
          </Link>
          <Link href="https://www.linkedin.com/company/debating-society-nit-durgapur">
            <img src="Images/linkedin.png" alt="" />
          </Link>
          <Link href="https://instagram.com/debsocnitd?utm_medium=copy_link">
            <img src="Images/insta.png" alt="" />
          </Link>
        </div>
        <div className={styles.col}>
          <div className={styles.head}>CONTACT INFO</div>
          <div className={styles.Items}>+91 8981610561</div>
          <div className={styles.Items}>debatingsociety.nitdgp@gmail.com</div>
        </div>
        <div className={styles.col}>
          <div className={styles.head}>QUICK LINKS</div>
          <Link href="/">
            <div className={styles.Items}>Home</div>
          </Link>
          <Link href="/event">
            <div className={styles.Items}>Event</div>
          </Link>
          <Link href="/about">
            <div className={styles.Items}>About Us</div>
          </Link>
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
