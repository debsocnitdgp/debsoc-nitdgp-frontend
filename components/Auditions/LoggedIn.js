import FullPage from "@fullpage/react-fullpage";
import { createRef, useEffect, useState } from "react";
import styles from "./audition.module.scss";
import Button from "./Button";

// function Roles({ refs }) {
//   const [selected, setSelected] = useState([]);
//   const toggle = (id) => {
//     const index = selected.indexOf(id);
//     const lbl = selected.slice();
//     if (index > -1) {
//       lbl.splice(index, 1);
//     } else {
//       lbl.push(id);
//     }
//     setSelected(lbl);
//   };
//   return (
//     <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
//       <h3>01</h3>
//       <form className={styles.form}>
//         <div className={styles.inputGroup}>
//           <div className={styles.questionText}>
//             What roles would you like to apply for?
//             <br />
//             (You can select any number of them)
//           </div>
//           <div className={styles.rolePicker}>
//             <div
//               className={`${styles.rolesChoice} ${
//                 selected.indexOf("debating") > -1 ? styles.selected : ""
//               }`}
//               onClick={() => toggle("debating")}
//             >
//               Debating
//             </div>
//             <div
//               className={`${styles.rolesChoice} ${
//                 selected.indexOf("event_management") > -1 ? styles.selected : ""
//               }`}
//               onClick={() => toggle("event_management")}
//             >
//               Event Management
//             </div>
//             <div
//               className={`${styles.rolesChoice} ${
//                 selected.indexOf("gfx") > -1 ? styles.selected : ""
//               }`}
//               onClick={() => toggle("gfx")}
//             >
//               Graphics Design
//             </div>
//             <div
//               className={`${styles.rolesChoice} ${
//                 selected.indexOf("content") > -1 ? styles.selected : ""
//               }`}
//               onClick={() => toggle("content")}
//             >
//               Content Writing
//             </div>
//             <div
//               className={`${styles.rolesChoice} ${
//                 selected.indexOf("webd") > -1 ? styles.selected : ""
//               }`}
//               onClick={() => toggle("webd")}
//             >
//               Web Development
//             </div>
//           </div>
//         </div>
//       </form>
//       <div className={styles.submitButtons}>
//         <Button onClick={() => fullpageApi.moveSectionDown()}>Next</Button>
//         <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
//           Previous
//         </Button>
//       </div>
//     </div>
//   );
// }

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

  const handleSubmit = async () => {
    const data = { email: props.user.email };
    const validated = true;
    for (var i = 0; i < Object.keys(refs).length; i++) {
      const e = Object.keys(refs)[i];
      if (refs[e].current) data[e] = refs[e].current.value;
      if (
        [
          "name",
          "number",
          "rollno",
          "hallno",
          "club_preference",
          "roles_preference",
        ].indexOf(e) > -1 &&
        (data[e] === "" || data[e] === null)
      ) {
        alert("please fill the required questions");
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
        alert("you have registered successfully");
      } else {
        alert("not completed");
      }
    }
  };

  useEffect(() => {
    for (var i = 0; i < Object.keys(refs).length; i++) {
      const e = Object.keys(refs)[i];
      if (refs[e].current) {
        refs[e].current.addEventListener('change', evt => {
          const name = "_ds_audi_data_" + e
          console.log(name)
           localStorage.setItem(name, evt.target.value)
        })
      }
    }
  }, [refs]);

  useEffect(() => {
    for (var i = 0; i < Object.keys(refs).length; i++) {
      const e = Object.keys(refs)[i];
      if (refs[e].current && localStorage.getItem("_ds_audi_data_" + e)) {
          refs[e].current.value = localStorage.getItem("_ds_audi_data_" + e)
      }
    }
  })

  return (
    <FullPage
      render={({ state, fullpageApi }) => {
        return (
          <FullPage.Wrapper>
            <div className="section">
              <div
                className={`${styles.section} ${styles.section1} ${styles.centred}`}
              >
                <img className={styles.avatar} src={props.user.picture} />
                <h3>Welcome</h3>
                <h2>{props.user.name}</h2>
                <p>
                  Welcome aboard the audition process for the Debating Society!
                  <br />
                  Fill out the following form for your round 1
                </p>
                <Button onClick={() => fullpageApi.moveSectionDown()}>
                  Get started
                </Button>
              </div>
            </div>
            <div className="section">
              <div
                className={`${styles.section} ${styles.section1} ${styles.centred}`}
              >
                <h3>Personal Details</h3>
                <form className={styles.form}>
                  <div className={styles.inputGroup}>
                    <div className={styles.questionText}>Name</div>
                    <input type="text" ref={refs.name} />
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.questionText}>Phone number</div>
                    <input type="text" ref={refs.number} />
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.questionText}>
                      Full Roll No. (For example: use 22E80012 not 12)
                    </div>
                    <input type="text" ref={refs.rollno} />
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.questionText}>Hall No.</div>
                    <input type="text" ref={refs.hallno} />
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.questionText}>
                      Club preference order
                    </div>
                    <input type="text" ref={refs.club_preference} />
                  </div>
                </form>

                <div className={styles.submitButtons}>
                  <Button onClick={() => fullpageApi.moveSectionDown()}>
                    Next
                  </Button>
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                      ref={refs.club_preference}
                      placeholder="Your answer here..."
                    />
                  </div>
                </form>
                <div className={styles.submitButtons}>
                  <Button onClick={() => fullpageApi.moveSectionDown()}>
                    Next
                  </Button>
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                      Rate yourself(out of 10, 1 being lowest and 10 highest) in
                      the following:
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                      If you were given a box of markers, what would you do with
                      them that are not their traditional use.
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
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
                  <Button onClick={() => fullpageApi.moveSectionUp()} secondary>
                    Previous
                  </Button>
                </div>
              </div>
            </div>
          </FullPage.Wrapper>
        );
      }}
    />
  );
}
