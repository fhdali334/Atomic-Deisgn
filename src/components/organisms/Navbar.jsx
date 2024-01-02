import React, { useState } from "react";
import NavLeft from "../molecules/NavLeft";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import Icons from "../atoms/Icons";
import NavRight from "../molecules/NavRight";
import { NavLink } from "react-router-dom";
import OrderButton from "../atoms/OrderButton";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" py-4 bg-primary w-full  md:px-[2%] md:pr-[8%] px-1 lg:px-[8%] 2xl:px-[10%]">
      <div className="max-w-[2200px] mx-auto md:flex md:justify-between ">
        <div className="flex items-center max-[767px]:px-[3vw] justify-between gap-3">
          <div className="flex items-center md:gap-[2vw] ">
            <NavLeft />
            <div className="flex gap-1 md:gap-[1vw] mx-5 items-center">
              <Icons Icon={<FaFacebookF />} type="primaryIcon" />
              <Icons Icon={<FaTwitter />} type="primaryIcon" />
              <Icons Icon={<FaLinkedinIn />} type="primaryIcon" />
            </div>
          </div>

          <button
            className="px-[2%] text-lg font-bold text-white md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>

        <div
          className={` md:flex md:items-center md:gap-5 ${
            menuOpen ? "flex max-[767px]:flex-col items-center gap-5 max-[767px]:pt-8 max-[767px]:pb-20 max-[767px]:h-screen overflow-auto" : "hidden"
          }`}
        >
          <NavRight />
          <NavLink className="text-white" to="/cart">
            <FaCartArrowDown className="text-lg " />
          </NavLink>

          <NavLink to="/">
            <OrderButton type="primarySm" Text="Order Today" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
