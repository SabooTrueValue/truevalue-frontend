import React from "react";

const FeaturedCars = () => {
  return (
    <div>
      <div className="container px-1 py-10 mx-auto">
        <div className="flex items-center justify-center ">
          <div className="w-[70%] border-b border-[#2b349579] hidden lg:block "></div>
          <h2 className="w-full text-3xl font-bold text-center text-truevalue lg:whitespace-nowrap">
            Featured TrueValue Cars
          </h2>
          <div className="w-[70%] border-b border-[#2b349579] hidden lg:block "></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
