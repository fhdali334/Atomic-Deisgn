import React from "react";
import bookLogo from "../../images/Logo.png";
import Logo from "../atoms/Logo";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Icons from "../atoms/Icons";

const FooterSocail = () => {
  return (
    <div className="flex flex-col gap-5">
      <Logo image={bookLogo} text="Pages" />
      <div className="flex gap-3">
        <Icons Icon={<FaFacebookF />} type="secondaryIcon" />
        <Icons Icon={<FaTwitter />} type="secondaryIcon" />
        <Icons Icon={<FaLinkedinIn />} type="secondaryIcon" />
        <Icons Icon={<FaInstagram />} type="secondaryIcon" />
      </div>
    </div>
  );
};

export default FooterSocail;
