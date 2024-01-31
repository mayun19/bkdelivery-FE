import React, { useContext, useEffect, useState } from "react";
import Progress from "../../components/ProgressOrder";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { getRupiah } from "../../helper/utils";
import InputField from "../../components/InputField";

const CartPreview = () => {
  const { cart, totalPrice, setTotalPrice } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const handleCountInput = (e) => {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    let sumTotalPrice = 0;

    if (cart.length > 0) {
      cart.forEach((prod) => {
        sumTotalPrice += prod.newPrice;
        setTotalPrice(sumTotalPrice);
      });
    } else {
      setTotalPrice(0);
    }
  }, [cart, setTotalPrice]);

  return (
    <div className="flex justify-center mt-[106px] min-h-screen w-screen mx-auto px-[15px]">
      <div className="w-full lg:w-[960px] px-5 py-0 md:p-0">
        <Progress step={0} />
        <div className="w-full rounded-[10px] bg-whiteBk shadow-[2px_2px_15px_-4px_#6b6b6b] flex mt-[30px]">
          <div className="container flex flex-col lg:flex-row gap-2">
            <div className="lg:w-[70%]">
              <div className="lg:border-r-[1px] border-border h-full">
                <div className="px-[30px] py-[25px]">
                  <div className="container grid grid-cols-3 font-FlameRegular text-base border-b-[1px] border-border text-darkBrown pb-1">
                    <div>Menu Item</div>
                    <div className="text-center">Quantity</div>
                    <div className=" text-center">Subtotal</div>
                  </div>
                  <div className="pb-4 border-b-[1px] border-border text-darkBrown">
                    {cart.map((product, index) => (
                      <div
                        className="container grid grid-cols-3 gap-2 font-FlameSans text-[13px] text-darkBrown pt-2"
                        key={index}>
                        <div>{product.name}</div>
                        <div className="text-center">1</div>
                        <div>
                          <div className="text-center">
                            <div className="text-[#D72300]">
                              {getRupiah(product.newPrice)}
                            </div>
                            {product.oldPrice && (
                              <div className="text-[#9F816F] text-xs line-through">
                                {getRupiah(product.oldPrice)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-[25px] pb-[15px]">
                    <Link
                      className="font-FlameSans text-orange text-[18px]"
                      to={"/menus"}>
                      Continue Shopping
                    </Link>
                  </div>
                  <div className="lg:mt-40 pb-[25px]">
                    <h2 className="font-FlameSans  text-[13px] font-semibold text-darkBrown">
                      Add Notes
                    </h2>
                    <InputField
                      placeholder="Add notes to your order here..."
                      name={"note"}
                      handleInput={handleCountInput}
                    />
                    <p className="font-FlameSans font-medium text-[12px] text-[#b7b7b7] text-right">
                      {inputValue.length} / 15
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] border-t-[1px] border-border ">
              <div className="px-[5%] lg:px-[30px] py-[25px] h-full">
                <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between">
                  <div className="font-FlameSans font-medium text-[13px] text-darkBrown">
                    Order Subtotal*
                  </div>
                  <div className="font-FlameRegular text-darkBrown text-[28px]">
                    {getRupiah(totalPrice)}
                  </div>
                </div>
                <div className="font-FlameSans text-[15px] lg:text-[11px] text-[#919191] mt-[15px]">
                  *Price might change due to your delivery location.
                </div>
                <div className="flex flex-col items-center">
                  <Button style={`mt-8 w-full lg:w-auto`}>
                    Login To Order
                  </Button>
                  <Link
                    className="mt-[5px] py-2.5 font-FlameRegular text-yellowBk text-base"
                    to={"/cart/delivery"}>
                    Continue as Guest
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
