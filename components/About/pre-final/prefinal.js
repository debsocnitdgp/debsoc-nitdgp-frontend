import styles from "../sophomore/sophomore.module.scss";
import Link from "next/link";

export default function PreFinal() {
  return (
    <>
          <div className={styles.sopho}>
        <div className={styles.col1}>
          <img src="Images/GettyImage.png" alt="" />
          <div className={styles.col2}>
            <div className={styles.head1}>kaustav kanchan chattopadhay</div>
            <div className={styles.head2}>Senior Member</div>
            <div className={styles.links}>
              <Link href="#">
                <img src="Images/facebook.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/linkedin.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/insta.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <img src="Images/GettyImage.png" alt="" />
          <div className={styles.col2}>
            <div className={styles.head1}>Tanushree Bhattacharya</div>
            <div className={styles.head2}>Senior Member</div>
            <div className={styles.links}>
              <Link href="#">
                <img src="Images/facebook.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/linkedin.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/insta.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <img src="Images/GettyImage.png" alt="" />
          <div className={styles.col2}>
            <div className={styles.head1}>Image</div>
            <div className={styles.head2}>Senior Member</div>
            <div className={styles.links}>
              <Link href="#">
                <img src="Images/facebook.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/linkedin.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/insta.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <img src="Images/GettyImage.png" alt="" />
          <div className={styles.col2}>
            <div className={styles.head1}>Image</div>
            <div className={styles.head2}>Senior Member</div>
            <div className={styles.links}>
              <Link href="#">
                <img src="Images/facebook.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/linkedin.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/insta.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <img src="Images/GettyImage.png" alt="" />
          <div className={styles.col2}>
            <div className={styles.head1}>Image</div>
            <div className={styles.head2}>Senior Member</div>
            <div className={styles.links}>
              <Link href="#">
                <img src="Images/facebook.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/linkedin.png" alt="" />
              </Link>
              <Link href="#">
                <img src="Images/insta.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}