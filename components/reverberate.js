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
