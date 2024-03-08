import React from "react";
import HeadingComponent from "../../components/Other/HeadingComponent";
import { HomePageEnq } from "./HomPageEnq";
import { FaCar, FaRoute } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { HiMiniUserGroup } from "react-icons/hi2";
import CountUp from "react-countup";

const HomepageContactUs = () => {
  const data = [
    {
      icon: <LuCalendarDays />,
      title: "2003",
      start:"1990",
      subTitle: "Established",
      content:
        "Saboo RKS began its longstanding journey with True Value in 2003.",
    },
    {
      icon: <FaCar />,
      title: "10200",
      start:"7000",
      subTitle: "Sold Cars",
      content:
        "We are thankful to each and every one of our 10,000+ satisfied customers!",
    },
    {
      icon: <HiMiniUserGroup />,
      title: "200",
      start:"0",
      subTitle: "Hard Workers",
      content:
        "Saboo RKS – True Value maintains a wide reach with its pre-owned vehicle outlets across Hyderabad.",
    },
    {
      icon: <FaRoute />,
      title: "4",
      start:"0",
      subTitle: "Branch",
      content:
        "Supported by 200+ well trained and experienced staff, to assist you each step of the way!",
    },
  ];
  return (
    <div className="py-10 lg:py-16 bg-[#ebedff]">
      <HeadingComponent title="Find Your Right Car" />
      <div className="container flex flex-col gap-4 pt-6 mx-auto lg:flex-row lg:gap-8">
        <div className="p-5 bg-white lg:p-8 lg:w-1/2 rounded-xl ">
          <HomePageEnq />
        </div>
        <div className="grid gap-4 p-2 sm:grid-cols-2 lg:w-1/2">
          {data.map((x, index) => (
            <div key={index} className="p-4 bg-white rounded-xl lg:p-6">
              <h5 className="pb-2 text-2xl text-center">{x.subTitle}</h5>
              <div className="flex items-center justify-center gap-4 ">
                <div className="text-3xl text-truevalue">{x.icon}</div>

                <span className="text-4xl"> <CountUp start={x.start} end={x.title} duration={10} /></span>
              </div>
              <p className="pt-2 text-sm text-center">{x.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex flex-col p-2 mx-auto mt-4 overflow-hidden border border-white rounded-xl md:flex-row ">
        <div className="md:w-1/2 lg:w-1/3">
          <img
            src={require("../../assets/homepage/rkr-img.webp")}
            alt=""
            
            className="h-40 mx-auto w-min lg:mx-0"
          />
        </div>

        <div className="py-4 my-auto text-center md:w-1/2 lg:w-2/3 lg:text-left">
          <h4 className="mb-2 text-xl lg:text-2xl text-truevalue">
            YOUR SEARCH FOR A FAIR AND TRANSPARENT PRICE FOR YOUR USED CAR ENDS
            HERE!
          </h4>
          <p>
            Get started with our AI-based scientific pricing engine and book a
            home evaluation today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomepageContactUs;
