import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isHoverd, setIsHovered] = useState(0);
  return (
    <div>
      <div className="flex flex-col gap-1 overflow-x-hidden md:flex-row bg-[#ebedff]">
        <div
          className={`w-full md:w-1/2 bg-left bg-cover  h-[50vh] md:h-[60vh] lg:h-[75vh] lg:rounded-br-xl overflow-hidden relative md:hover:w-full duration-500   bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/Home-Page-Banner-Image11.webp)]  cursor-pointer  `}
          // style={{ backgroundImage: `url(${img1})` }}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(0)}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#2b3495ee] via-[#2b349593] group-hover:hidden ${
              isHoverd === 2 && "lg:backdrop-blur-2xl"
            }`}
          ></div>
          {/* <img
            src={img1}
            alt=""
            
            className="w-full h-full group-hover:hidden"
          /> */}
          <Link to="/buy-used-cars">
            <div className="container absolute p-10 mx-auto bottom-3 left-6 ">
              <p className="mb-8 text-2xl font-bold text-white lg:text-5xl font-anton md:text-3xl">
                New Beginnings in a car of your own
              </p>

              <button className="px-10 py-2.5 text-primary font-bold rounded bg-white  hover:bg-primary hover:text-white hover:scale-105 duration-200 hover:shadow hover:shadow-white font-oswald">
                BUY CAR
              </button>
            </div>{" "}
          </Link>
        </div>
        <div
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(0)}
          className="w-full md:w-1/2 bg-right  md:h-[60vh] lg:h-[75vh] h-[50vh] relative md:hover:w-full duration-500 bg-cover  bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/Home-Page-Banner-Image22.webp)] group lg:rounded-bl-xl overflow-hidden cursor-pointer"
        >
          <div
            className={`absolute inset-0  ${
              isHoverd === 1
                ? "lg:backdrop-blur-2xl  bg-gradient-to-t from-[#2b349540] via-[#2b349593]"
                : " bg-gradient-to-t from-[#2b3495ee] via-[#2b349593]"
            }`}
          ></div>
          {/* <img
            src={img2}
            alt=""
            
            className="w-full h-full group-hover:hidden hover:bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/Home-Page-Banner-Image.webp)]"
          /> */}
          <Link to="/sell-your-car">
            {" "}
            <div
              className={`container absolute p-10 mx-auto bottom-3 left-6  `}
            >
              {/* <div className={`container absolute p-10 mx-auto bottom-3 left-6 ${isHoverd===1 && "blur-2xl" } `}> */}
              <p className="mb-8 text-2xl font-bold text-white lg:text-5xl font-anton md:text-3xl">
                Sell your car for the best price
              </p>

              <button className="px-10 py-2.5 text-primary font-bold rounded bg-white hover:bg-primary hover:text-white hover:scale-105 duration-200 hover:shadow hover:shadow-white font-oswald">
                SELL CAR
              </button>
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
