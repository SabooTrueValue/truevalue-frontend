import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
// import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube, IoMdArrowDropdown, IoMdMail } from "react-icons/io";

const HomeNav = () => {
  return (
    <div className="">
      <div className="text-white bg-truevalue ">
        <div className="container mx-auto"></div>
        <div className="container flex flex-wrap py-2 mx-auto md:py-4">
          <div className="flex items-center gap-10 lg:w-1/2">
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
          <div className="flex items-center justify-end gap-10 lg:w-1/2">
            <button>Buy Car</button>
            <button>Sell Car</button>

            <button>Finance</button>

            <button>About Us</button>
            <button className="flex items-center group">
              More
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
            <button>
              <div className="text-sm">Call us at</div>
              <div>98488 98488</div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#2b3495ee] w-full select-none">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-white duration-300 hover:text-gray-400">
          <div className="flex items-center gap-10 ">
            <div className="font-medium text-gray-300 cursor-default select-none ">
              Explored by
            </div>
            <div className="relative py-2 cursor-pointer group hover:text-white ">
              <div className="flex items-center text-sm ">
                Price Range
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block">
                <div className="p-8 bg-[#2b3495] h-min rounded-b whitespace-nowrap gap-4 flex flex-col ">
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
                Make and Model
                <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:flex ">
                <div className="p-8 bg-[#2b3495] h-min rounded-bl whitespace-nowrap gap-4 flex flex-col ">
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
                <div className="p-8 bg-[#2b3495] h-min rounded-br whitespace-nowrap gap-4 flex flex-col ">
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
                <div className="p-8 bg-[#2b3495] h-min rounded-b whitespace-nowrap gap-4 flex flex-col ">
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
                <div className="p-8 bg-[#2b3495] h-min rounded-b whitespace-nowrap gap-4 flex flex-col ">
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
                <div className="p-8 bg-[#2b3495] h-min rounded-b whitespace-nowrap gap-4 flex flex-col ">
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
                <div className="p-8 bg-[#2b3495] h-min rounded-b whitespace-nowrap gap-4 flex flex-col ">
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
                <div className="p-8 bg-[#2b3495] h-min rounded-b whitespace-nowrap gap-4 flex flex-col ">
                  <div className="">Automatic</div>
                  <div className="">Manual</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 text-white">
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
