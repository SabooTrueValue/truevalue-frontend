import React from "react";
// import { FiSearch } from "react-icons/fi";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube, IoMdArrowDropdown, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = ({ option, setOpen, pathname }) => {
  return (
    <div className={`sticky top-0 z-30`}>
      <div className={`bg-primary  text-white ${!option && "shadow-lg"}`}>
        <div className="flex items-center justify-between px-1 py-3 lg:py-4 lg:mx-auto lg:container">
          <div className="flex items-center w-full gap-4 xl:gap-10 xl:w-1/2 ">
            <Link to="/" className="px-4 py-2 rounded lg:px-2" aria-label="home page">
              <img
                src={require("../../assets/logo/logo-white.png")}
                // src={require("../../assets/logo/saboo rks truevalue.png")}
                alt=""
                className="lg:h-9 h-9"
              />
            </Link>
            {/* <div className="relative mr-4 min-w-10 xl:w-full">
              <form>
                <input
                  className="w-full h-10 px-5 text-sm bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-primary"
                  type="search"
                  name="search"
                  required
                  placeholder="Search by model"
                />
                <button aria-label="Submit"
                  type="submit"
                  
                  aria-label="Search"
                  className="absolute top-[12px] right-0  mr-3"
                >
                  <FiSearch className="text-lg font-bold text-primary" />
                </button>
              </form>
            </div> */}
          </div>
          <div className="items-center justify-end hidden gap-10 md:flex whitespace-nowrap">
            <Link to="/buy-used-cars" className=" group" aria-label="Buy Car">
              <button aria-label="Buy Car" >Buy Car</button>
              <div
                className={`h-0.5 bg-white w-0 group-hover:w-full duration-500 ${
                  pathname === "/buy-used-cars" && "w-full"
                }`}
              ></div>
            </Link>
            <Link to="/sell-your-car" className="group" aria-label="Sell Car">
              <button aria-label="Sell Car">Sell Car</button>
              <div
                className={`h-0.5 bg-white w-0 group-hover:w-full duration-500 ${
                  pathname === "/sell-your-car" && "w-full"
                }`}
              ></div>
            </Link>
            <Link to="/finance" className="group" aria-label="Finance">
              <button aria-label="Finance">Finance</button>
              <div
                className={`h-0.5 bg-white w-0 group-hover:w-full duration-500 ${
                  pathname === "/finance" && "w-full"
                }`}
              ></div>
            </Link>
            <Link to="/about-us" className="group" aria-label="About us">
              <button aria-label="About Us">About Us</button>
              <div
                className={`h-0.5 bg-white w-0 group-hover:w-full duration-500 ${
                  pathname === "/about-us" && "w-full"
                }`}
              ></div>
            </Link>

            <div className="relative py-2 cursor-pointer group ">
              <div>
                <div className="flex items-center ">
                  More
                  <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                </div>
                <div
                  className={`h-0.5 bg-white w-0 group-hover:w-full duration-500 ${
                    (pathname === "/used-car-blog" ||
                      pathname === "/used-car-outlets" ||
                      pathname === "/contact-preowned-car-dealer" ||
                      pathname === "/used-cars-terms-conditions" ||
                      pathname === "/used-car-faqs") &&
                    "w-full"
                  }`}
                ></div>
              </div>

              <div className="absolute z-40 hidden  rounded-xl -left-8 top-[34px] group-hover:block text-white">
                <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-b-xl whitespace-nowrap ">
                  <Link to="/used-car-blog">
                    <div className="">Blog</div>
                  </Link>
                  <Link to="/used-car-outlets">
                    <div className="">Outlets</div>
                  </Link>
                  <Link to="/used-car-faqs">
                    <div className="">FAQs</div>
                  </Link>
                  {/* <Link to="/login">
                    <div className="">Login</div>
                  </Link> */}
                  <Link to="/contact-preowned-car-dealer">
                    <div className="">Contact Us</div>
                  </Link>
                  <Link to="/used-cars-terms-conditions">
                    <div className="">Terms & Conditions</div>
                  </Link>
                </div>
              </div>
            </div>
            <a href="tel:9848898488" target="_blank" rel="noreferrer" aria-label="Call us">
              <div className="text-sm text-center">Call us at</div>
              <p>98488 98488</p>
            </a>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 pr-6 text-lg cursor-pointer md:hidden"
          >
            Menu <HiOutlineMenuAlt1 className="text-xl" />
          </div>
        </div>
      </div>
      {option && (
        <div
          className={` w-full py-2 select-none bg-white  hidden md:block shadow-lg`}
        >
          <div className="flex flex-wrap items-center justify-between px-1 duration-300 lg:mx-auto lg:container ">
            <div className="flex items-center md:gap-3 lg:gap-5 xl:gap-10 ">
              <div className="hidden font-medium text-gray-600 cursor-default select-none lg:block">
                Explored by
              </div>
              <div className="relative py-2 cursor-pointer group hover:text-primary ">
                <div className="flex items-center text-sm ">
                  Price Range
                  <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute z-40 hidden  rounded-xl -left-8 top-[38px] group-hover:block group-hover:text-white">
                  <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-xl whitespace-nowrap ">
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
              <div className="relative py-2 cursor-pointer group hover:text-primary ">
                <div className="flex items-center text-sm ">
                  <span className="hidden lg:bloc">Make and </span>Model
                  <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute z-40 hidden  rounded-xl -left-8 top-[38px] group-hover:flex text-white">
                  <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-l-xl whitespace-nowrap ">
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
                  <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-r-xl whitespace-nowrap ">
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
              <div className="relative py-2 cursor-pointer group hover:text-primary ">
                <div className="flex items-center text-sm ">
                  Year
                  <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute z-40 hidden  rounded-xl -left-8 top-[38px] group-hover:block group-hover:text-white">
                  <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-xl whitespace-nowrap ">
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
              <div className="relative py-2 cursor-pointer group hover:text-primary ">
                <div className="flex items-center text-sm ">
                  Fuel
                  <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute z-40 hidden  rounded-xl -left-8 top-[38px] group-hover:block group-hover:text-white">
                  <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-xl whitespace-nowrap ">
                    <div className="">Petrol</div>
                    <div className=""> Diesel</div>
                    <div className=""> CNG</div>
                  </div>
                </div>
              </div>
              <div className="relative py-2 cursor-pointer group hover:text-primary ">
                <div className="flex items-center text-sm ">
                  KM Driven
                  <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute z-40 hidden  rounded-xl -left-8 top-[38px] group-hover:block group-hover:text-white">
                  <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-xl whitespace-nowrap ">
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
              <div className="relative py-2 cursor-pointer group hover:text-primary ">
                <div className="flex items-center text-sm ">
                  Body Type
                  <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute z-40 hidden  rounded-xl -left-8 top-[38px] group-hover:block group-hover:text-white">
                  <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-xl whitespace-nowrap ">
                    <div className="">Hatchback</div>
                    <div className=""> Sedan</div>
                    <div className=""> SUV</div>
                    <div className=""> MUV</div>
                  </div>
                </div>
              </div>
              <div className="relative py-2 cursor-pointer group hover:text-primary ">
                <div className="flex items-center text-sm ">
                  Transmission
                  <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute z-40 hidden  rounded-xl -left-8 top-[38px] group-hover:block group-hover:text-white">
                  <div className="flex flex-col gap-4 p-8 bg-primary h-min rounded-xl whitespace-nowrap ">
                    <div className="">Automatic</div>
                    <div className="">Manual</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 text-primary lg:gap-3">
              <a
              
                href="https://www.instagram.com/saboorkstruevalue/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/saboorkstruevalue"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookSquare />
              </a>

              {/* <FaXTwitter /> */}
              <a
                href="https://www.youtube.com/channel/UC102tHun3nmc6rVT4lBbofA/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <IoLogoYoutube />
              </a>

              <a
                href="https://www.linkedin.com/company/saboo-rks-truevalue/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/saboorkstrueva1"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="mailto:info@saboomaruti.in"
                target="_blank"
                rel="noreferrer"
                aria-label="Mail"
              >
                <IoMdMail />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Header.defaultProps = {
  option: false,
};

export default Header;
