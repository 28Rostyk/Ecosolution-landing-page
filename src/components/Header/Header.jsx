import React from "react";

import styles from "./Header.module.scss";
import Logo from "../../shared/icon/Logo.jsx";
import { Link } from "react-router-dom";
import Menu from "../../shared/icon/Menu.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_wrapper}>
        <Link>
          <Logo />
        </Link>
      </div>

      <button className={styles.burger_btn}>
        <Menu />
      </button>
    </header>
  );
};

export default Header;
