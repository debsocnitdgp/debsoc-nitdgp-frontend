import styles from "./audition.module.scss"

export default function Button(props){
    return (
        <div className={styles.buttonWrapper}>
            <button>
                {props.children}
            </button>
        </div>
    )
}