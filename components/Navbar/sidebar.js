import PropTypes from "prop-types";

import Link from "next/link";

import styles from "./Sidebar.module.scss";

function Sidebar({ state, closeHandler }) {
  return (
    <div className={`${styles.sidebar} ${state ? styles.open : ""}`}>
      <div className={styles.sidebarDrawer}>
        <div className={styles.cross}>
          <img src="Images/cross.png" alt="" onClick={closeHandler} />
        </div>
        <div className={styles.menuList}>
          <div className={styles.menuListItem}>
            <Link href="/">HOME</Link>
          </div>

          <div className={styles.menuListItem}>
            <Link href="/event">EVENT</Link>
          </div>

          <div className={styles.menuListItem}>
            <Link href="/about">ABOUT US</Link>
          </div>

          <div className={styles.menuListItem}>
            <Link href="/alumni">ALUMNI</Link>
          </div>

          <div className={styles.menuListItem}>
            <Link href="/auditionhome">AUDITION</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
Sidebar.propTypes = {
  state: PropTypes.bool,
};

export default Sidebar;
