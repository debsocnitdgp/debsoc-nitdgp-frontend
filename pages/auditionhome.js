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
  const responseGoogle = async (response) => {
    console.log(response);
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
    console.log(resp);
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
          We are delighted to introduce our alumni, who have established
          themselves as successful individuals in virtually every aspect of
          their lives. Our alumni have raised our institution&apos;s reputation
          to such heights as they now work for some of the most coveted
          corporations in the world.
        </div>
      </div>
      <div className={style.col}>
        <div className={style.col2}>
          <img src="Images/audition.jpeg" alt="" />
          <div className={style.head}>
            &#8220; The Debsoc Fam awaits you! &#8221;
          </div>
          {msg && <div className={style.msg}>{msg}</div>}
          <GoogleLogin
            clientId="602987753487-ur9fhtj1dd02pgh16ldfor9ck52md6s7.apps.googleusercontent.com"
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

          <div className={style.content}>
            DEBSOC is not just any cultural club, it's a culture in itself.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
