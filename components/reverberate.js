import style from "../styles/audtion.module.scss";
import { useState } from "react";

export default function Reverberate(props) {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const name = localStorage.getItem("rev_nm");

  const image = localStorage.getItem("rev_purl");
  const [data, setData] = useState({
    email: localStorage.getItem("rev_email"),
    name: "",
    number: "",
    roll_no: "",
    hallno: "",
    section: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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

    const res = await fetch(process.env.NEXT_PUBLIC_REG_REV, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp = await res.json();
    props.refresh()

    setLoading(false);
    setData({
      email: "",
      name: "",
      number: "",
      roll_no: "",
      section: "",
      hallno: ""
    });
  };
  return (
      <div className={style.formWrap}>
        <img src={image} alt="" className={style.profileImage} />
        <div className={style.name}>Hi, {name}</div>
        {!props.registered ? (
          <>
            <div>
              *Do not refresh or change the page while typing the answers.
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Team Name</div>
              {/* <div style={{ marginTop: 8, marginLeft: 8, fontWeight: 700 }}>
                This is a team event. You can make a team of 3-5 people. Every
                team member will have to register seperately, just keep the team
                names same.
              </div>
              <div style={{ margin: 8, color: "#4caf50", fontWeight: 700 }}>
                If you don&apos;t have a team, you can register individually as
                well. We will get you a team later on.
              </div> */}
              <input
                type="text"
                value={data.teamname}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, teamname: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 1 Name</div>
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
            {/* <div className={style.inputGrp}>
              <div className={style.question}>Section</div>
              <input
                type="text"
                value={data.m1section}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, section: e.target.value });
                }}
              />
            </div> */}
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
              <div className={style.question}>Member 2 Name</div>
              <input
                type="text"
                value={data.name2}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, name2: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 2 Phone No</div>
              <input
                type="text"
                value={data.number2}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, number2: e.target.value });
                }}
              />
            </div>{" "}
            <div className={style.inputGrp}>
              <div className={style.question}>Member 2 Roll No.</div>
              <input
                type="text"
                value={data.roll_no2}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, roll_no2: e.target.value });
                }}
              />
            </div>
            {/* <div className={style.inputGrp}>
              <div className={style.question}>Member 2 Section</div>
              <input
                type="text"
                value={data.section2}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, section2: e.target.value });
                }}
              />
            </div> */}
            <div className={style.inputGrp}>
              <div className={style.question}>Member 2 Hall No.</div>
              <input
                type="text"
                value={data.hallno2}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, hallno2: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 3 Name</div>
              <input
                type="text"
                value={data.name3}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, name3: e.target.value });
                }}
              />
            </div>
            <div className={style.inputGrp}>
              <div className={style.question}>Member 3 Phone No</div>
              <input
                type="text"
                value={data.number3}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, number3: e.target.value });
                }}
              />
            </div>{" "}
            <div className={style.inputGrp}>
              <div className={style.question}>Member 3 Roll No.</div>
              <input
                type="text"
                value={data.roll_no3}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, roll_no3: e.target.value });
                }}
              />
            </div>
            {/* <div className={style.inputGrp}>
              <div className={style.question}>Member 3 Section</div>
              <input
                type="text"
                value={data.section3}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, section3: e.target.value });
                }}
              />
            </div> */}
            <div className={style.inputGrp}>
              <div className={style.question}>Member 3 Hall No.</div>
              <input
                type="text"
                value={data.hallno3}
                placeholder="Enter your answer"
                onChange={(e) => {
                  setData({ ...data, hallno3: e.target.value });
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
              You have already registered for Reverberate
            </div>
          </>
        )}
      </div>
  );
}
