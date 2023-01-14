import { useState } from "react";
import AuditionLanding from "../components/Auditions/Landing";
import AuditionLoggedIn from "../components/Auditions/LoggedIn";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import styles from "../components/Auditions/audition.module.scss"

export default function Audition() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      {loggedIn ? <AuditionLanding /> : <AuditionLoggedIn />}
      <Footer />
    </>
  );
}
