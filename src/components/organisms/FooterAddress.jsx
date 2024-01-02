import React from "react";
import AddresItems from "../molecules/AddresItems";

const addresDetails = [
  {
    text: "Address",
    mutedText: "24A Kingston St, Los Vegas NC 28202, USA.",
  },
  {
    text: "Mail",
    mutedText: "support@doctors.com",
  },
  {
    text: "Phone",
    mutedText: "(+22) 123 - 4567 - 900",
  },
];

const FooterAddress = (props) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-white font-primary">
        {props.mainText}
      </h1>
      <ul className="flex flex-col gap-4">
        {addresDetails.map((data, index) => (
          <AddresItems
            key={index}
            text={data.text}
            mutedText={data.mutedText}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterAddress;
