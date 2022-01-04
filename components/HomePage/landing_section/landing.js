import styles from "./landing.module.scss";
import Link from "next/link";
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
             We, the official Debating Club of NIT Durgapur, believe every voice matters and are dedicated to creating an accessible space for debaters, public speakers, and the like to be able to participate in constructive discussion and build new ideologies.
            </div>
             <Link href="/about">
            <button className={styles.bigButton}>Know More</button></Link>
          </div>
        </div>
        <div className={styles.body2}>
          <div className="">
                        We, the official Debating Club of NIT Durgapur, believe every voice matters and are dedicated to creating an accessible space for debaters, public speakers, and the like to be able to participate in constructive discussion and build new ideologies.
          </div>
            <Link href="/about">
          <button className={styles.smallButton}>Know More</button></Link>
        </div>
      </div>
      <div className={styles.bannerItems}>
        <div className={styles.banner}>
          <div className={styles.item}>
            <img src="Images/magicwand.png" alt="party" />
            <div className="">Design</div>
          </div>
          <div className={styles.item}>
            <img src="Images/cup.png" alt="party" />
            <div className="">Debate</div>
          </div>
          <div className={styles.item}>
            <img src="Images/partypopper.png" alt="party" />
            <div className="">Organise</div>
          </div>
        </div>
      </div>
    </>
  );
}
