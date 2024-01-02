import React from "react";
import ServicesDetails from "../../molecules/ServicesDetails";
import Image from "../../../images/Learner.jpg";

const SericesDetailsData = [
  {
    num: "01",
    text: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
  },
  {
    num: "02",
    text: "Consume streaming data using Spark Streaming, Flink, and Storm.",
  },
  {
    num: "03",
    text: "Choose an appropriate data storage technology for your application",
  },
  {
    num: "04",
    text: "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
  },
];

const ServicesHomeSec = () => {
  return (
    <div className="mx-auto max-w-[1500px] flex flex-col justify-center items-center gap-y-10 py-20">
      <h1 className="py-2 text-6xl font-bold text-center font-primary text-primary max-sm:text-4xl">
        What will you learn?
      </h1>
      <div className="mb-12 bg-secondary w-14 h-[3px]"></div>
      <div className="flex 2xl:justify-between  max-xl:flex-col-reverse max-2xl:gap-[14vw] gap-60 items-center">
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {SericesDetailsData.map((options, index) => (
            <ServicesDetails 
              key={index}
              number={options.num}
              text={options.text}
            />
          ))}
        </div>
        <div className="relative mt-12 border-8 border-secondary">
          <img
            className="max-sm:h-[320px] lg:h-[500px] w-fit object-contain relative  -top-6 -left-6"
            src={Image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHomeSec;
