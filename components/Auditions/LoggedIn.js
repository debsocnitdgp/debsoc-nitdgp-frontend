import FullPage from "@fullpage/react-fullpage";
import { createRef, useEffect, useState } from "react";
import styles from "./audition.module.scss";
import Button from "./Button";
import Modal, { Loading } from "./Modal";

export default function LoggedIn(props) {
  const refs = {
    name: createRef(null),
    number: createRef(null),
    rollno: createRef(null),
    hallno: createRef(null),
    club_preference: createRef(null),
    roles_preference: createRef(null),
    answer_1_text: createRef(null),
    answer_2_text: createRef(null),
    answer_3_text: createRef(null),
    answer_4_text: createRef(null),
    answer_5_text: createRef(null),
    answer_6_text: createRef(null),
    answer_7_text: createRef(null),
    answer_8_text: createRef(null),
    answer_9_text: createRef(null),
  };

  const [modal, setModal] = useState({
    open: false,
    children: null,
    title: null,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const data = { email: props.user.email };
    const validated = true;
    for (var i = 0; i < Object.keys(refs).length; i++) {
      const e = Object.keys(refs)[i];
      if (refs[e].current) data[e] = refs[e].current.value;
      if (data[e] === "" || data[e] === null) {
        setModal({
          open: true,
          title: "Alert",
          children: "Please fill all the answers",
          onCancel: () => {
            setModal({ open: false });
          },
          actions: false
        });
        setLoading(false);
        validated = false;
        break;
      }
    }
    if (validated) {
      const res = await fetch(process.env.NEXT_PUBLIC_REG_AUD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setLoading(false);
        setModal({
          open: true,
          title: "Success",
          children: "Your response was submitted successfully",
          actions: true,
          onCancel: () => props.goBack()
        });
        props.onRegister();
      } else {
        setModal({
          open: true,
          title: "Failed",
          children:
            "Failed to submit your responses, please refresh the page and try again",
          permanent: true,
        });
      }
    }
  };

  useEffect(() => {
    for (var i = 0; i < Object.keys(refs).length; i++) {
      const e = Object.keys(refs)[i];
      if (refs[e].current) {
        refs[e].current.addEventListener("change", (evt) => {
          const name = "_ds_audi_data_" + e;
          console.log(name);
          localStorage.setItem(name, evt.target.value);
        });
      }
    }
  }, [refs]);

  useEffect(() => {
    for (var i = 0; i < Object.keys(refs).length; i++) {
      const e = Object.keys(refs)[i];
      if (refs[e].current && localStorage.getItem("_ds_audi_data_" + e)) {
        refs[e].current.value = localStorage.getItem("_ds_audi_data_" + e);
      }
    }
  }, [refs]);

  useEffect(() => {
    if (props.registered)
      setModal({
        open: true,
        title: "You've responded",
        children:
          "Thank you for registering for auditions of the Debating Society",
          actions: true,
          onCancel: () => props.goBack()
      });
  }, [props.registered]);
  return (
    <>
      <Loading show={loading} />
      <Modal {...modal} />
      <div className={styles.backButton} onClick={() => {console.log("called");props.goBack();}}>
      </div>
      <FullPage
        render={({ state, fullpageApi }) => {
          return (
            <FullPage.Wrapper style={{ background: "#fff" }}>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <img className={styles.avatar} src={props.user.picture} />
                  <h3>Welcome</h3>
                  <h2>{props.user.name}</h2>
                  <p>
                    Welcome aboard the audition process for the Debating
                    Society!
                    <br />
                    Fill out the following form for your round 1
                  </p>
                  <Button onClick={() => fullpageApi.moveSectionDown()}>
                    Get started
                  </Button>
                </div>
              </div>
              <div className="section fp-auto-hide-responsive">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>Personal Details</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText2}>Name</div>
                      <input type="text" ref={refs.name} />
                    </div>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText2}>Phone number</div>
                      <input type="text" ref={refs.number} />
                    </div>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText2}>
                        Full Roll No. (For example: use 22E80012 not 12)
                      </div>
                      <input type="text" ref={refs.rollno} />
                    </div>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText2}>Hall No.</div>
                      <input type="text" ref={refs.hallno} />
                    </div>
                  </form>

                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>01</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        What is your club preference order?
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.club_preference}
                        placeholder="Example: Club 1, Club 2, Club 3, ..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>02</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        Pick the roles you want to apply for
                        <br />
                        (You can pick multiple) <br />
                        1. Debating <br />
                        2. Graphic Design <br />
                        3. Content Writing <br />
                        4. Web Development <br />
                        5. Event Management <br />
                        6. Video Editing
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.roles_preference}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>

              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>03</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        Rate yourself(out of 10, 1 being lowest and 10 highest)
                        in the following:
                        <br />
                        1. Confidence <br />
                        2. Creativity <br />
                        3. Team work <br />
                        4. Ego <br />
                        5. Hardworking
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_1_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>04</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        You get a wish to travel back in time, what is that one
                        mistake you want to correct?
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_2_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>05</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        Why should Shizuka choose Gian over other characters?
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_3_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>06</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        Hunter or gatherer?
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_4_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>07</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        Any advice for your previous self?
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_5_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>08</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        If you were given a box of markers, what would you do
                        with them that are not their traditional use.
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_6_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>09</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        What would you like to name your autobiography?
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_7_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>10</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        You&apos;re a new addition to a crayon box. What color
                        would you be and why?
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_8_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                      Next
                    </Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div
                  className={`${styles.section} ${styles.section1} ${styles.centred}`}
                >
                  <h3>11</h3>
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <div className={styles.questionText}>
                        What makes you believe that you are special?
                      </div>
                      <textarea
                        rows={5}
                        ref={refs.answer_9_text}
                        placeholder="Your answer here..."
                      />
                    </div>
                  </form>
                  <div className={styles.submitButtons}>
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button
                      onClick={() => fullpageApi.moveSectionUp()}
                      secondary
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>
            </FullPage.Wrapper>
          );
        }}
      />
    </>
  );
}
