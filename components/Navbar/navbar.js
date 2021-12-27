import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Link from "next/link";

import styles from "./navbar.module.scss";
import Sidebar from "./sidebar";
import Backdrop from "./backdrop";

function Navbar({ page }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset === 0 ? setTop(false) : setTop(true);
    };
  });

  const drawerOpenHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const backdropClickHandler = () => {
    setSidebarOpen(false);
  };
  return (
    <div className={`${styles.header} ${top ? styles.navShadow : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <div className={`${styles.debsoc}`}>DEBSOC</div>
        </div>
        <div className={styles.headerRight}>
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
          </div>

          <div className={styles.drawerOpener} onClick={drawerOpenHandler}>
            <img src="Images/navIcon.png" alt="navbar icon" />
          </div>
          {sidebarOpen ? <Sidebar state={true} closeHandler={backdropClickHandler}/> : <Sidebar state={false} />}
          {sidebarOpen ? (
            <Backdrop closeHandler={backdropClickHandler} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  page: PropTypes.string,
};

export default Navbar;
