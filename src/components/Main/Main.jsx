import React from "react";
import { Link as ScrollLink } from "react-scroll";

import styles from "./Main.module.scss";
import ArrowRight from "../../shared/icon/ArrowRight";

const Main = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>RENEWABLE ENERGY For any task</h1>
      <p className={styles.text}>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>

      <ScrollLink
        to="#"
        smooth={true}
        duration={500}
        className={styles.scroll_link}
      >
        Learn more
        <span className={styles.arrowWrapper}>
          <ArrowRight />
        </span>
      </ScrollLink>
    </section>
  );
};

export default Main;
