import FullPage from "@fullpage/react-fullpage";
import styles from "./audition.module.scss";
import Button from "./Button";

function Section1() {
  return (
    <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
      <img className={styles.avatar} />
      <h3>Welcome</h3>
      <h2>Jalaj Kumar</h2>
      <p>
        Welcome aboard the audition process for the Debating Society!
        <br />
        Fill out the following form for your round 1
      </p>
      <Button>Get started</Button>
    </div>
  );
}

function Section2() {
  return (
    <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
      <h3>Personal Details</h3>
      <form>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Name</div>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Phone number</div>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Full Roll No. (For example: use 22E80012 not 12)</div>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Hall No.</div>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Club preference order</div>
          <input type="text" />
        </div>
      </form>
      <Button>Get started</Button>
    </div>
  );
}

export default function LoggedIn() {
  return (
    <FullPage
      render={({ state, fullpageApi }) => {
        return (
          <FullPage.Wrapper>
            <div className="section">
              <Section1 />
            </div>
            <div className="section">
              <Section2 />
            </div>
          </FullPage.Wrapper>
        );
      }}
    />
  );
}
