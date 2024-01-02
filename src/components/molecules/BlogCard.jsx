import React from "react";

const BlogCard = (props) => {
  return (
    <div className="flex-flex-col sm:w-[432px] w-[300px] px-10 py-10 space-y-5 bg-white">
      <img className="sm:h-[346px] h-[300px] object-cover" src={props.image} alt="Blog" />
      <h1 className="text-2xl font-bold font-primary text-primary">{props.text}</h1>
      <p className="text-lg font-secondary text-muted">{props.mutedText}</p>
      <ul className="flex justify-between text-primary">
        <li className="text-lg font-bold underline font-primary">Read more</li>
        <li className="text-lg font-secondary">Author - {props.date}</li>
      </ul>
    </div>
  );
};

export default BlogCard;
