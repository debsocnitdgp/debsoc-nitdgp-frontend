import styles from "./sponsors.module.scss";

export default function Sponsors() {
  return (
    <>
      <div className={styles.sponsors}>
        <div className={styles.col1}>
          <div className={styles.head1}>SPONSORS</div>
          <div className={styles.head2}>OUR PREVIOUS SPONSORS</div>
        </div>
        <div className={styles.content}>
        We’re proud and thankful to be able to appreciate our generous sponsors who have helped make our events successful, and look forward to more such collaborations in the future.
        </div>
        <div className={styles.logos}>
          <img src="Images/loziczap.png" alt="" />
          <img src="Images/NetCredentialLogo.png" alt="" />
          <img src="Images/Pizza_Hut_logo.png" alt="" />
          <img src="Images/tech.png" alt="" />
          <img src="Images/SBI.png" alt="" />
          <img src="Images/cppsecrets.png" alt="" />
        </div>
      </div>
    </>
  );
}
