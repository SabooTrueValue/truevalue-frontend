import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart, FaUserAlt, FaInstagram, FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import { FaXTwitter ,FaWhatsapp} from "react-icons/fa6";
import { IoLogoYoutube, IoMdArrowDropdown, IoMdMail ,} from "react-icons/io";

const HomeNav = () => {
  return (
    <div className="">
      <div className="bg-[#2B3395] text-white ">
        <div className="container mx-auto"></div>
        <div className="container flex gap-16 py-2 mx-auto md:py-4 ">
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
            <button className="flex items-center group">
              More
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
            <button className="flex flex-col items-center text-sm">
              <FaRegHeart className="text-lg" />
              {/* <FaRegHeart className="absolute text-xl -top-1 -left-1" /> */}
              Shortlisted
            </button>

            <button className="flex flex-col items-center text-sm">
              <div className="relative ">
                <FaUserAlt className="text-lg" />
                {/* <FaRegHeart className="absolute text-xl -top-1 -left-1" /> */}
              </div>
              Accounts
            </button>
            <button>
              <div className="text-sm">Call us at</div>
              <div>98488 98488</div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#2b3495ee] w-full ">
        <div className="container flex items-center justify-between py-2 mx-auto text-white">
          <div className="flex items-center gap-10">
            <div className="font-medium text-gray-400">Explored by</div>
            <button className="flex items-center text-sm group">
              Price Range
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
            <button className="flex items-center text-sm group">
              Make and Model
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
            <button className="flex items-center text-sm group">
              Year
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
            <button className="flex items-center text-sm group">
              Fuel
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
            <button className="flex items-center text-sm group">
              KM Driven
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
            <button className="flex items-center text-sm group">
              Body Type
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
            <button className="flex items-center text-sm group">
              Transmission
              <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
            </button>
          </div>
          <div className="flex justify-end gap-3">
            <FaInstagram /><FaFacebookSquare /><FaXTwitter /><IoLogoYoutube /><FaLinkedin /><FaWhatsapp /><IoMdMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
