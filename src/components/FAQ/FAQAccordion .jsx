import React, { useState, useRef, useEffect } from "react";
import styles from "./FAQAccordion.module.scss";
import Plus from "../../shared/icon/Plus";
import Minus from "../../shared/icon/Minus";
import BtnGetTouch from "../../shared/component/BtnGetTouch";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const accordionRef = useRef(null);

  const questions = [
    "How do wind turbines and solar panels work together in a renewable energy system?",
    "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
  ];

  const answers = [
    "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    "Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions.",
    "Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future.",
    "EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact.",
    "EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all.",
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash === "#contact") {
      handleScrollToContact();
    }
  }, []);

  return (
    <section className={styles.faq} id="faq">
      <div>
        <h2 className={styles.title}>
          Frequently Asked
          <br /> Questions
        </h2>
        <div className={styles.question} ref={accordionRef}>
          {questions.map((question, index) => (
            <div key={index} style={{ borderTop: "1px solid #97d28b" }}>
              <div
                onClick={() => handleToggle(index)}
                style={{
                  cursor: "pointer",
                  marginBottom: "16px",
                  marginTop: "16px",
                }}
              >
                <div className={styles.icon_wrapper}>
                  {openIndex !== index ? <Plus /> : <Minus />}{" "}
                  <p className={styles.question_text}>{question}</p>
                </div>
              </div>
              {openIndex === index && (
                <div
                  className={styles.answer}
                  style={{
                    marginBottom: "16px",
                    paddingLeft: "24px",
                  }}
                >
                  {answers[index]}
                </div>
              )}
            </div>
          ))}
          <div
            style={{
              cursor: "pointer",
              marginBottom: "8px",
            }}
            onClick={handleScrollToContact}
          ></div>
        </div>
      </div>
      <div className={styles.description_container}>
        <p className={styles.description}>
          Didn't find the answer to your question?{" "}
        </p>
        <div className={styles.btnWrapper}>
          <BtnGetTouch faq={true} />
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
