import styles from "../components/About/about.module.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import style from "../styles/audtion.module.scss";
import { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import Reverberate from "../components/reverberate";
import WhatIf from "../components/whatif";

export default function Audition() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState({ rev: false, whatif: false });
  useEffect(() => {
    if (
      localStorage.getItem("rev_tk") &&
      localStorage.getItem("rev_tk") !== ""
    ) {
      setLoggedIn(true);
      refresh_register_status();
    }
  }, []);
  const [loading, setLoading] = useState("");

  const refresh_register_status = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_CHECK_EMAIL_REV +
        "?email=" +
        localStorage.getItem("rev_email")
    );
    setLoading("Loading...");
    const resp = await res.json();
    setLoading("");
    setLoggedIn(true);
    setRegistered(resp.data);
  };

  const responseGoogle = async (response) => {
    localStorage.setItem("rev_nm", response.profileObj.givenName);
    localStorage.setItem("rev_purl", response.profileObj.imageUrl);
    localStorage.setItem("rev_tk", response.tokenId);
    localStorage.setItem("rev_email", response.profileObj.email);

    refresh_register_status();
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("rev_tk");
    localStorage.removeItem("rev_registered");
    localStorage.removeItem("rev_db_registered");
    setLoggedIn(false);
  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>REGISTER</div>
          <div className={styles.heads2}>REVERBERATE IV</div>
        </div>
        <div className={styles.contents}>
          We all know how it feels to have to present your ideas, only to find
          the right words aren&apos;t available. A public speaking workshop,
          generally conducted at the start of the academic session here helps
          you overcome all those bouts of stuttering and gives us the confidence
          boost we all require. The workshop sees massive participation every
          year, and collects a lot of positive applause as well.
        </div>
      </div>
      {!loggedIn ? (
        <div className={style.col}>
          <div className={style.col2}>
            <div className={style.images}>
              <img src="Images/rev.webp" alt="" />
              <img src="Images/rev.webp" alt="" />
            </div>
            <div className={style.head}>
              Register Now!
              {/* Sorry, registrations are closed! */}
            </div>
            {/* <div className={style.content}>See you later in the next edition!</div> */}

            <GoogleLogin
              clientId="802793895572-n8412ckocsn2mq487j61r2akcqn9ef14.apps.googleusercontent.com"
              render={(renderProps) => (
                <div
                  className={style.gButton}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img src="Images/Google.png" alt="" />
                  Sign in with Google
                </div>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <div className={style.load}>{loading}</div>

            <div className={style.content}>
              &#8220;THE DECISION IS YOUR OWN VOICE, AN OPINION IS THE ECHO OF
              SOMEONE ELSE&apos;`S VOICE: CHOOSE THE RIGHT ONE.&#8220;
            </div>
          </div>
        </div>
      ) : (
        <>
          <Reverberate
            registered={registered.rev}
            refresh={refresh_register_status}
          />
          <WhatIf
            registered={registered.whatif}
            refresh={refresh_register_status}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <button className={style.bigButton} onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
