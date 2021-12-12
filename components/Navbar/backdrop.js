import PropTypes from "prop-types";

import styles from "./Sidebar.module.scss";

function Backdrop({ closeHandler }) {
    return <div className={styles.backdrop} onClick={closeHandler}></div>;
}
Backdrop.propTypes = {
    closeHandler: PropTypes.func,
};

export default Backdrop;