import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalPhone, MdEmail } from "react-icons/md";

const Phone = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <MdLocalPhone className="lg:text-xl" />
      <div>15000 25</div>
    </div>
  );
};

const Email = () => {
  return (
    <div className=" flex items-center">
      <MdEmail size="18px" className="mr-[3px]" />
      <div className="text-sm font-FlameSans font-medium">
        guestservice@burgerking.co.id
      </div>
    </div>
  );
};

const Separator = () => {
  return (
    <span className="lg:flex" style={{ margin: "0px 12px" }}>
      {" "}
      |{" "}
    </span>
  );
};

function Footer() {
  return (
    <footer className="flex z-[100] items-center justify-center w-full h-full lg:h-[125px] bg-darkGrey text-whiteBk mt-[50px] py-5">
      <div
        className="flex flex-col justify-center w-full md:w-[960px] sm:px-5
      ">
        <div className="font-FlameRegular lg:text-start text-center text-[25px] lg:text-xl text-white">
          BURGER KING® DELIVERY
        </div>
        <div className="mt-3 w-full font-FlameRegular text-[28px] lg:text-lg container flex flex-col lg:flex-row items-center text-white gap-4 lg:gap-[30px]">
          <div>
            <Phone />
          </div>
          <div>
            <Email />
          </div>
          <div className="flex items-center gap-[14px] lg:gap-3">
            <FaFacebookF className="text-[24px] lg:text-[18px]" />
            <FaInstagram className="text-[24px] lg:text-[18px]" />
            <FaTwitter className="text-[24px] lg:text-[18px]" />
            <FaYoutube className="text-[24px] lg:text-[18px]" />
          </div>
        </div>
        <div className="font-FlameSans text-xs mt-4 flex flex-col lg:flex-row items-center text-[#919191] ">
          <div className="hidden lg:flex">
            About Us
            <Separator /> Kebijakan Privasi <Separator /> Syarat dan Ketentuan{" "}
            <Separator /> TM & © 2024 Burger King Corporation. Used Under
            License. All rights reserved.
          </div>
          <ul className="flex flex-col items-center justify-center lg:hidden mt-[10px] text-[15px] gap-[10px] text-white">
            <li>About Us</li>
            <li>Kebijakan Privasi</li>
            <li>Syarat dan Ketentuan</li>
            <li className="mt-[20px] max-w-[80%] text-[#919191] text-center leading-5">
              TM & © 2024 Burger King Corporation. Used Under License. All
              rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
