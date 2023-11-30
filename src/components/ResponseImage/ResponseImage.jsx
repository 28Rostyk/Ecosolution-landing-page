import React from "react";

import smallImage from "../../images/wind-turbine-clean-energy.jpg";
import mediumImage from "../../images/wind-turbine-clean-energy-tablet.jpg";
import largeImage from "../../images/wind-turbine-clean-energy-desktop.jpg";

const ResponseImage = () => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={smallImage} />
      <source media="(max-width: 1280px)" srcSet={mediumImage} />
      <source media="(min-width: 1280px)" srcSet={largeImage} />
      <img
        src={smallImage} // Основне зображення для пристроїв з невеликим екраном
        alt="Wind turbine"
      />
    </picture>
  );
};

export default ResponseImage;
