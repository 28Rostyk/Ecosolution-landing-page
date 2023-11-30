import React from "react";
import firstMediumImage from "../../images/wind-farms-fields 1.jpg";
import firstLargeImage from "../../images/wind-farms-fields-desktop.jpg";
import secondMediumImage from "../../images/man-worker-firld-by-solar-panels 1.jpg";
import secondLargeImage from "../../images/man-worker-firld-by-solar-panels-desktop.jpg";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>Main values of our company</h2>
        <p className={styles.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>
      <ul className={`${styles.values_wrapper} ${styles.first_row}`}>
        <li className={styles.value_cart}>
          <p className={styles.value_openness}>Openness</p>
          <p className={styles.value_text}>
            to the world, people, new ideas and projects
          </p>
        </li>

        <li className={styles.value_cart}>
          <p className={styles.value_responsibility}>Responsibility</p>
          <p className={styles.value_text}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </li>

        <li className={styles.value_cart_img}>
          <picture>
            <source media="(max-width: 1440px)" srcSet={firstMediumImage} />
            <source media="(min-width: 1440px)" srcSet={firstLargeImage} />
            <img
              src={firstMediumImage} // Основне зображення для пристроїв з невеликим екраном
              alt="Wind turbine"
            />
          </picture>
        </li>
      </ul>
      <ul className={`${styles.values_wrapper} ${styles.second_row}`}>
        <li className={styles.value_cart_img}>
          <picture>
            <source media="(max-width: 1440px)" srcSet={secondMediumImage} />
            <source media="(min-width: 1440px)" srcSet={secondLargeImage} />
            <img
              src={secondMediumImage} // Основне зображення для пристроїв з невеликим екраном
              alt="Wind turbine"
            />
          </picture>
        </li>

        <li className={styles.value_cart}>
          <p className={styles.value_innovation}>Innovation</p>
          <p className={styles.value_text}>
            we use the latest technology to implement non-standard solutions
          </p>
        </li>

        <li className={styles.value_cart}>
          <p className={styles.value_quality}>Quality</p>
          <p className={styles.value_text}>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
