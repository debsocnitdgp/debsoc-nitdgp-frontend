import styles from "../components/About/about.module.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import style from "../styles/audtion.module.scss";
import { useState } from "react";

export default function Audition() {
  useState(() => {
    if (!localStorage.getItem("tk") || localStorage.getItem("tk") === "") {
      window.location.href = "/takedebait";
    }
  }, []);

  const regis = localStorage.getItem("registered");
  const [registered, setRegistered] = useState(regis);
  console.log(registered)
  console.log('' + registered == 'false')
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const name = localStorage.getItem("nm");

  const image = localStorage.getItem("purl");
  console.log(image)
  const [data, setData] = useState({
    team_name: "",
    email: localStorage.getItem("email"),
    member_1_name: "",
    member_1_number: "",
    member_2_name: "",
    member_2_number: "",
    member_3_name: "",
    member_3_number: "",
    member_4_name: "",
    member_4_number: "",
  });

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("tk");
    localStorage.removeItem("registered");
    window.location.href = "/takedebait";
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

 
    const res = await fetch(process.env.NEXT_PUBLIC_REG, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp = await res.json();
    console.log(resp);
    localStorage.setItem("registered", '' + resp.success);
    setRegistered(resp.success)

    setLoading(false);
    setData({
      team_name: "",
    email: "",
    member_1_name: "",
    member_1_number: "",
    member_2_name: "",
    member_2_number: "",
    member_3_name: "",
    member_3_number: "",
    member_4_name: "",
    member_4_number: "",
    });
    setRegistered(resp.success);
  };
  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>REGISTER</div>
          <div className={styles.head2}>TAKE DEBAIT 4.0</div>
        </div>
        <div className={styles.content}>
          {/* Being a club that believes in coherence and clarity, we relish a
          healthy discussion on any topic under the sun. But that&apos;s not
          all. we&apos;ve got a plethora of events covering every possible field
          as we believe in exploring and learning by experience. We, the
          Debating Society, proudly present to you, Auditions 2022. We are
          excited to join forces with the chosen few to create the dream team. */}
          An event packed with mystery and rife with danger, teams are assigned characters in a murder mystery plot.
          Each team works to find out who the killer is, while also defending themselves from suspicion. 
          Teams are given clues every round to help them get to the bottom of the mystery, 
          as they are simultaneously led astray by the false constructive of the other teams.
        </div>
      </div>
      <div className={style.formWrap}>
        <img src={image} alt="" className={style.profileImage} />
        <div className={style.name}>Hi, {name}</div>
        { registered == 'false' ? (
          <>
            <div>
              *Do not refresh or change the page while typing the answers.
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Team Name</div>
              <input
                type="text"
                value={data.team_name}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, team_name: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 1: Name</div>
              <input
                type="text"
                value={data.member_1_name}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, member_1_name: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 1: Phone No</div>
              <input
                type="text"
                value={data.member_1_number}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, member_1_number: e.target.value });
                }}
              />
            </div>{" "}
            <div className={style.inputGrp}>
              <div className={style.question}>Member 2: Name</div>
              <input
                type="text"
                value={data.member_2_name}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, member_2_name: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 2: Phone no</div>
              <input
                type="text"
                value={data.member_2_number}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, member_2_number: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 3: Name</div>
              <input
                type="text"
                value={data.member_3_name}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, member_3_name: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 3: Phone no</div>
              <input
                type="text"
                value={data.member_3_number}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, member_3_number: e.target.value });
                }}
              />
            </div>

            <div className={style.inputGrp}>
              <div className={style.question}>Member 4: Name</div>
              <input
                type="text"
                value={data.member_4_name}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, member_4_name: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 4: Phone No</div>
              <input
                type="text"
                value={data.member_4_number}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, member_4_number: e.target.value });
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
