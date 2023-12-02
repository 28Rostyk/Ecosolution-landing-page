import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { validationSchema } from "../../../utils/validationSchema";
import ArrowRight from "../../../shared/icon/ArrowRight";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ firstName: "", email: "", phone: "", message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(
        { errors, touched } // Додаємо декларацію touched і errors тут
      ) => (
        <Form className={styles.form}>
          <div className={styles.input_wrapper}>
            <label htmlFor="firstName">* Full name:</label>
            <Field
              className={`${styles.form_input} ${styles.field} ${
                touched.firstName && errors.firstName
                  ? styles.input_invalid
                  : styles.input_valid
              }`}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John Rosie"
            />
            <ErrorMessage
              className={styles.hint}
              name="firstName"
              component="div"
            />
          </div>

          <div className={styles.input_wrapper}>
            <label htmlFor="email">* E-mail:</label>
            <Field
              className={`${styles.form_input} ${styles.field} ${
                touched.email && errors.email
                  ? styles.input_invalid
                  : styles.input_valid
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="johnrosie@gmail.com"
            />
            <ErrorMessage
              className={styles.hint}
              name="email"
              component="div"
            />
          </div>

          <div className={styles.input_wrapper}>
            <label htmlFor="phone">* Phone:</label>
            <Field
              className={`${styles.form_input} ${styles.field} ${
                touched.phone && errors.phone
                  ? styles.input_invalid
                  : styles.input_valid
              }`}
              type="tel"
              id="phone"
              name="phone"
              placeholder="380961234567"
            />
            <ErrorMessage
              className={styles.hint}
              name="phone"
              component="div"
            />
          </div>

          <div className={styles.input_wrapper}>
            <label htmlFor="message">Message:</label>
            <Field
              className={`${styles.form_input} ${styles.input_valid}`}
              as="textarea"
              id="message"
              name="message"
              rows="6"
              placeholder="Your message"
            />
          </div>

          <div className={styles.btn_wrapper}>
            <button className={styles.form_btn} type="submit">
              Send
              <span className={styles.arrowWrapper}>
                <ArrowRight />
              </span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
