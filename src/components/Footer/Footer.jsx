import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../shared/icon/Logo";
import Fasebook from "../../shared/icon/Fasebook";
import Instagram from "../../shared/icon/Instagram";
import MapLink from "../MapLink/MapLink";

import { Link as ScrollLink } from "react-scroll";
import Up from "../../shared/icon/Up";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_logo_wrapper}>
        <Link>
          <Logo />
        </Link>

        <ScrollLink
          to="#"
          smooth={true}
          duration={500}
          className={styles.scroll_link}
        >
          <span className={styles.arrowWrapper}>
            <Up />
          </span>
        </ScrollLink>
      </div>

      <div className={styles.footer_social}>
        <div className={styles.social_wrapper}>
          <Fasebook />
        </div>
        <div className={styles.social_wrapper}>
          <Instagram />
        </div>
      </div>

      <div className={styles.info_wrapper}>
        <div className={styles.map_wrapper}>
          <MapLink />
        </div>
        <div className={styles.mail_wrapper}>
          <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        </div>
        <p className={styles.copy}>
          ecosolution<span>&copy;</span> 2023
        </p>
      </div>
    </section>
  );
};

export default Footer;
