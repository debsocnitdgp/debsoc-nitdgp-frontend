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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna Ut enim minim
          veniam, quis nostrud exercitation ullamco laboris nisi
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
