import React from "react";
import HomeNav from "./HomeNav";
import Benefits from "./Benefits";
import FeaturedCars from "./FeaturedCars";
import HowWorks from "./HowWorks";
import HomepageBlogs from "./HomepageBlogs";
import HomepageFAQ from "./HomepageFAQ";
import Insights from "./Insights";
import ExploreByBrand from "./ExploreByBrand";
import ExploreByBodyType from "./ExploreByBodyType";
import HeroSection from "./HeroSection";
import Outlets from "./Outlets";

const Homepage = () => {
  return (
    <div className="relative">
      <HomeNav />
      <HeroSection />
      <Benefits />
      <HowWorks />
      <FeaturedCars />
      <Insights />
      <ExploreByBodyType />
      <ExploreByBrand />
      <HomepageBlogs />
      <HomepageFAQ />
      <Outlets />
    </div>
  );
};

export default Homepage;
