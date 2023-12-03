import React from "react";
import { Link as ScrollLink } from "react-scroll";
import ArrowDown from "../icon/ArrowDown";
import styles from "./BtnGetTouch.module.scss";

const BtnGetTouch = ({ faq }) => {
  console.log(faq);
  return (
    <ScrollLink
      to="contact"
      smooth={true}
      duration={2000}
      className={faq ? `${styles.get_touch_faq}` : `${styles.get_touch}`}
    >
      Get in touch
      <div className={styles.touch}>
        <ArrowDown />
      </div>
    </ScrollLink>
  );
};

export default BtnGetTouch;
