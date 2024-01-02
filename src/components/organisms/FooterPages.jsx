import React from "react";
import Listmenu from "../atoms/Listmenu";

const menuItems = [
  { mutedText: "Stay here", link: "/" },
  { mutedText: "Style guide", link: "/" },
  { mutedText: "404 not found", link: "/" },
  { mutedText: "Password protected", link: "/" },
  { mutedText: "Licenses", link: "/" },
  { mutedText: "Changelog", link: "/" },
];

const FooterPages = (props) => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-white font-primary">
          {props.text}
        </h1>
        <ul className="flex flex-col gap-3">
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
    </div>
  );
};

export default FooterPages;
