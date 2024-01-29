import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselHome from "../components/CarouselHome";
import CardMenu from "../components/CardMenu";
import { HOME_MENU } from "../data/home-menus-data";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen mx-auto pb-[150px]">
      <CarouselHome />

      <div className="mx-auto w-full flex justify-center font-FlameBold text-[32px] text-brownBk mt-8">
        Our Menus
      </div>

      <div className="flex justify-center mt-4 px-4">
        <div className="container xs:w-full md:w-[960px]">
          <div className="grid grid-cols-2 lg:grid-cols-3 place-content-center gap-5">
            {HOME_MENU.map((menu, index) => (
              <CardMenu
                key={index}
                menu={menu}
                handleOrder={() => navigate(`/menus/${menu.menuId}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
