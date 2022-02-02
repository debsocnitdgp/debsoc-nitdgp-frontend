import styles from "../components/About/about.module.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import style from "../styles/audtion.module.scss";
import { useState } from "react";

export default function Audition() {
  useState(() => {
    if (!localStorage.getItem("tk") || localStorage.getItem("tk") === "") {
      window.location.href = "/auditionhome";
    }
  }, []);

  const subm = localStorage.getItem("sub");
  const [submit, setSubmit] = useState(subm);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const name = localStorage.getItem("nm");
  const image = localStorage.getItem("purl");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    regno: "",
    year: "",
    clubpref: "",
    rolepref: "",
    q1ans: "",
    q2ans: "",
    q3ans: "",
    q4ans: "",
    q5ans: "",
    q6ans: "",
    q7ans: "",
    q8ans: "",
    q9ans: "",
    q10ans: "",
  });

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("tk");
    localStorage.removeItem("sub");
    window.location.href = "/auditionhome";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    setLoading(true);
    await sleep(2000);
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] === "") {
          setMsg("Please fill all the answers");
          setLoading(false);
          return;
        }
      }
    }
    setMsg("");

    const tkn = localStorage.getItem("tk");
    const res = await fetch(
      "https://debsoc-audition-backend.herokuapp.com/auth/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tkn}`,
        },
        body: JSON.stringify(data),
      }
    );
    const resp = await res.json();
    console.log(resp);
    localStorage.setItem("sub", "" + resp.submit);

    setLoading(false);
    setData({
      name: "",
      email: "",
      phone: "",
      branch: "",
      regno: "",
      year: "",
      clubpref: "",
      rolepref: "",
      q1ans: "",
      q2ans: "",
      q3ans: "",
      q4ans: "",
      q5ans: "",
      q6ans: "",
      q7ans: "",
      q8ans: "",
      q9ans: "",
      q10ans: "",
    });
    setSubmit("" + resp.submit);
  };
  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>JOIN US</div>
          <div className={styles.head2}>AUDITIONS &apos;22</div>
        </div>
        <div className={styles.content}>
          Being a club that believes in coherence and clarity, we relish a
          healthy discussion on any topic under the sun. But that's not all.
          we've got a plethora of events covering every possible field as we
          believe in exploring and learning by experience. We, the Debating
          Society, proudly present to you, Auditions 2022. We are excited to
          join forces with the chosen few to create the dream team.
        </div>
      </div>
      <div className={style.formWrap}>
        <img src={image} alt="" className={style.profileImage} />
        <div className={style.name}>Hi, {name}</div>
        {submit && submit === "false" ? (
          <>
            <div>
              *Do not refresh or change the page while typing the answers.
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Q1. Full Name</div>
              <input
                type="text"
                value={data.name}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Q2. Enter Email ID</div>
              <input
                type="text"
                value={data.email}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Q3. Phone Number (Whatsapp)</div>
              <input
                type="text"
                value={data.phone}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, phone: e.target.value });
                }}
              />
            </div>{" "}
            <div className={style.inputGrp}>
              <div className={style.question}>Q4. Your Branch</div>
              <input
                type="text"
                value={data.branch}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, branch: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Q4. Registration Number</div>
              <input
                type="text"
                value={data.regno}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, regno: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Q5. Year of Study</div>
              <input
                type="text"
                value={data.year}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, year: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q6. Club preference (in order 1 2 3 ...)
              </div>
              <input
                type="text"
                value={data.clubpref}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, clubpref: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q7. Role preference (eg- 1.Debating 2.Content Writing 3.Event
                Management 4.Video Editing 5.Web Development 6.Graphic Designing
                )
              </div>
              <textarea
                type="text"
                value={data.rolepref}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, rolepref: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Q8. Are you in any club yet?</div>
              <textarea
                type="text"
                value={data.q1ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q1ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q9. How strongly do you want to join debsoc? What do you think
                will change after joining debsoc and what are your expectations?
              </div>
              <textarea
                type="text"
                value={data.q2ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q2ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q10. In the backdrop of the online scenario, what initiatives
                will you take to ensure that the desired amount of time is
                devoted to bonding among your club year mates?
              </div>
              <textarea
                type="text"
                value={data.q3ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q3ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q11. Where would you rate yourself on a scale of 10 in, and why
                in the following: Hardwork, Ego, Disciplined, Confidence,
                Creativity, Time management, Understanding others(empathy)
              </div>
              <textarea
                type="text"
                value={data.q4ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q4ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q12. What qualities do you admire most about yourself?
              </div>
              <textarea
                type="text"
                value={data.q5ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q5ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q13. Where will you be standing at a club party?
              </div>
              <textarea
                type="text"
                value={data.q6ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q6ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q14. What are the 10 things you could do with a pencil other
                than writing?
              </div>
              <textarea
                type="text"
                value={data.q7ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q7ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q15. What will you do if you feel strongly about an idea but the
                club decides against it?
              </div>
              <textarea
                type="text"
                value={data.q8ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q8ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q16. If you are pretty sick but the club has an important event
                coming up this week what would you do?
              </div>
              <textarea
                type="text"
                value={data.q9ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q9ans: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>
                Q17. What&apos;s your personal theme song?
              </div>
              <textarea
                type="text"
                value={data.q10ans}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, q10ans: e.target.value });
                }}
              />
            </div>
            {loading && (
              <div className={style.loading}>
                Hold on! We are submitting your responses...
              </div>
            )}
            {msg && <div className={style.msg}>{msg}</div>}
            <button
              className={style.bigButton}
              onClick={handleSubmit}
              disabled={loading}
            >
              SUBMIT RESPONSES
            </button>
            <br />
            <button className={style.bigButton} onClick={handleLogout}>
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <div className={style.submitted}>
              You have submitted the response.
            </div>
            <button className={style.bigButton} onClick={handleLogout}>
              LOGOUT
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
