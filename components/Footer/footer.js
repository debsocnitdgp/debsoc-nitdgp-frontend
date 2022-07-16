import styles from "./footer.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const url = "https://debsoc-website.herokuapp.com/main/api/drop-email/";

  const storeEmail = async () => {
    const response = await fetch(url,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({email: email})
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload(false);
    storeEmail()
    setEmail("");
  };

  const handleChange = (e) => {
    e.preventDefault();  
    setEmail(e.target.value);  
  };
  return (
    <>
      <div className={styles.future}>
        <div className={styles.left}>
          <img src="Images/leftBubbles.png" alt="" />
        </div>
        <div className={styles.futureWrapper}>
          <div className={styles.head}>
            Get latest Updates on <br />
            <span>FUTURE EVENTS</span>
          </div>
          <div className={styles.col2}>
            <div className={styles.email}>
              <div className={styles.drop}>
                <input
                  type="email"
                  name="email"
                  placeholder="Drop your email id"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleSubmit}>SUBMIT</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="Images/rightBubbles.png" alt="" />
        </div>
      </div>
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

          <div className={styles.Items}>
            President - +91 8617028221 (Rishav)
          </div>
          <div className={styles.Items}>
            Sponsorship Head - +91 9382748755 (Animesh)
          </div>
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
