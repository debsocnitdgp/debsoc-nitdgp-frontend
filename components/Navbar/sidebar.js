import PropTypes from "prop-types";

import Link from "next/link";

import styles from "./Sidebar.module.scss";

function Sidebar({ state }) {
  return (
    <div className={`${styles.sidebar} ${state ? styles.open : ""}`}>
      <div className={styles.sidebarDrawer}>
        <div className={styles.menuList}>
          <div className={styles.menuListItem}>
            <Link href="#">HOME</Link>
          </div>

          <div className={styles.menuListItem}>
            <Link href="#">EVENT</Link>
          </div>

          <div className={styles.menuListItem}>
            <Link href="#">ABOUT US</Link>
          </div>

          <div className={styles.menuListItem}>
            <Link href="#">ALUMINI</Link>
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
