const Button = (props) => {
  const { children, onClick, variant, style } = props;

  return (
    <button
      className={`rounded-[5px] flex justify-center items-center py-0 lg:px-10 cursor-pointer bg-orange h-9 (${
        (variant === "secondary") | (variant === "ternary") ?  "inherit" : "bg-yellowBk"
      }) ${style}`}
      onClick={onClick}>
      <div className="font-FlameRegular text-[#FFFFFF] font-base">
        {children}
      </div>
    </button>
  );
};

export default Button;
