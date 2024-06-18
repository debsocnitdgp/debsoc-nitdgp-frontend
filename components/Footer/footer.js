import styles from "./footer.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const url = process.env.NEXT_PUBLIC_EMAIL_DROP_URL;

  const storeEmail = async () => {
    const response = await fetch(url,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({email: email})
    })
    console.log('sent')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
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
            Get the latest Updates on <br />
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
            President - +91 9381033844 (Umang Jhawar)
          </div>
          <div className={styles.Items}>
            Treasurer - +91 8957469339 (Ayush Verma)
          </div>
          <div className={styles.Items}>
            Sponsorship Head - +91 7890912728 (Ayush Bhartia)
          </div>
          <div className={styles.Items}>debatingsociety@nitdgp.ac.in</div>
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
          &copy; The Debating Society, NIT Durgapur
        </div>
      </div>
    </>
  );
}
