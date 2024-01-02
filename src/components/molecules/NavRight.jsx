import React from "react";
import { NavLink } from "react-router-dom";

const NavRight = () => {
  const navItems = [
    { item: "Home", link: "/" },
    { item: "Pages", link: "/pages" },
    { item: "About", link: "/about" },
    { item: "Services", link: "/services" },
    { item: "Contact", link: "/contact" },
  ];

  return (
    <div>
      <ul className=" bg-primary  justify-center items-center  md:flex gap-[1.5vw] font-secondary text-lg font-medium text-white ">
        {navItems.map(({ item, link }) => (
          <li className="max-[767px]:mt-[6vw]" key={link}>
            <NavLink to={link}>{item}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavRight;
