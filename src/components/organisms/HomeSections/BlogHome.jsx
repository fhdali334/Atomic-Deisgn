import React from "react";
import Article1 from "../../../images/article1.png";
import Article2 from "../../../images/article2.png";
import Article3 from "../../../images/article3.png";
import BlogCard from "../../molecules/BlogCard";

const blogData = [
  {
    image: Article1,
    text: "The energy efficiency offers hydrotherapy or swim",
    mutedText:
      "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
    date: "23-05-2022",
  },
  {
    image: Article2,
    text: "Release of Letraset sheets tools containing  passages",
    mutedText:
      "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
    date: "23-05-2022",
  },
  {
    image: Article3,
    text: "The energy efficiency offers hydrotherapy or swim",
    mutedText:
      "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
    date: "23-05-2022",
  },
];

const BlogHome = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-muted bg-opacity-15">
    <h1 className="py-5 text-5xl font-bold text-center max-sm:text-4xl font-primary text-primary ">Articles & Resources</h1>
      <div className="grid grid-cols-3 space-x-1 max-xl:grid-cols-2 max-lg:grid-cols-1">
        {blogData.map((data, index) => (
          <BlogCard
            key={index}
            image={data.image}
            text={data.text}
            mutedText={data.mutedText}
            date={data.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
