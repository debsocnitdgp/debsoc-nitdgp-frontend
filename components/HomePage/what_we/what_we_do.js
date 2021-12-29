import styles from "./what.module.scss";

export default function What() {
  return (
    <>
      <div className={styles.whatWeDo}>
        <div className={styles.col1}>
          <div className={styles.head1}>WHAT WE DO</div>
          <div className={styles.head2}>WHAT WE DO</div>
        </div>
        <div className={styles.content}>
       The Debating Society, NIT Durgapur, hosts some of the biggest debating events in the eastern circuit. Over the years, we have built a platform for talented and inquisitive students to voice their opinions. We aim to promote the culture of debating on campus and help encourage budding public speakers to overcome their fear and express themselves freely. We stay on par in the technical realm too by emphasizing the use of technology in our practices.

        </div>
        <div className={styles.col2}>
          <div className={styles.col2Wrapper}>
            <div className={styles.listItems}>
              <img src="Images/debate.png" alt="" />
              <div className={styles.head}>National Debates</div>
              <div className={styles.body}>
                The club annually organizes the Asian Parliamentary Debate, a national-level debating event that sees massive participation. Other than this, The Oxford Union Debates is also a well-received event in the eastern circuit.
              </div>
            </div>
            <div className={styles.listItems}>
              <img src="Images/workshop.png" alt="" />
              <div className={styles.head}>Speaking Workshops</div>
              <div className={styles.body}>
              As a club, we realize that public speaking may not be everyone&apos;s cup of tea. It can be a frightening experience, which is why we host workshops every year. If you have a voice, we are here to help you amplify it.
              </div>
            </div>
            <div className={styles.listItems}>
              <img src="Images/quiz.png" alt="" />
              <div className={styles.head}>Exciting Quizzes</div>
              <div className={styles.body}>
                Taking a breather from our core debating events, we also have thrilling quiz-based events that require fast thinking and a thorough knowledge of every pop culture reference out there.
              </div>
            </div>
            <div className={styles.listItems}>
              <img src="Images/events.png" alt="" />
              <div className={styles.head}>Fun Events</div>
              <div className={styles.body}>
             Even if debating is not quite your speed, we have numerous other events that let you try out debating without all its intricacies. With events like Take DeBait and IceBreaker, there is something for everyone.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
