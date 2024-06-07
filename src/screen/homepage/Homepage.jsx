import React from "react";
import Benefits from "./Benefits";
// import FeaturedCars from "./FeaturedCars";
import HowWorks from "./HowWorks";
import HomepageBlogs from "./HomepageBlogs";
import HomepageFAQ from "./HomepageFAQ";
import HeroSection from "./HeroSection";
import Outlets from "./Outlets";
import HomepageContactUs from "./HomepageContactUs";
import ReviewAndRecommendation from "./ReviewAndRecommendation";
import Feature2 from "./Feature2";

const Homepage = () => {
  return (
    <div className="relative" data-scroll-section>
      <HeroSection />
      <HomepageContactUs />
      <Feature2 />
      {/* <FeaturedCars /> */}
      <HowWorks />
      <Benefits />
      <HomepageBlogs />
      <ReviewAndRecommendation />
      <HomepageFAQ />
      <Outlets />
    </div>
  );
};

export default Homepage;
