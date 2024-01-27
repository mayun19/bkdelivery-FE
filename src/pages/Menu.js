import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

import CardMenu from "../components/CardMenu";
import SideMenu from "../components/SideMenu";
import { HOME_MENU } from "../data/home-menus-data";
import {
  PRODUCTS_BEVERAGES,
  PRODUCTS_BKAPP,
  PRODUCTS_CHEESE,
  PRODUCTS_CHEESEBURGER,
  PRODUCTS_CHEESEW,
  PRODUCTS_GOLD,
  PRODUCTS_HEINZ,
  PRODUCTS_KIDSMEAL,
  PRODUCTS_KING,
  PRODUCTS_KINGDEALS,
  PRODUCTS_KINGSCHICKEN,
  PRODUCTS_PROMO,
  PRODUCTS_SIDEDESSERT,
} from "../data/products";

const Menus = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState(PRODUCTS_BKAPP);

  const [selectedMenu, setSelectedMenu] = useState(HOME_MENU[0]);

  useEffect(() => {
    if (param?.menuId) {
      const menu = HOME_MENU.find((menu) => menu.menuId === param.menuId);
      setSelectedMenu(menu);
    }
  }, [param?.menuId]);

  useEffect(() => {
    switch (param?.menuId) {
      case "bk-app-exclusive":
        setProducts(PRODUCTS_BKAPP);
        break;
      case "promo-hari-ini-6":
        setProducts(PRODUCTS_PROMO);
        break;
      case "new-cheese-dunk-limited-time-offer":
        setProducts(PRODUCTS_CHEESE);
        break;
      case "new-king-fusion-nutella-limited-time-offer":
        setProducts(PRODUCTS_KING);
        break;
      case "heinz-mexican-whopper":
        setProducts(PRODUCTS_HEINZ);
        break;
      case "gold-collection-5":
        setProducts(PRODUCTS_GOLD);
        break;
      case "cheese-whopper-4":
        setProducts(PRODUCTS_CHEESEW);
        break;
      case "cheeseburger-favoriter":
        setProducts(PRODUCTS_CHEESEBURGER);
        break;
      case "kings-chicken-rasa-baru":
        setProducts(PRODUCTS_KINGSCHICKEN);
        break;
      case "kids-meal":
        setProducts(PRODUCTS_KIDSMEAL);
        break;
      case "side-dessert":
        setProducts(PRODUCTS_SIDEDESSERT);
        break;
      case "beverages":
        setProducts(PRODUCTS_BEVERAGES);
        break;
      case "king-deals":
        setProducts(PRODUCTS_KINGDEALS);
        break;
      default:
        setProducts(PRODUCTS_BKAPP);
    }

    window.scrollTo(0, 0);
  }, [param]);

  useEffect(() => {
    console.log({ products });
  }, [products]);

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
              <MdOutlineClose className="text-yellowBk"/>

              <div className="container grid grid-cols-2 gap-2 mt-2">
                {HOME_MENU.map((menu, index) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row justify-center w-screen mx-auto mt-[106px]">
          <div className="flex lg:hidden px-5 py-0 mb-4" onClick={toggleMenu}>
            <SideMenu name={selectedMenu.name} isActive />
          </div>

          <div className="flex justify-center">
            <div className="xs:w-full md:w-[960px] flex lg:px-0 px-5 py-0 ">
              <div className="w-[calc(21%)] mr-[4%] hidden lg:flex">
                <div className="w-full">
                  {HOME_MENU.map((menu, index) => (
                    <SideMenu
                      key={index}
                      name={menu.name}
                      isActive={
                        param.menuId
                          ? menu.menuId === param.menuId
                          : index === 0
                      }
                      path={menu.menuId}
                    />
                  ))}
                </div>
              </div>
              <div className="xs:w-full md:w-[calc(75%)]">
                <div className="w-full container">
                  <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((menu, index) => (
                      <div key={index}>
                        <CardMenu
                          menu={menu}
                          isDetail={true}
                          handleOrder={() => navigate(`/product/${menu.id}`)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
