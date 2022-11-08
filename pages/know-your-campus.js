import styles from "../styles/kyc.module.scss";
import MainGate from "../public/kyc/main-gate.webp";
import NAB from "../public/kyc/nab.webp";
import MAB from "../public/kyc/mab.webp";
import DurgaMandap from "../public/kyc/durga-mandap.webp";
import Hall14 from "../public/kyc/hall-14.webp";
import Nescafe from "../public/kyc/nescafe.webp";
import Ovals from "../public/kyc/ovals.webp";
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
  const images = [
    [MainGate, "main-gate"],
    [MAB, "mab"],
    [NAB, "nab"],
    [Ovals, "ovals"],
    [Nescafe, "nescafe"],
    [Hall14, "mu"],
    [DurgaMandap, "durgamandap"],
  ];
  useEffect(() => {
    const loaders = {};
    for (var i = 0; i < images.length; i++) {
      loaders[images[i][0].src] = false;
      const img = new Image();
      img.setAttribute("src", images[i][0].src);
      img.addEventListener("load", (ev) => {
        loaders[ev.target.getAttribute("src")] = true;
        if (Object.values(loaders).indexOf(false) === -1) {
          setLoaded(true);
          if (window.location.hash !== "") {
            setTimeout(() => {
              const elem = document.querySelector(window.location.hash);
              elem && window.scrollTo(0, elem.getBoundingClientRect().top);
            }, 300);
          }
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
            {images.map((elem, index) => {
              console.log("loaded");
              return (
                <>
                  <img
                    src={elem[0].src}
                    alt=""
                    id={elem[1]}
                    className={styles.image}
                  />
                  <Advert />
                </>
              );
            })}
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
