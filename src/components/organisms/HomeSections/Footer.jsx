import React from "react";
import FooterSocail from "../../molecules/FooterSocail";
import FooterMenuItems from "../../molecules/FooterMenuItems";
import FooterPages from "../FooterPages";
import FooterAddress from "../FooterAddress";

const Footer = () => {
  return (
    <div className=" bg-primary py-[5vw]"  >
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center  gap-32 max-xl:gap-5 max-w-[1200px] mx-auto px-4">
        <FooterSocail />
        <FooterMenuItems text="Explore" />
        <FooterPages text="Utility Pages" />
        <FooterAddress mainText="Keep in Touch " />
      </div>
    </div>
  );
};

export default Footer;
