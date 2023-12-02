import React from "react";
import { Link as ScrollLink } from "react-scroll";

import styles from "./Main.module.scss";
import ArrowRight from "../../shared/icon/ArrowRight";
import MapLink from "../MapLink/MapLink";
import ResponseImage from "../ResponseImage/ResponseImage";

const Main = () => {
  return (
    <section className={styles.main} id="main">
      <div className={styles.content_wrapper}>
        <h1 className={styles.title}>RENEWABLE ENERGY For any task</h1>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>

          <ScrollLink
            to="cases"
            smooth={true}
            duration={500}
            className={styles.scroll_link}
          >
            Learn more
            <span className={styles.arrowWrapper}>
              <ArrowRight />
            </span>
          </ScrollLink>
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
      <ResponseImage />
    </section>
  );
};

export default Main;
