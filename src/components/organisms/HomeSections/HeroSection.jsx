import React from "react";
import HeroSectionLeft from "../../molecules/HeroSectionLeft";
import HeroSectionRight from "../../molecules/HeroSectionRight";

const HeroSection = () => {
  return (
    <div className=" bg-primary md:px-[1%] lg:px-[10%] xl:px-[10%] 2xl:px-[10%]">
      <div className="flex mx-auto justify-center items-center max-[1436px]:flex-col px-1 bg-primary ">
        <HeroSectionLeft
          starter="Welcome to Pages"
          heading="Books are uniquely
                portable magic "
          headingText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />
        <HeroSectionRight />
      </div>
    </div>
  );
};

export default HeroSection;
