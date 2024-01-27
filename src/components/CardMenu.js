import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { getRupiah } from "../helper/utils";

const CardMenu = (props) => {
  const { menu, handleOrder, isDetail } = props;
  const navigate = useNavigate();

  const handleClickCard = () => {
    if (isDetail) {
      navigate(`/product/${menu.id}`);
    } else {
      handleOrder();
    }
  };

  return (
    <div
      className={`rounded-[10px] bg-[#FFFF] md:p-5 p-[5px] shadow-[2px_2px_15px_-4px_#6b6b6b] cursor-pointer
        ${isDetail ? "min-h-[280px]" : "min-h-[250px]"}
          `}
      onClick={handleClickCard}>
      {menu.thumbnail !== "" && (
        <img
          src={menu.thumbnail}
          alt={menu.name}
          className="w-full object-cover"
        />
      )}

      {!isDetail ? (
        <div className="flex justify-between gap-2 mt-[5px]">
          <p className="font-FlameBold text-[#8B542F] break-words text-xl">
            {menu.name}
          </p>
          <div className="hidden md:flex">
            <Button>Order</Button>
          </div>
        </div>
      ) : (
        <div>
          <p className="font-FlameRegular text-[#502314] inline-block break-words text-xl">
            {menu.name}
          </p>
          <div className="mt-8 flex items-end">
            <div className="font-FlameRegular text-[#D72300] text-base">
              {getRupiah(menu.newPrice)}
            </div>
            {menu.oldPrice && (
              <div className="font-FlameRegular text-[#9F816F] text-xs ml-3 line-through	">
                {getRupiah(menu.oldPrice)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardMenu;
