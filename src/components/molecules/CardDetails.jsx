import React from "react";
import ListPage from "../atoms/Listpage";
import OrderButton from "../atoms/OrderButton";

const CardDetails = (props) => {
  return (
    <div className= " flex flex-col gap-y-8 w-80 lg:w-96 py-14 pl-[3%] max-sm:justify-center max-sm:items-center">
      <h1 className="font-primary text-primary text-3xl">{props.mainText}</h1>
      <p className="text-steelGray tracking-wider leading-8 text-xl">
        {props.mutedText}
      </p>
      <div className="flex">
        <ListPage textColor="text-primary" color="text-secondary text-3xl " mainText="Pages:" mutedText="268 pages" />
        <ListPage textColor="text-primary" color="text-secondary text-3xl " mainText="Length:" mutedText="10 hours"/>
      </div>
      <OrderButton type="secondaryLg" Text="Order Today"  borderColor="border-secondary" />
    </div>
  );
};

export default CardDetails;
