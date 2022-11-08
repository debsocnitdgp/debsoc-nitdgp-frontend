import styles from "../styles/kyc.module.scss";
import MainGate from "../public/Images/MAINGATE.png";
import NAB from "../public/Images/NAB.png";
import MAB from "../public/Images/MAB.png";
import debsoclogo from "../public/kyc/1/ds-logo.png";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

const Advert = () => (
  <div className={styles.advert}>
    <ul className={styles.circles}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <div className={styles.logos}>
      <img src={debsoclogo.src} alt="" />
      <span>The Debating Society</span>
    </div>
    <div className={styles.content}>
      Some great and catchy Line About DebSocSome great and catchy Line About
      DebSoc
    </div>
    <Link href="/">
      <button className={styles.button}>Visit Now</button>
    </Link>
  </div>
);

export default function Audition() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const images = [MainGate, NAB, MAB];
    const loaders = {};
    for (var i = 0; i < images.length; i++) {
      loaders[images[i].src] = false;
      const img = new Image();
      img.setAttribute("src", images[i].src);
      img.addEventListener("load", (ev) => {
        loaders[ev.target.getAttribute("src")] = true;
        if (Object.values(loaders).indexOf(false) === -1) {
          setLoaded(true);
        }
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Know Your Campus</title>
      </Head>
      <div className={styles.container}>
        {loaded ? (
          <>
            {" "}
            <img
              src={MainGate.src}
              alt=""
              id="main-gate"
              className={styles.image}
            />
            <Advert />
            <img src={NAB.src} alt="" id="nab" className={styles.image} />
            <Advert />
            <img src={MAB.src} alt="" id="mab" className={styles.image} />
            <Advert />
          </>
        ) : (
          <div className={styles.loader}>
            <h1>Loading</h1>
            <div className={styles.loaderOutside}>
              <div className={styles.loaderContainer}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
