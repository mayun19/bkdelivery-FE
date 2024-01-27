import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineMenu, MdOutlineClose, MdShoppingCart } from "react-icons/md";

import { AppContext } from "../App";

const pageMenus = [
  {
    title: "Delivery",
    subTitle: "Order",
    path: "/menus",
  },
  {
    title: "Get Fresh",
    subTitle: "Promotions",
    path: "/news-v1",
  },
  {
    title: "Exclusive",
    subTitle: "Large Order",
    path: "/",
  },
];

const PageMenu = (props) => {
  return (
    <NavLink to={props.path} className="no-underline cursor-pointer">
      <ul
        className="xl:leading-none pt-2 pb-5 xl:py-[19px]  xl:px-10 px-5"
        onClick={props.toggleNavbar}>
        <div>
          <div className="font-['flameRegular'] xl:text-[13px] text-yellowBk block xl:tracking-tight">
            {props.title}
          </div>
          <div className="font-['flameRegular'] xl:font-['flameBold'] xl:top-[3px] leading-[25px] relative text-[32px] xl:text-[25px] text-[#FFFF] xl:tracking-tight">
            {props.subTitle}
          </div>
        </div>
      </ul>
    </NavLink>
  );
};

function NavbarMenu() {
  const { cart } = useContext(AppContext);
  const [openNav, setOpenNav] = useState(false);

  const toggleNavbar = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] h-max max-w-full rounded-none bg-[#2D2D2D] p-0">
      <div className="relative xl:container flex flex-row items-center justify-between xl:mx-auto xl:max-w-[960px] h-[50px] xl:h-[76px]">
        <div className="flex xl:hidden items-center">
          <button
            className="ml-auto
              h-6
              w-6
              px-[15px]
              text-inherit
              hover:bg-transparent
              focus:bg-transparent
              active:bg-transparent
              xl:hidden"
            onClick={toggleNavbar}>
            {!openNav ? (
              <MdOutlineMenu size="25px" color="#ED7801" />
            ) : (
              <MdOutlineClose size="25px" color="#ED7801" />
            )}
          </button>
        </div>
        <div className="flex items-center">
          <NavLink
            to={"/"}
            className="absolute xl:mr-[35px] cursor-pointer xl:left-[-125px] xl:top-[10px] z-1000 font-medium">
            <img
              src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
              alt="logo"
              className="w-[40px] xl:w-[90px] h-[40px] xl:h-[90px]"
            />
          </NavLink>
        </div>
        <div className="flex items-center xl:justify-between xl:w-full">
          <div className="mr-4 hidden xl:flex xl:flex-row">
            {pageMenus.map((menu, index) => (
              <PageMenu
                key={index}
                title={menu.title}
                subTitle={menu.subTitle}
                path={menu.path}
              />
            ))}
          </div>
          <div className="flex h-auto xl:h-[76px]">
            <div className="hidden font-['flameRegular'] text-xl text-[#FFFF] xl:flex pt-[23px] px-[10px] pb-[15px]">
              LOGIN
            </div>
            <Link
              to={"/cart/preview"}
              className="no-underline xl:absolute relative xl:right-[-80px]">
              <div className="xl:py-6 xl:pr-4 xl:pl-[13px] p-[10px] xl:h-[76px] flex items-center justify-center relative bg-[#ED7801]">
                {cart.length > 0 && (
                  <div className="absolute w-5 h-5 flex justify-center rounded-full top-[15px] right-2.5 items-center text-sm bg-[#FF0000] text-[#FFFF]">
                    {cart.length}
                  </div>
                )}
                <MdShoppingCart color="#FFFFFF" size="30px" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {openNav ? (
        <div onClick={openNav}>
          <PageMenu subTitle={"Home"} path={"/"} toggleNavbar={toggleNavbar} />
          {pageMenus.map((menu, index) => (
            <PageMenu
              key={index}
              title={menu.title}
              subTitle={menu.subTitle}
              path={menu.path}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default NavbarMenu;
