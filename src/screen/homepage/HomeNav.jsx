import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
// import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube, IoMdArrowDropdown, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="">
      <div className="text-white bg-truevalue ">
        <div className="flex flex-wrap px-1 py-4 lg:mx-auto lg:container">
          <div className="flex items-center w-full gap-4 xl:gap-10 lg:w-1/2">
            <img
              src={require("../../assets/homepage/logo-white.png")}
              alt=""
              srcSet=""
              className="h-9"
            />
            <div className="relative w-full ">
              <form>
                <input
                  className="w-full h-10 px-5 text-sm bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-white"
                  type="search"
                  name="search"
                  required
                  placeholder="Search by model"
                />
                <button
                  type="submit"
                  className="absolute top-[12px] right-0  mr-3"
                >
                  <FiSearch className="text-lg font-bold" />
                </button>
              </form>
            </div>
          </div>
          <div className="items-center justify-end hidden gap-10 lg:flex lg:w-1/2">
            <Link to="/buy-used-cars" className="flex flex-col items-center group">
              <button >Buy Car</button>
              <div className="h-0.5 bg-white w-0 group-hover:w-full duration-500 "></div>
            </Link>
            <Link to="/sell-used-cars" className="group">
              <button>Sell Car</button>
              <div className="h-0.5 bg-white w-0 group-hover:w-full duration-500 "></div>
            </Link>
            <Link to="/finance" className="group">
              <button>Finance</button>
              <div className="h-0.5 bg-white w-0 group-hover:w-full duration-500 "></div>
            </Link>
            <Link to="/about-us" className="group">
              <button>About Us</button>
              <div className="h-0.5 bg-white w-0 group-hover:w-full duration-500 "></div>
            </Link>
            
            <div className="relative py-2 cursor-pointer group hover:text-white ">
              <div className="flex items-center ">
              More
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block">
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xl whitespace-nowrap gap-4 flex flex-col ">
                  <Link to='/used-car-blog'><div className="">Blog</div></Link>
                  <Link to='/used-car-outlets'><div className="">Outlets</div></Link>
                  <Link to='/used-car-faqs'><div className="">FAQs</div></Link>
                  <Link to='/contact-preowned-car-dealer'><div className="">Contact Us</div></Link>
                  <Link to='/used-cars-terms-conditions'><div className="">Terms & Conditio s</div></Link>
                 
                </div>
              </div>
            </div>
            <button>
              <div className="text-sm">Call us at</div>
              <div>98488 98488</div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#2b3495ee] w-full select-none hidden md:block">
        <div className="flex flex-wrap items-center justify-between px-1 text-white duration-300 lg:mx-auto lg:container hover:text-gray-400">
          <div className="flex items-center md:gap-3 lg:gap-5 xl:gap-10 ">
            <div className="hidden font-medium text-gray-300 cursor-default select-none lg:block">
              Explored by
            </div>
            <div className="relative py-2 cursor-pointer group hover:text-white ">
              <div className="flex items-center text-sm ">
                Price Range
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block">
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xl whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">Under 3 Lakh</div>
                  <div className=""> 3 - 4 Lakh</div>
                  <div className=""> 4 - 5 Lakh</div>
                  <div className=""> 5 - 6 Lakh</div>
                  <div className=""> 6 - 8 Lakh</div>
                  <div className=""> 8 - 10 Lakh</div>
                  <div className=""> Above 10 Lakh</div>
                </div>
              </div>
            </div>
            <div className="relative py-2 cursor-pointer group hover:text-white">
              <div className="flex items-center text-sm ">
               <span className="hidden lg:bloc">Make and </span>Model 
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:flex ">
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xll whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">Maruti Suzuki</div>
                  <div className=""> Wagon R</div>
                  <div className=""> Baleno</div>
                  <div className=""> Swift</div>
                  <div className=""> Desire</div>
                  <div className=""> Ciaz</div>
                  <div className=""> Grand Vitara</div>
                  <div className=""> Fronx</div>
                  <div className=""> Jimny</div>
                </div>
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xlr whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">Maruti Suzuki</div>
                  <div className=""> Wagon R</div>
                  <div className=""> Baleno</div>
                  <div className=""> Swift</div>
                  <div className=""> Desire</div>
                  <div className=""> Ciaz</div>
                  <div className=""> Grand Vitara</div>
                  <div className=""> Fronx</div>
                  <div className=""> Jimny</div>
                </div>
              </div>
            </div>
            <div className="relative py-2 cursor-pointer group hover:text-white">
              <div className="flex items-center text-sm ">
                Year
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block">
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xl whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">2022 & above</div>
                  <div className="">2018 & above</div>
                  <div className="">2016 & above</div>
                  <div className="">2014 & above</div>
                  <div className="">2012 & above</div>
                  <div className="">2010 & above</div>
                  <div className="">2008 & above</div>
                </div>
              </div>
            </div>
            <div className="relative py-2 cursor-pointer group hover:text-white">
              <div className="flex items-center text-sm ">
                Fuel
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block">
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xl whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">Petrol</div>
                  <div className=""> Diesel R</div>
                  <div className=""> CNG</div>
                </div>
              </div>
            </div>
            <div className="relative py-2 cursor-pointer group hover:text-white">
              <div className="flex items-center text-sm ">
                KM Driven
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block">
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xl whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">10,000 kms or less</div>
                  <div className="">30,000 kms or less</div>
                  <div className="">50,000 kms or less</div>
                  <div className="">75,000 kms or less</div>
                  <div className="">1,00,000 kms or less</div>
                  <div className="">1,25,000 kms or less</div>
                  <div className="">1,50,000 kms or less</div>
                </div>
              </div>
            </div>
            <div className="relative py-2 cursor-pointer group hover:text-white">
              <div className="flex items-center text-sm ">
                Body Type
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block">
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xl whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">Hatchback</div>
                  <div className=""> Sedan</div>
                  <div className=""> SUV</div>
                  <div className=""> MUV</div>
                </div>
              </div>
            </div>
            <div className="relative py-2 cursor-pointer group hover:text-white">
              <div className="flex items-center text-sm ">
                Transmission
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block">
                <div className="p-8 bg-[#2b3495] h-min rounded-b-xl whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">Automatic</div>
                  <div className="">Manual</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 text-white lg:gap-3">
            <FaInstagram />
            <FaFacebookSquare />
            {/* <FaXTwitter /> */}
            <IoLogoYoutube />
            <FaLinkedin />
            <FaWhatsapp />
            <IoMdMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
