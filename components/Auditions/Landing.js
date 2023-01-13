import Button from "./Button";
import FullPage from "@fullpage/react-fullpage";
import styles from "./audition.module.scss"
import { ArrowRight } from "@material-ui/icons";

function Section1() {
  return (
    <div className={`section ${styles.section1} ${styles.centred}`}>
        <h1>
          AUDITIONS
        </h1>
        <h1>
          2023
        </h1>
        <p>
          Some great one liner about debatying society to get everyone hooked
        </p>
        <Button>Register Now!</Button>
    </div>
  )
}

function Section2() {
  return (
    <div className={`section ${styles.centred}`}>
        <h1>
          WHY DEBSOC?
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
