import React from "react";
import {  useNavigate } from "react-router-dom";

const SideMenu = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-[10px] flex items-center mt-2 cursor-pointer ${
        props.isActive ? "bg-yellowBk" : "bg-[#FBE6D6]"
      } ${
        props.isDrawer
          ? "px-2 py-1 min-h-[40px]"
          : "px-5 py-4 min-h-[40px] w-full"
      }`}
      onClick={() => (props.path ? navigate(`/menus/${props.path}`) : "")}>
      <div className="font-FlameRegular text-[#502314]">{props.name}</div>
    </div>
  );
};

export default SideMenu;
