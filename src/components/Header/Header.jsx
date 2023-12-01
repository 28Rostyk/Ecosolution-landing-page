import React from "react";

import styles from "./Header.module.scss";
import Logo from "../../shared/icon/Logo.jsx";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Menu from "../../shared/icon/Menu.jsx";
import ArrowDown from "../../shared/icon/ArrowDown.jsx";

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

        <ScrollLink
          to="#"
          smooth={true}
          duration={500}
          className={styles.get_touch}
        >
          Get in touch
          <div className={styles.touch}>
            <ArrowDown />
          </div>
        </ScrollLink>
      </div>
    </header>
  );
};

export default Header;
