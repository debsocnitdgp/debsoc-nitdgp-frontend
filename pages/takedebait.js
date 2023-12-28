import styles from "../components/About/about.module.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import style from "../styles/audtion.module.scss";
import { useEffect, useState } from "react";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Audition() {
  useState(() => {
    if (localStorage.getItem("tk") && localStorage.getItem("tk") !== "") {
      window.location.href = "/takedebaitform";
    }
  }, []);

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState("");
  console.log("newwwwwwwwwwwwwwwwwwwwww")
  const responseGoogle = async (response) => {
    console.log(response);
    console.log("new api")
    const data = jwtDecode(response.credential);

    const email = data.email;
    const name = data.given_name + " " + data.family_name;
    const picture = data.picture;
    if (response === undefined) {
      console.log("failed")
      setLoading("");
      return;
    }
    localStorage.setItem("nm", name);
    localStorage.setItem("purl", picture);
    console.log(picture);

    localStorage.setItem("tk", response.tokenId);

    const res = await fetch(
      process.env.NEXT_PUBLIC_CHECK_EMAIL +
        "?email=" +
        email
    );

    const resp = await res.json();

    if (resp.success) {
      console.log(response);
      console.log(resp);
      localStorage.setItem("registered", !resp.success);
      localStorage.setItem("email", email);
      window.location.href = "/takedebaitform";
    } else {
      setLoading("");
      setMsg("You have already registered!");
    }
  };

  useGoogleOneTapLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
  });

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>REGISTER</div>
          <div className={styles.heads2}>TAKE DEBAIT 5.0</div>
        </div>
        <div className={styles.contents}>
          An event packed with mystery and rife with danger, teams are assigned
          characters in a murder mystery plot. Each team works to find out who
          the killer is, while also defending themselves from suspicion. Teams
          are given clues every round to help them get to the bottom of the
          mystery, as they are simultaneously led astray by the false
          constructive of the other teams.
        </div>
      </div>
      <div className={style.col}>
        <div className={style.col2}>
          <img src="Images/final_poster_new.png" alt="" className={style.poster} />
          <div className={style.head}>
            Do You Think You Can Catch Us? <br /> Give it a Try!
          </div>
          <div className={style.content}>Click below to register</div>
          {msg && <div className={style.msg}>{msg}</div>}

          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT}
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
            𝐈𝐧 𝐭𝐡𝐞 𝐞𝐜𝐡𝐨𝐞𝐬&apos; 𝐝𝐚𝐧𝐜𝐞, 𝐬𝐞𝐜𝐫𝐞𝐭𝐬 𝐮𝐧𝐟𝐨𝐥𝐝,
            <br />
            𝐀 𝐭𝐚𝐥𝐞 𝐨𝐟 𝐝𝐚𝐫𝐤𝐧𝐞𝐬𝐬, 𝐨𝐟 𝐬𝐭𝐨𝐫𝐢𝐞𝐬 𝐮𝐧𝐭𝐨𝐥𝐝.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
