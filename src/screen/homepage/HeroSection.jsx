import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 overflow-x-hidden md:flex-row bg-[#ebedff]">
        <div
          className="w-full md:w-1/2 bg-left bg-cover h-[50vh] md:-[60vh] lg:h-[75vh] rounded-br-3xl overflow-hidden relative lg:hover:w-full duration-500   bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/Home-Page-Banner-Image11.webp)]  cursor-default "
          // style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0  bg-gradient-to-t from-[#2b3495ee] via-[#2b349593] group-hover:hidden "></div>
          {/* <img
            src={img1}
            alt=""
            srcset=""
            className="w-full h-full group-hover:hidden"
          /> */}
          <div className="container absolute p-10 mx-auto bottom-3 left-6 ">
            <p className="mb-8 text-5xl font-extrabold text-white font-anton">
              New Beginnings in a car of your own
            </p>
            <Link to="/buy-used-cars">
              <button className="px-10 py-2.5 text-truevalue font-bold rounded bg-white  hover:bg-truevalue hover:text-white hover:scale-105 duration-200 hover:shadow hover:shadow-white font-oswald">
                BUY CAR
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-right  md:h-[60vh] lg:h-[75vh] h-[50vh] relative lg:hover:w-full duration-500 bg-cover  bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/Home-Page-Banner-Image22.webp)] group rounded-bl-3xl overflow-hidden cursor-default">
          <div className="absolute inset-0  bg-gradient-to-t from-[#2b3495ee] via-[#2b349593]"></div>
          {/* <img
            src={img2}
            alt=""
            srcset=""
            className="w-full h-full group-hover:hidden hover:bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/Home-Page-Banner-Image.webp)]"
          /> */}
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
