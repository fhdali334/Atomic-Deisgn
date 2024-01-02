import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import ReviewCard from "../../molecules/ReviewCard";
import profile1 from "../../../images/profile1.jpeg";

const ReviewsHome = () => {
  return (
    <div className="flex max-xl:flex-col-reverse items-center justify-center py-40 gap-[5vw] px-[2vw]">
      <div className="flex flex-col justify-center gap-y-10 max-sm:px-4">
        <h1 className="sm:w-[320px] font-primary text-primary font-bold max-sm:text-3xl text-5xl">
          What Readers Say About the Book
        </h1>
        <div className=" bg-secondary w-12 h-[3px]"></div>
        <p className="text-xl text-steelGray font-secondary sm:w-[420px]">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators.
        </p>
        <div className="flex items-center gap-1 text-secondary">
          <FaCircle />
          <FaCircle />
          <FaCircle />
          <FaCircle />
          <FaCircleHalfStroke />
          <h3 className="text-xl font-bold font-primary text-primary">(4.8/5)</h3>
        </div>
        <h3 className="-mt-8 text-xl font-bold font-primary text-primary">Overall Customer Ratings</h3>
      </div>
      <div className="grid items-center justify-center grid-cols-2 gap-5 max-md:grid-cols-1 gap-y-5 ">
        <ReviewCard
          image={profile1}
          name="Martin Philips"
          title="Mind Blowing Works"
          mutedText="Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful."
        />
        <div className=" md:relative md:top-[60%]">
        <ReviewCard
          image={profile1}
          name="Martin Philips"
          title="Mind Blowing Works"
          mutedText="Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful."
        />
        
        </div>
          <ReviewCard
            image={profile1}
            name="Martin Philips"
            title="Mind Blowing Works"
            mutedText="Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful."
          />
      </div>
    </div>
  );
};

export default ReviewsHome;
