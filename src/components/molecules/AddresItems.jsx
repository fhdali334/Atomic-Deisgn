import React from "react";

const AddresItems = (props) => {
  return (
    <div className="flex gap-3 text-white">
      <h3 className="font-bold font-primary "> {props.text}:</h3>
      <p className="text-muted font-secondary"> {props.mutedText} </p>
    </div>
  );
};

export default AddresItems;
