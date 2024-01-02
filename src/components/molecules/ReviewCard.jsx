import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";

const ReviewCard = (props) => {
  return (
    <div className="flex flex-col gap-y-5 sm:w-[370px] w-[300px] p-2 sm:p-8 bg-primary">
      <div className="flex items-center gap-3">
        <img className="w-[140px] rounded-full " src={props.image} alt="profile" />
        <div className="flex flex-col gap-y-1">
          <h1 className="text-2xl font-bold text-white font-primary">{props.name}</h1>
          <div className="flex gap-1 text-secondary ">
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircleHalfStroke />
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold text-white font-primary">" {props.title} "</h1>
      <p className="text-lg leading-relaxed text-muted font-secondary">{props.mutedText}</p>
    </div>
  );
};

export default ReviewCard;
