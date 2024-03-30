import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const CarCard = ({ carData }) => {
  // Function to calculate EMI
  const calculateEMI = () => {
    // Assuming interest rate of 8.5% per annum and tenure of 5 years (60 months)
    const interestRatePerMonth = 8.5 / (12 * 100);
    const tenureInMonths = 60; // 5 years
    const principal = carData.price * 100000; // Assuming carData.price is in lakhs

    // Calculating EMI using the formula
    const emi =
      (principal *
        interestRatePerMonth *
        Math.pow(1 + interestRatePerMonth, tenureInMonths)) /
      (Math.pow(1 + interestRatePerMonth, tenureInMonths) - 1);

    // Rounding off to 2 decimal places and converting to string
    return emi.toFixed(0);
  };

  return (
    <div className="group">
      <div className="flex flex-col justify-center w-full duration-200 border group rounded-xl text-primary border-primary ">
        <div className="relative overflow-hidden rounded-t-xl">
          <Link to="/car-details" className="overflow-hidden">
            <img
              src={carData.img}
              alt=""
              srcSet=""
              className="w-full mx-auto transition-transform duration-500 rounded-t-xl lg:group-hover:scale-105 transform-gpu"
            />
          </Link>
        </div>

        <div className="p-2 lg:px-4">
          <div className="flex mt-6 mb-4 text-xl font-bold">
            {carData.title} - {carData.year}
          </div>

          <div className="mb-2 text-sm">
            <span>{carData.killometerDriven} Km</span> |{" "}
            <span>
              {carData.type} | {carData.detail}
            </span>
          </div>
          <div className="flex items-end justify-between mb-6 ">
            <p>
              ₹ <span className="text-xl font-bold ">{carData.price} Lakh</span>
            </p>
            <p className="text-sm ">From ₹{calculateEMI()}/m</p>
          </div>

          <div className="flex justify-between border-t border-[#797979] py-2 ">
            <Link to="/car-details" className="flex items-center gap-2 text-lg group">
              Buy Now{" "}
              <p className="invisible text-sm font-bold transition duration-500 rounded-full group-hover:translate-x-2 group-hover:visible ">
                &#12297;
              </p>
            </Link>{" "}
            <div className="flex items-center gap-2 text-sm font-bold bottom-2 right-3 ">
              <FaLocationDot />
              <p className="">{carData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
