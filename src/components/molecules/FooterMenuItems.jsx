import React from "react";
import Listmenu from "../atoms/Listmenu";


const menuItems = [
    { mutedText: "Home", link: "/" },
    { mutedText: "About Us", link: "/aboutus" },
    { mutedText: "Services", link: "/services" },
    { mutedText: "Appointments", link: "/appointments" },
    { mutedText: "Blog", link: "/blog" },
    { mutedText: "Contact Us", link: "/contactus" },
  ];

const FooterMenuItems = (props) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-white font-primary">{props.text}</h1>
        <ul className="flex flex-col gap-2">
        {menuItems.map((menuData, index) => (
          <Listmenu
            key={index}
            text="Explore"
            mutedText={menuData.mutedText}
            link={menuData.link}
          />
        ))}
        </ul>   
    </div>
  );
};

export default FooterMenuItems;
