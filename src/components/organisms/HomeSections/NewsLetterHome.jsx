import React from "react";
import NewsLetterDetails from "../../molecules/NewsLetterDetails";

const NewsLetterHome = () => {
  return (
    <div className="lg:max-w-[1400px] lg:mx-auto  lg:my-[5vw]">
      <div className="flex flex-col items-center space-y-5 justify-center bg-secondary min-[1400px]:my-0 min-[1400px]:mx-0 lg:mx-[16vw] py-20  ">
        <h1 className="text-5xl font-bold text-center text-primary font-primary">
          Read a free chapter
        </h1>
        <div className=" bg-primary w-12 h-[3px]"></div>
        <p className="px-2 sm:w-[500px]  text-center font-secondary">
          Making this the first true value generator on the Internet. It of over
          200 Latin words, combined with a handful.
        </p>
        <NewsLetterDetails />
      </div>
    </div>
  );
};

export default NewsLetterHome;
