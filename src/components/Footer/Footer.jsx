import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube, IoMdMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import cityLineDesktop from "../../assets/homepage/city-line-desktop.svg";

export const Footer = () => {
  return (
    <div className="relative -mt-4">
      {/* Background SVG */}

      <div className="absolute inset-0 -z-10 top-4 bg-primary"></div>
      <div
        className="absolute inset-0 -z-10 top-10"
        style={{
          backgroundImage: `url(${cityLineDesktop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "0.3",
        }}
      ></div>

      <div className="container py-20 mx-auto">
        <footer className="z-10 grid grid-cols-2 gap-6 px-1 text-white md:grid-cols-3 xl:grid-cols-5">
          <div className="col-span-2 md:col-span-3 xl:col-span-2">
            <img
              src={require("../../assets/logo/logo-white.png")}
              alt=""
              className="h-12 pb-4 mx-auto lg:h-14 lg:mx-0"
            />
            <p className="pr-4 text-justify">
              Saboo True Value is the most trusted way of buying and selling
              used cars. Choose from over 1000 fully inspected second-hand car
              models. Select online and delivered to your home or visit nearest
              Saboo Truevalue outlet. Get a no-questions-asked 5-day money back
              guarantee and a free one-year comprehensive service warranty with
              Assured Resale Value on every car.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 ">
            <div className="pb-2 text-lg font-semibold">Useful Links</div>
            <Link to="/">&#12297; Home</Link>
            <Link to="/about-us">&#12297; About Us</Link>
            <Link to="/buy-used-cars">&#12297; Buy Car</Link>
            <Link to="/sell-your-car">&#12297; Sell Car</Link>
            <Link to="/finance">&#12297; Finance</Link>
            <Link to="/contact-preowned-car-dealer">&#12297; Contact Us</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="pb-2 text-lg font-semibold">Other Links</div>
            <Link to="/used-car-faqs">&#12297; FAQs</Link>
            <Link to="/used-car-blog">&#12297; Blogs</Link>
            <Link to="/used-car-outlets">&#12297; Outlests</Link>
            <Link to="/used-cars-terms-conditions">
              &#12297; Terms & Conditions
            </Link>
            <Link to="/used-cars-terms-conditions">
              &#12297; Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <div className="pb-2 text-lg font-semibold">Social Media </div>
            <a
              href="tel:9848898488"
              target="_blank"
              rel="noreferrer"
              aria-label="Call Us"
              className="flex items-center gap-2 duration-300 hover:text-base"
            >
              <MdOutlineLocalPhone className="" /> 98488 98488
            </a>

            <a
              href="mailto:info@saboomaruti.in"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Us"
              className="flex items-center gap-2 duration-300 hover:text-base"
            >
              <IoMdMail className="" /> info@saboomaruti.in
            </a>

            {/* <div className="flex gap-2 duration-300 hover:text-base">
              <IoLocationSharp className="" />
            </div>
            <div className="flex gap-2 duration-300 hover:text-base">
              <a href="https://wa.me/9848898488">
                <FaWhatsapp className="" />
              </a>
            </div> */}

            <a
              href="https://www.facebook.com/saboorkstruevalue"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 duration-300 hover:text-base"
            >
              <FaFacebookSquare className="" /> Facebook
            </a>
            <a
              href="https://www.youtube.com/channel/UC102tHun3nmc6rVT4lBbofA/"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
              className="flex items-center gap-2 duration-300 hover:text-base"
            >
              <IoLogoYoutube className="" /> Youtube
            </a>

            <a
              href="https://www.instagram.com/saboorkstruevalue/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 duration-300 hover:text-base"
            >
              <FaInstagram className="" /> Instagram
            </a>
            <a
              href="https://twitter.com/saboorkstrueva1"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              
              className="flex items-center gap-2 duration-300 hover:text-base"
            >
              <FaXTwitter className="" /> Twitter
            </a>

            <a
              href="https://www.linkedin.com/company/saboo-rks-truevalue/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 duration-300 hover:text-base"
            >
              <FaLinkedin className="" /> LinkedIn
            </a>
          </div>
        </footer>
      </div>
      <div className="bg-[#262e89]">
        <div className="container flex flex-col justify-between gap-2 px-1 py-3 mx-auto text-xs text-white md:flex-row">
          <div>© Copyright Saboo RKS Motor Pvt Ltd. All Rights Reserved</div>
          <div>Designed & Developed by BroaddCast Business Solutions LLP</div>
        </div>
      </div>
    </div>
  );
};
