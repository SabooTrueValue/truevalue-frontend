import React from "react";
import HomeNav from "./HomeNav";
import Benefits from "./Benefits";
import FeaturedCars from "./FeaturedCars";
import HowWorks from "./HowWorks";
import { Footer } from "../../components/Footer/Footer";
import HomepageBlogs from "./HomepageBlogs";
import HomepageFAQ from "./HomepageFAQ";
import Insights from "./Insights";
import ExploreByBrand from "./ExploreByBrand";
import ExploreByBodyType from "./ExploreByBodyType";
import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <div>
      <HomeNav />
      <HeroSection />
      <Benefits />
      <HowWorks />
      <FeaturedCars />
      <HomepageBlogs />
      <Insights />
      <ExploreByBodyType />
      <ExploreByBrand />
      <HomepageFAQ />
      <Footer />
    </div>
  );
};

export default Homepage;
