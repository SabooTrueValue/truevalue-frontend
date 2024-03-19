import React from "react";
import HomeNav from "../homepage/HomeNav";

const CarDetails = () => {
  return (
    <div>
      <HomeNav option={false} />
      <div>
        <h4 className="container h-screen pb-4 mx-auto text-xl font-bold uppercase text-primary ">
          Car Details
        </h4>
      </div>
    </div>
  );
};

export default CarDetails;
