import React from "react";

import styles from "./Header.module.scss";
import Logo from "../../shared/icon/Logo.jsx";
import { Link } from "react-router-dom";

import Menu from "../../shared/icon/Menu.jsx";
import BtnGetTouch from "../../shared/component/BtnGetTouch.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_wrapper}>
        <Link>
          <Logo />
        </Link>
      </div>

      <div className={styles.wrapper}>
        <button className={styles.burger_btn}>
          <Menu />
        </button>
        <BtnGetTouch />
      </div>
    </header>
  );
};

export default Header;
