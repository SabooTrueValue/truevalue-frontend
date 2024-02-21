import React from "react";
import HomeNav from "./HomeNav";
import Benefits from "./Benefits";
import FeaturedCars from "./FeaturedCars";
import HowWorks from "./HowWorks";
import HomepageBlogs from "./HomepageBlogs";
import HomepageFAQ from "./HomepageFAQ";
import ExploreByBrand from "./ExploreByBrand";
import ExploreByBodyType from "./ExploreByBodyType";
import HeroSection from "./HeroSection";
import Outlets from "./Outlets";
import HomepageContactUs from "./HomepageContactUs";

const Homepage = () => {
  return (
    <div className="relative">
      <HomeNav />
      <HeroSection />
      <HomepageContactUs />
      <HowWorks />
      <FeaturedCars />
      <ExploreByBodyType />
      <ExploreByBrand />
      <Benefits />
      <HomepageBlogs />
      <Outlets />
      <HomepageFAQ />
    </div>
  );
};

export default Homepage;
