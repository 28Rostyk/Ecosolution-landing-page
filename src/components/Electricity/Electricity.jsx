import React, { useState, useEffect } from "react";
import styles from "./Electricity.module.scss";

const Electricity = () => {
  // Отримуємо значення з локального сховища при завантаженні компоненту
  const initialCount =
    parseInt(localStorage.getItem("electricityCount"), 10) || 1134147814;
  const [electricityCount, setElectricityCount] = useState(initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Збільшуємо лічильник електроенергії на 1 кожну секунду
      setElectricityCount((prevCount) => {
        const newCount = prevCount + 1;
        // Зберігаємо нове значення в локальному сховищі
        localStorage.setItem("electricityCount", newCount.toString());
        return newCount;
      });
    }, 1000);

    // Очищаємо інтервал при розмонтажі компоненту, щоб уникнути витоку пам'яті
    return () => clearInterval(intervalId);
  }, []); // Порожній масив залежностей гарантує виконання ефекту лише один раз при монтажі

  return (
    <section className={styles.electricity}>
      <h2 className={styles.title}>Electricity we produced for all time</h2>
      <div className={styles.electricity_count_wrapper}>
        <p className={styles.electricity_count}>
          {electricityCount.toLocaleString()}
        </p>
        <p className={styles.electricity_count_text}>kWh</p>
      </div>
    </section>
  );
};

export default Electricity;
