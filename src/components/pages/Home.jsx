import React from "react";
import HeroSection from "../organisms/HomeSections/HeroSection";
import HomeSection2 from "../organisms/HomeSections/HomeSection2";
import AboutHome from "../organisms/HomeSections/AboutHome";
import BestOption from "../organisms/HomeSections/BestOption";
import RecallHome from "../organisms/HomeSections/RecallHome";
import ServicesHomeSec from "../organisms/HomeSections/ServicesHomeSec";
import CardsHome from "../organisms/HomeSections/cardsHome";
import ReviewsHome from "../organisms/HomeSections/ReviewsHome";
import BlogHome from "../organisms/HomeSections/BlogHome";
import NewsLetterHome from "../organisms/HomeSections/NewsLetterHome";
import Footer from "../organisms/HomeSections/Footer";

const Home = () => {
  return (
    <div >
      <HeroSection />
      <HomeSection2 />
      <AboutHome />
      <BestOption />
      <RecallHome />
      <ServicesHomeSec />
      <CardsHome />
      <ReviewsHome />
      <BlogHome />
      <NewsLetterHome />
      <Footer />

    </div>
  );
};

export default Home;
