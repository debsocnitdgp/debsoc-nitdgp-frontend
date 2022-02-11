import styles from "../components/About/about.module.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import style from "../styles/audtion.module.scss";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";

export default function Audition() {
  useState(() => {
    if (localStorage.getItem("tk") && localStorage.getItem("tk") !== "") {
      window.location.href = "/auditionform";
    }
  }, []);

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState("");
  const responseGoogle = async (response) => {
    setLoading("Logging You In");
    localStorage.setItem("nm", response.profileObj.givenName);
    localStorage.setItem("purl", response.profileObj.imageUrl);

    const res = await fetch(
      "https://debsoc-audition-backend.herokuapp.com/auth/google",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: response.tokenId,
        }),
      }
    );
    const resp = await res.json();

    if (resp.token && resp.token !== "" && resp.token != null) {
      localStorage.setItem("tk", resp.token);
      localStorage.setItem("sub", resp.submit);
      window.location.href = "/auditionform";
    } else {
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>JOIN US</div>
          <div className={styles.head2}>AUDITIONS &apos;22</div>
        </div>
        <div className={styles.content}>
          Being a club that believes in coherence and clarity, we relish a
          healthy discussion on any topic under the sun. But that&apos;s not
          all. we&apos;ve got a plethora of events covering every possible field
          as we believe in exploring and learning by experience. We, the
          Debating Society, proudly present to you, Auditions 2022. We are
          excited to join forces with the chosen few to create the dream team.
        </div>
      </div>
      <div className={style.col}>
        <div className={style.col2}>
          <img src="Images/audition.jpeg" alt="" />
          <div className={style.head}>
            &#8220; The Debsoc Fam awaits you! &#8221;
          </div>
          {msg && <div className={style.msg}>{msg}</div>}
          {/* <GoogleLogin
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
          /> */}
          <div className={style.load}>{loading}</div>
          <div className={style.load}>Audition Form is closed!</div>
          <div className={style.content}>
            DEBSOC is not just any cultural club, it&apos;s a culture in itself.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
