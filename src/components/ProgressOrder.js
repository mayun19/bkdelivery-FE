import React from "react";
import { useNavigate } from "react-router-dom";

const ActiveProgress = (props) => {
  return (
    <div
      className={`${props.style} h-45 absolute flex cursor-pointer`}
      onClick={props.onClick}>
      <div className="w-[80%] bg-[#faaf18] flex items-center justify-center text-[#8B542F] text-[10px] md:text-[22px]">
        {props.label}
      </div>
      <div className="active-cart w-[10%] h-0"></div>
    </div>
  );
};

const DefaultProgress = (props) => {
  return (
    <div
      className={`${
        props.isActive
          ? "bg-[#faaf18] text-[#8B542F]"
          : "bg-[#fcebd9] text-[#c5a997]"
      } h-full flex items-center justify-center text-[10px] md:text-[22px] ${props.style}`}
      onClick={props.onClick}>
      {props.label}
    </div>
  );
};

const Progress = (props) => {
  const navigate = useNavigate();
  return (
    <div className="h-[45px] w-100% font-FlameRegular relative text-[21px] rounded-[5px] flex items-center">
      <DefaultProgress
        isActive={props.step === 0}
        label={"Cart"}
        style={`w-[30%]`}
      />
      <DefaultProgress
        isActive={props.step === 1 || props.step === 2}
        label={"Delivery Info"}
        style={`w-[35%]`}
        onClick={() => {
          if (props.step === 1 || props.step === 2) {
            navigate("/cart/delivery");
          }
        }}
      />
      <DefaultProgress
        isActive={props.step === 2}
        label={"Payment"}
        style={`w-[35%]`}
      />

      <ActiveProgress
        isActive={props.step === 0}
        label={"Cart"}
        style={`w-[40%]`}
        onClick={() => navigate("/cart/preview")}
      />
      {props.step === 1 && (
        <ActiveProgress
          isActive={props.step === 1}
          label={"Delivery Info"}
          style={`left-[30%] w-[45%]`}
        />
      )}
    </div>
  );
};

export default Progress;
