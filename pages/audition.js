import { useState } from "react";
import AuditionLanding from "../components/Auditions/Landing";
import AuditionLoggedIn from "../components/Auditions/LoggedIn";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import styles from "../components/Auditions/audition.module.scss";
import { useGoogleLogin } from "@react-oauth/google";
import logo from "../public/Images/DEBSOClogo.png";
import Modal, { Loading } from "../components/Auditions/Modal";
export default function Audition() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // setMessage("Fetching your information from Google...");
      setLoading(true);
      fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" +
          tokenResponse.access_token
      )
        .then((json) => json.json())
        .then((response) => {
          setLoading(false);
          localStorage.setItem("_ds_aud_nm", response.name);
          localStorage.setItem("_ds_aud_purl", response.picture);
          localStorage.setItem("_ds_aud_tk", tokenResponse.access_token);
          localStorage.setItem("_ds_aud_email", response.email);
          setUser({
            name: response.name,
            picture: response.picture,
            email: response.email,
          });
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
    setLoading(true);
    const resp = await res.json();
    setLoading(false);
    setRegistered(resp.registered);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("_ds_aud_tk");
    localStorage.removeItem("_ds_aud_registered");
    localStorage.removeItem("_ds_aud_db_registered");
    setUser(null);
  };
  return (
    <>
      {/* <Modal open={modalVisible} title="Loading..." actions permanent onCancel={() => setModalVisible(false)}>
      Are you sure you want to login
    </Modal> */}
      <Loading show={loading} />
      <div className={styles.navbarWrapper}>
        <a href="https://www.debsocnitdgp.in/">
          <img className={styles.logo} src={logo.src} />
        </a>
      </div>
      {user === null ? (
        <AuditionLanding onLogin={handleGoogleLogin} />
      ) : (
        <AuditionLoggedIn
          onLogout={handleLogout}
          onRegister={refresh_register_status}
          user={user}
          registered={registered}
        />
      )}
      <Footer />
    </>
  );
}
