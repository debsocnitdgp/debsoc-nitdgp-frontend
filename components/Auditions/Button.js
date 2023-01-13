import styles from "./audition.module.scss"

export default function Button(props){
    return (
        // <div >
            <button className={styles.buttonWrapper}>
                {props.children}
            </button>
        // </div>
    )
}