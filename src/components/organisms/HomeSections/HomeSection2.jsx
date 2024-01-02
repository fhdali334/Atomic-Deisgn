import React from "react";
import Card1 from "../../molecules/Card1";
import Card2 from "../../molecules/Card2";

const HomeSection2 = () => {
  return (
    <div className="flex flex-col items-center mx-auto py-24 2xl:max-w-[2000px]">
      <h1 className=" text-center text-primary font-primary text-5xl font-bold px-7 pb-12">
        Author’s Book Includes
      </h1>

      <div className=" flex justify-center gap-[3%]  max-2xl:flex-col ">
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
};

export default HomeSection2;
