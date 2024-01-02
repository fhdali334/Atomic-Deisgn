import React from "react";
import CardDetails from "./CardDetails";
import bookImg from '../../images/Book.png'

const Card1 = () => {
  return (
    <div className="flex max-sm:flex-col">
      <img src={bookImg} alt="Book " />
      <CardDetails mutedText ="Many variations of passages of Lorem Ipsum willing araise alteration in
        some form." mainText="Atomic One's" />
    </div>
    
  );
};

export default Card1;
