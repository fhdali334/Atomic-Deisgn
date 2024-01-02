import React from "react";
import AboutImg from "../../../images/About.jpg";
import AboutDetails from "../../molecules/AboutDetails"; 
import qrImage from '../../../images/QR.png';
import PersonDetails from "../../atoms/PersonDetails";

const AboutHome = () => {
  return (
    <div className=" bg-lightGray bg-opacity-15">
      <div className="flex max-xl:flex-col 2xl:justify-between justify-center mx-auto items-center py-24 max-2xl:gap-[2vw] 2xl:max-w-[1500px] gap-y-20">
        <div className="relative border-8 border-secondary">
          <img
            className=" relative  -top-6 -left-6 max-sm:h-72 h-[680px] w-fit"
            src={AboutImg}
            alt="About Author"
          />
        </div>

        <div className="flex flex-col gap-y-8 sm:w-[567px] max-sm:w-[310px]">
          <h1 className="text-primary text-5xl font-primary font-bold">
            About Author
          </h1>
          <div className="bg-secondary w-12 h-[3px]"></div>
          <p className="text-steelGray font-secondary text-lg">
            All the Lorem Ipsum generators on the Internet tend to repeated
            predefined chunks as necessary, making this the first true value
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful.
          </p>
          <div className="flex gap-5">
            <AboutDetails mainText="02" mutedText="Books Published" />
            <div className="bg-secondary w-[1px] h-20"></div>
            <AboutDetails mainText="4.5" mutedText="User Reviews" />
            <div className=" bg-secondary w-[1px] h-20"></div>
            <AboutDetails mainText="04" mutedText="Best Seller Awards" />
            
          </div>
          <div className="flex p-4 items-center gap-8 max-sm:flex-col bg-primary">
                <img src={qrImage} alt="QR Code" />
                <PersonDetails name="John Abraham , Ph.d"  email="johnabraham@gmail.com" phone="(+2) 123 545 9000" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
