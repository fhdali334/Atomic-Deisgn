import React from "react";
import bookImg from '../../images/Book2.png'
import CardDetails from "./CardDetails";

const Card2 = () => {
  return (
    <div className="flex max-sm:flex-col ">
    <img src={bookImg} alt="Book Cover" />
      <CardDetails mutedText ="Many variations of passages of Lorem Ipsum willing araise alteration in
        some form." mainText="The Dark Light" />
    </div>
  );
};

export default Card2;
