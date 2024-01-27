import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselDataImages } from "../data/carousel-home-data";

const CarouselHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="w-screen mx-auto">
      <Slider {...settings}>
        {CarouselDataImages.map((step, index) => (
          <div key={index} className="">
            <img
              src={step.src}
              alt={step.label}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselHome;
