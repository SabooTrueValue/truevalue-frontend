import React from "react";
import HeadingComponent from "../../components/Other/HeadingComponent";

const FeaturedCars = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="container px-1 mx-auto ">
        <HeadingComponent title="Featured True Value Car" />
        <p className="mb-6 text-center">
          Stay updated with all the latest vehicles at Saboo RKS – True Value
        </p>
      </div>
    </div>
  );
};

export default FeaturedCars;
