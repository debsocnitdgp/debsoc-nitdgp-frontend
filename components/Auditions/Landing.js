import Button from "./Button";
import styles from "./audition.module.scss";
import { useLayoutEffect, useRef, useState } from "react";

import contentwriting from "../contentwriting.gif";
import webdev from "../webdev.gif";
import videoedit from "../videoedit.gif";
import debating from "../debating.gif";
import event from "../event.gif";
import work from "../work.jpg";
import group from "../group.jpg";
import party from "../party.jpg";
import all from "../all.jpg"
// rotate(${
//   Math.floor(Math.random() * 30 + 10) * (Math.random() > 0.5 ? -1 : 1)
// }deg
function WhyDSCard({ src, text, rotate }) {
  if (window.innerWidth < 700) {
    rotate = { x: 0, y: 0 };
  }
  return (
    <div
      className={styles.whyCard}
      style={{
        transform: ` perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,

        transformStyle: "preserve-3d",
      }}
    >
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
  const ref_whyCards = useRef(null);
  const [ratio, setRatio] = useState(0);
  useLayoutEffect(() => {
    ref.current.style.top = window.innerHeight - 60 + "px";
    const onScroll = (evt) => {
      var ratio = window.scrollY / window.innerHeight;
      setRatio(ratio);
      if (ratio >= 3.5) {
        return;
      }
      if (ratio >= 2.5) {
        ratio = 3.5 - ratio;
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
        ref_whyCards.current.style.opacity = ratio;
        ref_whyCards.current.style.top =
          (window.innerHeight * (ratio - 1.5)) / 2 + "px";
      } else if (ratio >= 1) {
        ref.current.style.width = "100vw";
        ref.current.style.height = "100vh";
        ref.current.style.top = window.innerHeight / 2 + "px";
        ref.current.style.borderRadius = 0;
        ref.current.style.left = 0;
        ref.current.style.transform = `translateX(0px) translateY(-50%)`;
        ref2.current.style.opacity = 1;
        ref_whyCards.current.style.opacity = ratio - 1;
        ref_whyCards.current.style.top =
          window.innerHeight / 2 -
          (window.innerHeight * (ratio - 1)) / 2 +
          "px";
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
          <h1>Why DEBSOC?</h1>
          {/* <p>
              cbery oiyggeor vpqi3grovy evpigr oergf qhefoqi3 egfygf efq gfo
              qeyug oegy rfq efiqgeir ervgoeg rig uyer gaheroibeor eugigrvwerioh
            </p> */}
          <div className={styles.imageGallery} ref={ref_whyCards}>
            <div className={styles.imageGalleryRow}>
              <WhyDSCard
                src={group.src}
                text="We’re a group of "
                rotate={{ x: ratio > 1 ? 15 * (ratio - 1) : 15, y: 15 }}
              />
              <WhyDSCard
                src={work.src}
                text="creative people"
                rotate={{ x: ratio > 1 ? 15 * (ratio - 1) : 15, y: -15 }}
              />
            </div>
            <div className={styles.imageGalleryRow}>
              <WhyDSCard
                src={all.src}
                text=" who do all the"
                rotate={{ x: ratio > 1 ? -15 * (ratio - 1) : -15, y: 15 }}
              />
              <WhyDSCard
                src={party.src}
                text=" fun and entertainment"
                rotate={{ x: ratio > 1 ? -15 * (ratio - 1) : -15, y: -15 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
      <h1>Roles we recruit for</h1>
      <div className={styles.card}>
        <div className={styles.section3}>
          <img className={styles.img2} src={debating.src} />
          <h1 className={styles.celldiv}>Debating</h1>
        </div>
        <div className={styles.section3}>
          <img className={styles.img1} src={webdev.src} />
          <h1 className={styles.celldiv}>Web D</h1>
        </div>
        <div className={styles.section3}>
          <img className={styles.img1} src={contentwriting.src} />
          <h1 className={styles.celldiv}>Content</h1>
        </div>

        <div className={styles.section3}>
          <img className={styles.img2} src={videoedit.src} />
          <h1 className={styles.celldiv}>Graphic & Video</h1>
        </div>
        <div className={styles.section3}>
          <img className={styles.img2} src={event.src} />
          <h1 className={styles.celldiv}>Event Management </h1>
        </div>
      </div>
    </div>
  );
}



export default function AuditionLanding({ onLogin }) {
  return (
    <div className={`${styles.container} ${styles.fixed}`}>
      <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
        <h1>AUDITIONS</h1>
        <h1>2023</h1>
        <p className={styles.line}>
          Some great one liner about debatying society to get everyone hooked
        </p>
        <Button onClick={onLogin}>Register Now!</Button>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      
    </div>
  );
}
