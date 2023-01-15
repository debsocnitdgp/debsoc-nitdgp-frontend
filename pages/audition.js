import { useState } from "react";
import AuditionLanding from "../components/Auditions/Landing";
import AuditionLoggedIn from "../components/Auditions/LoggedIn";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import styles from "../components/Auditions/audition.module.scss";
import { useGoogleLogin } from "@react-oauth/google";

export default function Audition() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // setMessage("Fetching your information from Google...");
      fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" +
          tokenResponse.access_token
      )
        .then((json) => json.json())
        .then((response) => {
          setLoading("Signing you in...");
          console.log(response);
          localStorage.setItem("_ds_aud_nm", response.name);
          localStorage.setItem("_ds_aud_purl", response.picture);
          localStorage.setItem("_ds_aud_tk", tokenResponse.access_token);
          localStorage.setItem("_ds_aud_email", response.email);

          refresh_register_status();
        });
    },
    onFailure: (error) => {
      console.log(error);
    },
  });

  const refresh_register_status = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_CHECK_EMAIL_AUD +
        "?email=" +
        localStorage.getItem("_ds_aud_email")
    );
    setLoading("Loading...");
    const resp = await res.json();
    setLoading("");
    setLoggedIn(true);
    setRegistered(resp.data);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("_ds_aud_tk");
    localStorage.removeItem("_ds_aud_registered");
    localStorage.removeItem("_ds_aud_db_registered");
    setLoggedIn(false);
  };
  return (
    <>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      {loggedIn ? (
        <AuditionLanding onLogin={handleGoogleLogin} />
      ) : (
        <AuditionLoggedIn
          onLogout={handleLogout}
          onRegister={refresh_register_status}
        />
      )}
      <Footer />
    </>
  );
}
