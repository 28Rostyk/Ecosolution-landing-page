import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Імпортуємо стилі Swiper
import "swiper/css/navigation"; // Імпортуємо стилі навігації Swiper
import "swiper/css/pagination"; // Імпортуємо стилі пагінації Swiper
import styles from "./Cases.module.scss";
import PaginationArrowLeft from "../../shared/icon/PaginationArrowLeft";
import PaginationArrow from "../../shared/icon/PaginationArrow";
import ArrowUpRight from "../../shared/icon/ArrowUpRight";

import imgSlide1 from "../../images/slideSmall1.jpg";
import imgSlide1Desk from "../../images/slide1.jpg";
import imgSlide1Tablet from "../../images/slide1tablet.jpg";
import imgSlide2 from "../../images/slideSmall2.jpg";
import imgSlide2Desk from "../../images/slide2.jpg";
import imgSlide2Tablet from "../../images/slide2tablet.jpg";
import imgSlide3 from "../../images/slideSmall3.jpg";
import imgSlide3Desk from "../../images/slide3.jpg";
import imgSlide3Tablet from "../../images/slide3tablet.jpg";
import imgSlide4 from "../../images/slideІSmall4.jpg";
import imgSlide4Desk from "../../images/slide4.jpg";
import imgSlide4Tablet from "../../images/slide4tablet.jpg";
import imgSlide5 from "../../images/slideSmall5.jpg";
import imgSlide5Desk from "../../images/slide5.jpg";
import imgSlide5Tablet from "../../images/slide5tablet.jpg";
import { Link } from "react-router-dom";

const Cases = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSwiperInit = (swiper) => {
    if (swiper) {
      swiperRef.current = swiper;
      setCurrentSlide(swiper.realIndex);
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setCurrentSlide(swiperRef.current.realIndex);
    }
  };

  return (
    <section className={styles.cases} id="cases">
      <div className={styles.pagination_container}>
        <h2 className={styles.title}>Successful cases of our company</h2>
        <div className={styles.pagination}>
          <div className={styles.value_wrapper}>
            <span className={styles.current}>{`0${currentSlide + 1}`}</span>
            <span className={styles.total}>/05</span>
          </div>
          <div className={styles.pagination_wrapper}>
            <div
              className={`${styles.arrow_wrapper} ${styles.arrowLeft}`}
              onClick={handlePrevSlide}
            >
              <PaginationArrowLeft className={styles.arrow_left} />
            </div>
            <div
              className={`${styles.arrow_wrapper} ${styles.arrowRight}`}
              onClick={handleNextSlide}
            >
              <PaginationArrow />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        loop={true} // Зробити Swiper безкінечним
        navigation={{
          nextEl: `.${styles.arrowRight}`,
          prevEl: `.${styles.arrowLeft}`,
        }}
        onInit={handleSwiperInit}
        onSlideChange={handleSlideChange}
        breakpoints={{
          768: {
            slidesPerView: 2, // Показувати по два слайда на таблетці та десктопі
          },
          1280: {
            slidesPerView: 2, // Показувати по два слайда на таблетці та десктопі
          },
        }}
      >
        <SwiperSlide>
          <Link className={styles.swipe_card_wrapper}>
            <picture>
              <source media="(max-width: 768px)" srcSet={imgSlide1} />
              <source media="(max-width: 1280px)" srcSet={imgSlide1Tablet} />
              <source media="(min-width: 1280px)" srcSet={imgSlide1Desk} />
              <img src={imgSlide1} alt="Wind turbine" />
            </picture>
            <div className={styles.tumb}>
              <div className={styles.wrapper}>
                <p className={styles.tumb_text}>
                  Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
                </p>

                <div className={styles.svg_wrapper}>
                  <ArrowUpRight />
                </div>
              </div>
              <div className={styles.description_wrapper}>
                <p className={styles.description}>
                  Wind Power for auto field irrigation
                </p>
                <p className={styles.description}>July 2023</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className={styles.swipe_card_wrapper}>
            <picture>
              <source media="(max-width: 768px)" srcSet={imgSlide2} />
              <source media="(max-width: 1280px)" srcSet={imgSlide2Tablet} />
              <source media="(min-width: 1280px)" srcSet={imgSlide2Desk} />
              <img src={imgSlide2} alt="Wind turbine" />
            </picture>
            <div className={styles.tumb}>
              <div className={styles.wrapper}>
                <p className={styles.tumb_text}>
                  Zhytomyr city Private Enterprise “Bosch”
                </p>

                <div className={styles.svg_wrapper}>
                  <ArrowUpRight />
                </div>
              </div>
              <div className={styles.description_wrapper}>
                <p className={styles.description}>
                  Solar Panels for industrial use
                </p>
                <p className={styles.description}>November 2023</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className={styles.swipe_card_wrapper}>
            <picture>
              <source media="(max-width: 768px)" srcSet={imgSlide3} />
              <source media="(max-width: 1280px)" srcSet={imgSlide3Tablet} />
              <source media="(min-width: 1280px)" srcSet={imgSlide3Desk} />
              <img src={imgSlide3} alt="Wind turbine" />
            </picture>
            <div className={styles.tumb}>
              <div className={styles.wrapper}>
                <p className={styles.tumb_text}>
                  Rivne city Private Enterprise “Biotech”
                </p>

                <div className={styles.svg_wrapper}>
                  <ArrowUpRight />
                </div>
              </div>
              <div className={styles.description_wrapper}>
                <p className={styles.description}>Thermal modules</p>
                <p className={styles.description}>October 2023</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.swipe_card_wrapper}>
            <picture>
              <source media="(max-width: 768px)" srcSet={imgSlide4} />
              <source media="(max-width: 1280px)" srcSet={imgSlide4Tablet} />
              <source media="(min-width: 1280px)" srcSet={imgSlide4Desk} />
              <img src={imgSlide4} alt="Wind turbine" />
            </picture>
            <div className={styles.tumb}>
              <div className={styles.wrapper}>
                <p className={styles.tumb_text}>
                  Kherson city Private Enterprise “HealthyFarm”
                </p>

                <div className={styles.svg_wrapper}>
                  <ArrowUpRight />
                </div>
              </div>
              <div className={styles.description_wrapper}>
                <p className={styles.description}>Wind power</p>
                <p className={styles.description}>September 2021</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={styles.swipe_card_wrapper}>
            <picture>
              <source media="(max-width: 768px)" srcSet={imgSlide5} />
              <source media="(max-width: 1280px)" srcSet={imgSlide5Tablet} />
              <source media="(min-width: 1280px)" srcSet={imgSlide5Desk} />
              <img src={imgSlide5} alt="Wind turbine" />
            </picture>
            <div className={styles.tumb}>
              <div className={styles.wrapper}>
                <p className={styles.tumb_text}>
                  Zaporizhia city Private Enterprise “Biotech”
                </p>

                <div className={styles.svg_wrapper}>
                  <ArrowUpRight />
                </div>
              </div>
              <div className={styles.description_wrapper}>
                <p className={styles.description}>Mini nuclear stations</p>
                <p className={styles.description}>May 2021</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Cases;
