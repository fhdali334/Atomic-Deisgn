import React from "react";
import ListPage from "../atoms/Listpage";

const Contentcard = (props) => {
  return (
    <div className= "m-4 bg-white sm:w-[620px] flex flex-col p-8 gap-y-5">
      <h1 className="text-2xl font-bold font-primary text-primary">{props.introText}</h1>
      <p className="text-xl text-steelGray">{props.mutedText}</p>
      <div className="flex items-center">
        <ListPage mainText="Pages:" mutedText="85pages" color=" text-secondary text-3xl  items-center" textColor="text-primary"/>
        <ListPage mainText="Length:" mutedText="1 hour 25 mins" color="text-secondary text-3xl items-center" textColor="text-primary" />
      </div>
    </div>
  );
};

export default Contentcard;
