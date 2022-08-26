import styles from "../components/About/about.module.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import style from "../styles/audtion.module.scss";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";

export default function Audition() {
  useState(() => {
    if (localStorage.getItem("tk") && localStorage.getItem("tk") !== "") {
      window.location.href = "/takedebaitform";
    }
  }, []);

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState("");

  const responseGoogle = async (response) => { 
    setLoading("Logging You In");
    localStorage.setItem("nm", response.profileObj.givenName);
    localStorage.setItem("purl", response.profileObj.imageUrl);
    console.log(response.profileObj.imageUrl)

    localStorage.setItem("tk", response.tokenId);
    
    const res = await fetch(
      process.env.NEXT_PUBLIC_CHECK_EMAIL +
        "?email=" +
        response.profileObj.email
    );
    
    const resp = await res.json();

    if (resp.success) {
      console.log(response);
      console.log(resp);
      localStorage.setItem("registered", !resp.success);
      localStorage.setItem("email", response.profileObj.email);
      window.location.href = "/takedebaitform";
    } else {
      setLoading("")
      setMsg("You have already registered!");
    }

  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>REGISTER</div>
          <div className={styles.heads2}>TAKE DEBAIT 4.0</div>
        </div>
        <div className={styles.contents}>
          {/* Being a club that believes in coherence and clarity, we relish a
          healthy discussion on any topic under the sun. But that&apos;s not
          all. we&apos;ve got a plethora of events covering every possible field
          as we believe in exploring and learning by experience. We, the
          Debating Society, proudly present to you, Auditions 2022. We are
          excited to join forces with the chosen few to create the dream team. */}
          An event packed with mystery and rife with danger, teams are assigned characters in a murder mystery plot.
          Each team works to find out who the killer is, while also defending themselves from suspicion. 
          Teams are given clues every round to help them get to the bottom of the mystery, 
          as they are simultaneously led astray by the false constructive of the other teams.
        </div>
      </div>
      <div className={style.col}>
        <div className={style.col2}>
          <img src="Images/takedebait.jpg" alt="" />
          <div className={style.head}>
             Do You Think You Can Catch Us? <br/> Give it a Try! 
          </div>
          {msg && <div className={style.msg}>{msg}</div>}

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
          &#8220; Knives are Sharp and Gleam so Pretty,<br/> Poison's Slow Which is a Pity...&#8220;
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
