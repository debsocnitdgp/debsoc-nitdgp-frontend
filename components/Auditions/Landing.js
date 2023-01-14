import Button from "./Button";
import styles from "./audition.module.scss";
import { useLayoutEffect, useRef, useState } from "react";

import contentwriting from "../contentwriting.gif";
import webdev from "../webdev.gif"
import videoedit from "../videoedit.gif"
import debating from "../debating.gif"

function WhyDSCard({ src, text }) {
  return (
    <div className={styles.whyCard}>
      <img src={src} />
      <h2>{text}</h2>
    </div>
  );
}

function Section3() {
  return (
    <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
      <h2>Ready to be the</h2>
      <h1>Next Generation?</h1>
    </div>
  );
}

function Section2() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  useLayoutEffect(() => {
    ref.current.style.top = window.innerHeight - 60 + "px";
    const onScroll = (evt) => {
      var ratio = window.scrollY / window.innerHeight;
      if (ratio >= 3) {
        return;
      }
      if (ratio >= 2) {
        ratio = 3 - ratio;
        ref.current.style.borderRadius = "48px";
        ref.current.style.width =
          ratio * window.innerWidth > 48
            ? ratio * window.innerWidth + "px"
            : "48px";
        ref.current.style.height =
          ratio * window.innerHeight > 48
            ? ratio * window.innerHeight + "px"
            : "48px";
        ref.current.style.top =
          window.innerHeight - 60 - (window.innerHeight * ratio) / 2 + "px";
        ref.current.style.left = (window.innerWidth - 48) * (1 - ratio) + "px";
        ref.current.style.transform = `translateX(${
          -24 + 24 * ratio
        }px) translateY(-${ratio * 50}%)`;
        ref2.current.style.opacity = ratio;
      } else if (ratio >= 1) {
        ref.current.style.width = "100vw";
        ref.current.style.height = "100vh";
        ref.current.style.top = window.innerHeight / 2 + "px";
        ref.current.style.borderRadius = 0;
        ref.current.style.left = 0;
        ref.current.style.transform = `translateX(0px) translateY(-50%)`;
        ref2.current.style.opacity = 1;
      } else if (ratio < 1) {
        // if (window.innerHeight < window.innerWidth) {
        ref.current.style.borderRadius = "48px";
        ref.current.style.width =
          ratio * window.innerWidth > 48
            ? ratio * window.innerWidth + "px"
            : "48px";
        ref.current.style.height =
          ratio * window.innerHeight > 48
            ? ratio * window.innerHeight + "px"
            : "48px";
        ref.current.style.top =
          window.innerHeight - 60 - (window.innerHeight * ratio) / 2 + "px";
        ref.current.style.left = 48 - 48 * ratio + "px";
        ref.current.style.transform = `translateX(${
          -24 + 24 * ratio
        }px) translateY(-${ratio * 50}%)`;
        ref2.current.style.opacity = ratio;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={styles.section2}>
      <div className={styles.ball} ref={ref}>
        <div className={styles.content} ref={ref2}>
          <div className={styles.imageGallery}>
            <WhyDSCard
              src="https://debsoc.onrender.com/media/eventPosters/fictionary.jpg"
              text="because we are the best"
            />
            <WhyDSCard
              src="https://debsoc.onrender.com/media/eventPosters/fictionary.jpg"
              text="because we are the best"
            />
          </div>
          <h1>Why DEBSOC?</h1>
          {/* <p>
              cbery oiyggeor vpqi3grovy evpigr oergf qhefoqi3 egfygf efq gfo
              qeyug oegy rfq efiqgeir ervgoeg rig uyer gaheroibeor eugigrvwerioh
            </p> */}
          <div className={styles.imageGallery}>
            <WhyDSCard
              src="https://debsoc.onrender.com/media/eventPosters/fictionary.jpg"
              text="because we are the best"
            />
            <WhyDSCard
              src="https://debsoc.onrender.com/media/eventPosters/fictionary.jpg"
              text="because we are the best"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
      <h1>AUDITIONS</h1>
      <h1>2023</h1>
      <p>Some great one liner about debatying society to get everyone hooked</p>
      <Button>Register Now!</Button>
    </div>
  );
}

function Section4() {
  return (
    <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
      <h1>Opportunities For You!</h1>
      <div className={styles.card}>
        <div className={styles.section1}>
          <img className={styles.img1} src={webdev.src} />
          <h1 className={styles.celldiv}>Web D</h1>
        </div>
        <div className={styles.section1}>
          <img className={styles.img1} src={contentwriting.src} />
          <h1 className={styles.celldiv}>Content</h1>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.section1}>
          <img className={styles.img2} src={videoedit.src} />
          <h1 className={styles.celldiv}>Graphic</h1>
        </div>
        <div className={styles.section1}>
          <img className={styles.img2} src={debating.src} />
          <h1 className={styles.celldiv}>Debating</h1>
        </div>
      </div>
    </div>
  );
}

export default function AuditionLanding() {
  return (
    <div className={`${styles.container} ${styles.fixed}`}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
