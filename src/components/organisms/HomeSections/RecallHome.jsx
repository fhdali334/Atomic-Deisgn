import React from "react";
import OrderButton from "../../atoms/OrderButton"; 
import Image from "../../../images/BookAndTea.png"

const RecallHome = () => {
  return (
    <div className="flex justify-center items-center max-2xl:px-8 bg-primary py-8 2xl:gap-[4%] max-lg:flex-col-reverse gap-y-12">
      <div className=" sm:w-[567px] flex flex-col gap-y-8">
        <h1 className=" max-md:text-3xl text-5xl font-primary font-bold text-white leading-normal">Get Book Copy Today!</h1>
        <p className="text-steelGray max-md:text-md text-lg">
          This the first true value generator on the Internet. It uses alphas
          dictionary of over 200 Latin words.
        </p>
        <OrderButton borderColor="border-secondary text-white" Text="Order Today" type="secondaryLg" />
      </div>
      <img className=" xl:h-[500px]" src={Image} alt="" />
    </div>
  );
};

export default RecallHome;
