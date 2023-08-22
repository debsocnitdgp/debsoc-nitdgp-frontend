import styles from "../styles/kyc.module.scss";
import MainGate from "../public/kyc/main-gate.webp";
import NAB from "../public/kyc/nab.webp";
import MAB from "../public/kyc/mab.webp";
import DurgaMandap from "../public/kyc/durga-mandap.webp";
import Hall14 from "../public/kyc/hall-14.webp";
import Nescafe from "../public/kyc/nescafe.webp";
import Ovals from "../public/kyc/ovals.webp";
import debsoclogo from "../public/kyc/1/ds-logo.webp";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";

const Advert = ({ content, link, linkText }) => {
  content = content || "To know more about us, visit our website";
  link = link || "/";
  linkText = linkText || "Visit Now";
  return (
    <div className={styles.advert}>
      <div className={styles.logos}>
        <img src={debsoclogo.src} alt="" />
        <span>The Debating Society</span>
      </div>
      <div className={styles.content}>{content}</div>
      <Link href={link}>
        <button className={styles.button}>{linkText}</button>
      </Link>
      <ul className={styles.circles}>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
};

const Marquee = ({ children, id }) => (
  <div id={id} className={styles.marquee}>
    <span>{children}</span>
  </div>
);

export default function Audition() {
  const [loaded, setLoaded] = useState(false);
  const images = [
    [MainGate, "main-gate", "Main Gate, Lords, Jhoops         "],
    [MAB, "mab", "Main Academic Building         "],
    [NAB, "nab", "New Academic Building         "],
    [Ovals, "ovals", "Ovals and Wonders         "],
    [Nescafe, "nescafe", "nescafe, chandu's and biotech department         "],
    [Hall14, "mu", "Hall 14, techno and medical unit         "],
    [
      DurgaMandap,
      "durgamandap",
      "durgamandap, girls hostels, duck pond         ",
    ],
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
              const observer = new IntersectionObserver((entries) => {
                elem.classList.toggle(
                  styles.fadeInNow,
                  entries[0].isIntersecting
                );
              });

              observer.observe(elem);
            }, 500);
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
      <div className={styles.navbar2}>
        <Navbar />
      </div>
      <div className={styles.container}>
        {loaded ? (
          <>
            <div className={styles.navbar}>
              <img src={debsoclogo.src} />
              <h1>The Debating Society</h1>
            </div>
            {images.map((elem, index) => {
              return (
                <>
                  <Marquee id={elem[1]}>{elem[2].repeat(8)}</Marquee>
                  <img src={elem[0].src} alt="" className={styles.image} />
                  {index % 2 === 0 ? (
                    <Advert
                      content="The biggest debating festival of entire eastern India - Vistaar - is organised by us"
                      link="https://vistaar.debsocnitdgp.in/"
                    />
                  ) : (
                    <Advert />
                  )}
                </>
              );
            })}

            <div className={styles.footer}>
              <Footer />
            </div>
          </>
        ) : (
          <>
            <div
              className={styles.navbar}
              style={{ position: "fixed", top: 0 }}
            >
              <img src={debsoclogo.src} />
              <h1>The Debating Society</h1>
            </div>
            <div className={styles.loader}>
              <h1>Loading</h1>
              <div className={styles.loaderOutside}>
                <div className={styles.loaderContainer}></div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
