import React from "react";
import Contentcard from "../../molecules/Contentcard";
import OrderButton from "../../atoms/OrderButton";

const SericesDetailsData = [
  {
    introText: "Chapter- 01 ( Get Started Intro )",
    mutedText:
      "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
  },
  {
    introText: "Chapter- 02   ( Create a Massive Content )",
    mutedText:
      "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
  },
  {
    introText: "Chapter- 03   ( Maintaining the Creative Arcs )",
    mutedText:
      "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
  },
  {
    introText: "Chapter- 04   ( The Conclusion )",
    mutedText:
      "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
  },
];

const cardsHome = () => {
  return (
    <div className="bg-muted bg-opacity-15">
      <div className="py-40 mx-auto max-w-[1500px] flex flex-col justify-center items-center">
        <h1 className="py-8 text-4xl font-bold text-center sm:text-5xl text-primary font-primary">
          The Chapter Includes
        </h1>
        <div className="mb-12 bg-secondary w-14 h-[3px]"></div>
        <div className="grid grid-cols-2 mx-auto max-xl:grid-cols-1">
          {SericesDetailsData.map((options, index) => (
            <Contentcard
              key={index}
              introText={options.introText}
              mutedText={options.mutedText}
            />
          ))}
        </div>
        <div className="py-10">
        <OrderButton Text="Start a 15-Days Free Trail" type="primaryLg" />
        </div>
        <p className="font-secondary text-steelGray">Short description about each chapter</p>
        <p className=" font-secondary text-steelGray"> <a href="/contact" className="font-semibold underline text-primary">Have any question?</a> Contact us</p>
      </div>
    </div>
  );
};

export default cardsHome;
