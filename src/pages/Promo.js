import React from "react";

import { PRMOTIONS_DATA } from "../data/promotions";

const Promo = () => {
  return (
    <div className="flex justify-center w-screen mx-auto pt-8 pb-[150px]">
      <div className="xs:w-full flex flex-col gap-8 md:w-[960px] xs:py-5 xs:px-0">
        {PRMOTIONS_DATA.map((promo, index) => (
          <img
            key={index}
            src={promo.thumbnail}
            alt="promotions-banner"
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Promo;
