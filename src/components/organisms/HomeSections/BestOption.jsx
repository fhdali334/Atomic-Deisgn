import React from "react";
import BestOptionDetails from "../../molecules/BestOptionDetails";
import image1 from "../../../images/bookLogo1.png";
import image2 from "../../../images/bookLogo2.png";
import image3 from "../../../images/bookLogo3.png";
import image4 from "../../../images/bookLogo4.png";

const bestOptionData = [
  {
    image: image1,
    mainText: "Amazen Corp",
    mutedText: "A long established fact that a who looking at its layout.",
  },
  {
    image: image2,
    mainText: "Megan Books",
    mutedText: "A long established fact that a who looking at its layout.",
  },
  {
    image: image3,
    mainText: "Los Books",
    mutedText: "A long established fact that a who looking at its layout.",
  },
  {
    image: image4,
    mainText: "Urban Lib",
    mutedText: "A long established fact that a who looking at its layout.",
  },
];

const BestOption = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-[1500px] px-2 gap-y-8 py-20">
      <h1 className="font-primary text-primary font-bold text-5xl">Trusted by the Best</h1>
      <div className="mb-12 bg-secondary w-14 h-[3px]"></div>
      <div className=" gap-8 grid xl:grid-cols-4 lg:grid-cols-2 max-lg:gap-y-28">
        {bestOptionData.map((option, index) => (
          <BestOptionDetails
            key={index}
            image={option.image}
            mainText={option.mainText}
            mutedText={option.mutedText}
          />
        ))}
      </div>
    </div>
  );
};

export default BestOption;
