import Button from "./Button";
import FullPage from "@fullpage/react-fullpage";
import styles from "./audition.module.scss"

function Section1() {
  return (
    <div className={`section ${styles.section1} ${styles.centred}`}>
        <h1>
          DEBSOC
        </h1>
        <h1>
          2023
        </h1>
        <Button>Register Now!</Button>
    </div>
  )
}

function Section2() {
  return (
    <div className={`section ${styles.centred}`}>
        <h1>
          DEBSOC
        </h1>
        <p>
          Some details about debsoc
        </p>
    </div>
  )
}

export default function AuditionLanding() {
  return (
    <FullPage
    licenseKey="gplv3-license"
      render={() => (
        <FullPage.Wrapper>
          <Section1 />
          <Section2 />
        </FullPage.Wrapper>
      )}
    />
  );
}
