import { createRef, useEffect, useLayoutEffect } from "react";
import Button from "./Button";
import styles from "./audition.module.scss"

export default function Modal(props) {
    const ref = createRef(null)

    useLayoutEffect(() => {
        ref.current.addEventListener('click', evt => {
            if(Object.keys(props).indexOf("permanent") <= -1) {
                props.onCancel && props.onCancel()
            }
        })
    })
  return (
    <div className={`${styles.modalWrapper} ${props.open ? styles.modalOpen : styles.modalClosed}`} ref={ref}>
      <div className={styles.modalBody}>
        {props.title && <h1>{props.title}</h1>}
        {props.children && (
          <div className={styles.modalContent}>{props.children}</div>
        )}
        {props.actions && (
          <div className={styles.modalActions}>
            <Button secondary onClick={props.onCancel}>Back to Home</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Loading({ show }) {
    return (
        <Modal open={show} permanent title="Loading">
            <div className={styles.loader}>
                <span style={{animationDelay: '0s'}}></span>
                <span style={{animationDelay: '0.2s'}}></span>
                <span style={{animationDelay: '0.4s'}}></span>
                <span style={{animationDelay: '0.6s'}}></span>
            </div>
        </Modal>
      );
}