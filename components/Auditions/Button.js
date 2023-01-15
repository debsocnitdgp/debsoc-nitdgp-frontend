import styles from "./audition.module.scss";

export default function Button(props) {
  return (
    // <div >
    <button
      className={`${styles.buttonWrapper} ${
        props.secondary ? styles.secondaryButton : ""
      }`}
      {...props}
    >
      {props.children}
    </button>
    // </div>
  );
}
