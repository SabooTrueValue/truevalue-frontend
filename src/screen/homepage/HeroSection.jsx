import React from "react";
import img1 from "../../assets/homepage/Home-Page-Banner-Image11.jpg";
import img2 from "../../assets/homepage/Home-Page-Banner-Image22.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="flex gap-[2px] overflow-x-hidden flex-col md:flex-row">
        <div
          className="w-full md:w-1/2 bg-right bg-cover h-[50vh] md:h-[60vh]  relative  "
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0  bg-gradient-to-t from-[#2b3495ee] via-[#2b349593] "></div>
          <div className="container absolute p-10 mx-auto bottom-3 left-6 ">
            <p className="mb-8 text-5xl font-extrabold text-white font-anton">
              New Beginnings in a car of your own
            </p>
            <Link to="/buy-used-cars">
              <button className="px-10 py-2.5 text-truevalue font-bold rounded bg-white hover:bg-truevalue hover:text-white hover:scale-105 duration-200 hover:shadow hover:shadow-white font-oswald">
                BUY CAR
              </button>
            </Link>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 bg-left bg-cover md:h-[60vh] h-[50vh] relative  "
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="absolute inset-0  bg-gradient-to-t from-[#2b3495ee] via-[#2b349593]"></div>
          <div className="container absolute p-10 mx-auto bottom-3 left-6 ">
            <p className="mb-8 text-5xl font-extrabold text-white font-anton">
              Sell your car for the best price
            </p>
            <Link to="/sell-your-car">
              <button className="px-10 py-2.5 text-truevalue font-bold rounded bg-white hover:bg-truevalue hover:text-white hover:scale-105 duration-200 hover:shadow hover:shadow-white font-oswald">
                SELL CAR
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="w-1/2">
        <img
          src={require("../../assets/homepage/Home-Page-Banner-Image22.jpg")}
          alt=""
          srcSet=""
          className=""
        />
      </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
