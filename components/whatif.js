import styles from "../components/About/about.module.scss";
import style from "../styles/audtion.module.scss";
import { useState } from "react";

export default function WhatIf(props) {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: localStorage.getItem("rev_email"),
    name: "",
    number: "",
    roll_no: "",
    section: "",
    hallno: "",
    teamname: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] === "" && key != "teamname") {
          setMsg("Please fill all the answers");
          setLoading(false);
          return;
        }
      }
    }
    setMsg("");

    const res = await fetch(process.env.NEXT_PUBLIC_REG_REV_DB, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp = await res.json();
    props.refresh();

    setLoading(false);
    setData({
      email: "",
      name: "",
      number: "",
      roll_no: "",
      section: "",
      hallno: "",
      teamname: "",
    });
  };
  return (
    <>
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>REGISTER</div>
          <div className={styles.heads2}>WHAT IF 2.0</div>
        </div>
        <div className={styles.contents}>
          We all know how it feels to have to present your ideas, only to find
          the right words aren&apos;t available. A public speaking workshop,
          generally conducted at the start of the academic session here helps
          you overcome all those bouts of stuttering and gives us the confidence
          boost we all require. The workshop sees massive participation every
          year, and collects a lot of positive applause as well.
        </div>
      </div>
      <div className={style.formWrap}>
        {!props.registered ? (
          <>
            <div>
              *Do not refresh or change the page while typing the answers.
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Name</div>
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
              <div className={style.question}>Phone No</div>
              <input
                type="text"
                value={data.number}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, number: e.target.value });
                }}
              />
            </div>{" "}
            <div className={style.inputGrp}>
              <div className={style.question}>Roll No.</div>
              <input
                type="text"
                value={data.roll_no}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, roll_no: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Section</div>
              <input
                type="text"
                value={data.section}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, section: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Hall No.</div>
              <input
                type="text"
                value={data.hallno}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, hallno: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Team Name</div>
              <div style={{ marginTop: 8, marginLeft: 8, fontWeight: 700 }}>
                This is a team event. You can make a team of 3-5 people. Every
                team member will have to register seperately, just keep the team
                names same.
              </div>
              <div style={{ margin: 8, color: "#4caf50", fontWeight: 700 }}>
                If you don&apos;t have a team, you can register individually as
                well. We will get you a team later on.
              </div>
              <input
                type="text"
                value={data.teamname}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, teamname: e.target.value });
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
              REGISTER
            </button>
          </>
        ) : (
          <>
            <div className={style.submitted}>
              You have already registered for What If
            </div>
          </>
        )}
      </div>
    </>
  );
}
