import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { ImageCostum } from "./Image";
import zdj1 from "./../../static/img/zdj1.jpg";
import zdj2 from "./../../static/img/zdj2.jpg";
import zdj3 from "./../../static/img/zdj3.jpg";

export const Slider = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides2 = [
    {
      key: uuidv4(),
      content: <ImageCostum src={zdj1} alt="Przebierane" />,
    },
    {
      key: uuidv4(),
      content: <ImageCostum src={zdj2} alt="sezonowe" />,
    },
    {
      key: uuidv4(),
      content: <ImageCostum src={zdj3} alt="rodzinne" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });
  return (
    <Carousel
      slides={slides2}
      goToSlide={goToSlide}
      offsetRadius={10}
      showNavigation={false}
    />
  );
};
