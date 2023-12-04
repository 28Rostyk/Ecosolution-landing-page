import React, { useState, useEffect, useRef } from "react";

import styles from "./Header.module.scss";
import Logo from "../../shared/icon/Logo.jsx";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import Menu from "../../shared/icon/Menu.jsx";
import BtnGetTouch from "../../shared/component/BtnGetTouch.jsx";
import Close from "../../shared/icon/Close.jsx";
import ArrowUpRight from "../../shared/icon/ArrowUpRight.jsx";
import FacebookWhite from "../../shared/icon/FacebookWhite.jsx";
import InstagramWhite from "../../shared/icon/InstagramWhite.jsx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrolled = scrollPosition > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Додаємо обробник події для body та html при відкритті/закритті бургер-меню
    const handleMenuToggle = () => {
      const body = document.body;
      // const html = document.documentElement;

      if (isMenuOpen) {
        body.style.overflow = "hidden"; // Заборона скролу
      } else {
        body.style.overflow = ""; // Дозвіл скролу
      }
    };

    handleMenuToggle(); // Викликаємо один раз при монтажі

    // Додаємо/видаляємо обробник події при зміні стану відкритості бургер-меню
    window.addEventListener("resize", handleMenuToggle);

    return () => {
      window.removeEventListener("resize", handleMenuToggle);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (overlayRef.current && overlayRef.current.contains(e.target)) {
      closeMenu();
    }
  };

  const headerClasses = `${styles.header} ${isScrolled ? styles.scroll : ""}`;

  return (
    <header className={headerClasses}>
      <div className={styles.logo_wrapper}>
        <Link>
          <Logo />
        </Link>
      </div>

      <div className={styles.wrapper}>
        <button className={styles.burger_btn} onClick={toggleMenu}>
          <Menu />
        </button>

        {isMenuOpen && (
          <div
            className={styles.overlay}
            onClick={handleOverlayClick}
            ref={overlayRef}
          >
            <div className={styles.menu}>
              <div className={styles.container}>
                <button className={styles.close_btn} onClick={closeMenu}>
                  <Close />
                  close
                </button>
                <ul className={styles.menu_list}>
                  <li className={styles.menu_list_item}>
                    <ScrollLink to="main" onClick={closeMenu}>
                      Main
                      <ArrowUpRight />
                    </ScrollLink>
                  </li>
                  <li className={styles.menu_list_item}>
                    <ScrollLink to="about" onClick={closeMenu}>
                      About
                      <ArrowUpRight />
                    </ScrollLink>
                  </li>
                  <li className={styles.menu_list_item}>
                    <ScrollLink to="cases" onClick={closeMenu}>
                      Cases
                      <ArrowUpRight />
                    </ScrollLink>
                  </li>
                  <li className={styles.menu_list_item}>
                    <ScrollLink to="faq" onClick={closeMenu}>
                      FAQ
                      <ArrowUpRight />
                    </ScrollLink>
                  </li>
                  <li className={styles.menu_list_item}>
                    <ScrollLink to="contact" onClick={closeMenu}>
                      Contact Us
                      <ArrowUpRight />
                    </ScrollLink>
                  </li>
                </ul>
              </div>

              <div className={styles.social}>
                <div className={styles.social_wrapper}>
                  <FacebookWhite />
                </div>
                <div className={styles.social_wrapper}>
                  <InstagramWhite />
                </div>
              </div>
            </div>
          </div>
        )}

        <BtnGetTouch />
      </div>
    </header>
  );
};

export default Header;
