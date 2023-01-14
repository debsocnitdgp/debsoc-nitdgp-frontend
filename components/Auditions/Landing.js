import Button from "./Button";
import styles from "./audition.module.scss";
import { useLayoutEffect, useRef, useState } from "react";

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
    window.addEventListener("scroll", (evt) => {
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
    });
  }, []);
  return (
    <div className={styles.section2}>
      <div className={styles.ball} ref={ref}>
        <div className={styles.content} ref={ref2}>
          <h1>Why DEBSOC?</h1>
          <p>
            The Debating Society, NIT Durgapur, hosts some of the biggest
            debating events in the eastern circuit. Over the years, we have
            built a platform for talented and inquisitive students to voice
            their opinions. We aim to promote the culture of debating on campus
            and help encourage budding public speakers to overcome their fear
            and express themselves freely. We stay on par in the technical realm
            too by emphasizing the use of technology in our practices.
          </p>
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

export default function AuditionLanding() {
  return (
    <div className={`${styles.container} ${styles.fixed}`}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
