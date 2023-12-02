import React from "react";
import styles from "./Contact.module.scss";
import Phone from "../../shared/icon/Phone";
import Mail from "../../shared/icon/Mail";
import MapLink from "../MapLink/MapLink";
import Map from "../../shared/icon/Map";
import Fasebook from "../../shared/icon/Fasebook";
import Instagram from "../../shared/icon/Instagram";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.contact_title}>Contact us</h2>
      <div className={styles.contact_container}>
        <ul className={styles.contact_list}>
          <li className={styles.contact_list_item}>
            <p className={styles.text}>Phone:</p>
            <div className={styles.wrapper}>
              <Phone />
              <a className={styles.phone} href="tel:380981234567">
                38 (098) 12 34 567
              </a>
            </div>

            <div className={styles.wrapper}>
              <Phone />
              <a className={styles.phone} href="tel:380981234567">
                38 (098) 12 34 567
              </a>
            </div>
          </li>
          <li className={styles.contact_list_item}>
            <p className={styles.text}>E-mail:</p>
            <div className={styles.wrapper}>
              <Mail />
              <a className={styles.mail} href="mailto:office@ecosolution.com">
                office@ecosolution.com
              </a>
            </div>
          </li>
          <li className={styles.contact_list_item}>
            <p className={styles.text}>Address:</p>
            <div className={styles.wrapper}>
              <Map />
              <MapLink />
            </div>
          </li>
          <li className={styles.contact_list_item}>
            <p className={styles.text}>Social Networks:</p>
            <div className={styles.wrapper}>
              <div className={styles.social_wrapper}>
                <Fasebook />
              </div>
              <div className={styles.social_wrapper}>
                <Instagram />
              </div>
            </div>
          </li>
        </ul>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
