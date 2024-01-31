import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { MdOutlineClose } from "react-icons/md";
import { AppContext } from "../App";
import { getRupiah } from "../helper/utils";
import { HOME_MENU } from "../data/home-menus-data";
import { ALLPRODUCST } from "../data/products";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";

const DetailProduct = () => {
  const param = useParams();
  const { handleAddToCart } = useContext(AppContext);

  const [selectedMenu, setSelectedMenu] = useState(HOME_MENU[0]);

  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    if (param?.menuId) {
      const menu = HOME_MENU.find((menu) => menu.menuId === param.menuId);
      setSelectedMenu(menu);
    }
  }, [param?.menuId]);

  useEffect(() => {
    const product = ALLPRODUCST.find((prod) => prod.id == param.productId);

    setSelectedProduct(product);
  }, [param?.productId]);

  console.log(selectedProduct);
  console.log(param?.productId);

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {openMenu ? (
        <div onClick={toggleMenu}>
          <div className="h-screen bg-darkGrey pt-4">
            <div className="py-0 px-5">
              <MdOutlineClose className="text-yellowBk" onClick={toggleMenu} />
              <div className="container grid grid-cols-2 gap-2 mt-2">
                {HOME_MENU.map((menu, index) => (
                  <div item xs={6}>
                    <SideMenu
                      key={index}
                      name={menu.name}
                      isActive={
                        param.menuId
                          ? menu.menuId === param.menuId
                          : index === 0
                      }
                      path={menu.menuId}
                      isDrawer
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="md:hidden flex px-5 py-0 mb-4" onClick={toggleMenu}>
            <SideMenu name={selectedMenu.name} isActive />
          </div>
          <div className="flex justify-center w-screen mx-auto md:mt-[106px]">
            <div className="w-full md:w-[960px] flex px-5 py-0 mb-4">
              <div className="w-[calc(21%)] mr-[4%] hidden md:flex">
                <div className="w-full">
                  {HOME_MENU.map((menu, index) => (
                    <SideMenu
                      key={index}
                      name={menu.name}
                      isActive={selectedProduct?.menuId === menu.menuId}
                      path={menu.menuId}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-[calc(75%)]">
                <div className="flex flex-col md:flex-row w-full rounded-[10px] bg-whiteBk shadow-[2px_2px_15px_-4px_#6b6b6b]">
                  <div className="w-full md:w-[63%] px-5 py-[35px] text-center md:border-r-[1px] border-border">
                    <div className="font-FlameRegular text-3xl text-[#502314]">
                      {selectedProduct?.name}
                    </div>
                    {selectedProduct?.detail && (
                      <div className="mt-[10px] font-FlameSans text-sm">
                        {selectedProduct?.detail}
                      </div>
                    )}
                    <div className="text-left">
                      <img
                        src={selectedProduct?.thumbnail}
                        alt={selectedProduct?.name}
                        className="lg:w-[270px] w-full mt-5"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-[37%] px-5 py-[35px]">
                    <div className="font-FlameRegular text-[28px] mb-[25px]">
                      {getRupiah(selectedProduct?.newPrice)}
                    </div>

                    <Button
                      onClick={() => {
                        handleAddToCart(selectedProduct);
                      }}>
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailProduct;
