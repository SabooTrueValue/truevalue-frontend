import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingComponent from "../../components/Other/HeadingComponent";
import buyAndSell from "../../assets/homepage/Buy-and-Sell-Maruti-Suzuki-Preowned-Cars.png";
import getQuality from "../../assets/homepage/Get-Quality-Preowned-Cars-from-Maruti-Suzuki.webp";
import addvantage from "../../assets/homepage/MKaruti-Suzuku-TrueValue-Advantages.png";
import buyingFactors from "../../assets/homepage/Used-Car-Buying-Factors.webp";

import { BsArrowLeft } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomepageBlogs = () => {
  const blogsData = [
    {
      img: buyAndSell,
      title:
        "7 Joys Of Life You'll Relate To If You Have Recently Upgraded From A Bike To A Pre-Owned Car",

      body: "We know owning a car has been like a dream come true for you. And, it has taken quite some time to get this desire of yours to materialise...",
    },
    {
      img: getQuality,
      title: "5 Factors To Consider Before You Buy A Pre-Owned Car",

      body: "With new car launches becoming frequent, an increasing number of car owners are selling their old models and switching over to newer ones...",
    },
    {
      img: addvantage,
      title:
        "What Makes Maruti SuzukiÂ True Value A Trusted Name In The Pre-Owned Car Market?",

      body: "You might be surprised to know that for every 100 new cars sold in India, more than 125 used cars exchange hands # . The pre-owned car space has been growing...",
    },
    {
      img: buyingFactors,
      title:
        "5 Used Car Financing Options To Help You Own Your Dream Car Today",

      body: "Used cars are now more popular than ever before in India. A steady stream of car owners upgrading to larger, more expensive cars means...",
    },
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="container pt-10 mx-auto ">
      <HeadingComponent title="Our Blog Articles" />
      <p className="mb-10 text-center">
        Stay up to date with all of the latest vehicles and offers with Saboo
        RKS TrueValue
      </p>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="shadow-xl rounded-xl ">
          <img src="" alt=""  />
          <h4 className="mb-2">f</h4>
          <p></p>
        </div>
      </div> */}
      <div className="container mx-auto mb-10 overflow-visible select-none">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          // loop={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="relative overflow-visible mySwiper"
        >
          {" "}
          <div className="absolute z-10 justify-between  w-full gap-4 flex top-[43%] ">
            <div
              className="flex items-center justify-center w-10 h-10 ml-2 text-white border-2 border-dashed rounded-full cursor-pointer xl:w-12 xl:h-12 hover:bg-primary group border-primary hover:border-primary "
              // onClick={() => setIsTrue(!isTrue)}
              ref={navigationPrevRef}
            >
              <BsArrowLeft className="text-2xl duration-500 translate-x-4 group-hover:translate-x-0 text-primary xl:text-3xl hover:text-white" />
            </div>
            {/* <div
          ref={navigationPrevRef}
          className=" p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125"
        >
          <AiOutlineArrowLeft />
        </div> */}
            <div
              className="flex items-center justify-center w-10 h-10 mr-2 text-white border-2 border-dashed rounded-full cursor-pointer xl:w-12 xl:h-12 hover:bg-primary group border-primary hover:border-primary"
              ref={navigationNextRef}
            >
              <BsArrowLeft className="text-2xl duration-500 rotate-180 -translate-x-4 group-hover:translate-x-0 text-primary xl:text-3xl hover:text-white" />
            </div>
          </div>
          {blogsData.map((x, i) => {
            return (
              <SwiperSlide key={i} className="overflow-hidden ">
                <div className="flex flex-col justify-between overflow-hidden bg-[#FCFCFE] duration-200 h-full  rounded-xl group border hover:border-primary  ">
                  <div className="">
                    <img src={x.img} alt={x.title} />
                  </div>

                  <div className="p-4 my-auto space-y-3 text-left lg:p-6">
                    <div className="mb-4 font-bold text-justify lg:h-20">
                      {x.title}
                    </div>
                    <div className="pb-6 text-justify lg:h-28 ">{x.body}</div>
                    <button className="w-full px-8 py-2 text-sm duration-200 border rounded-full group-hover:bg-primary group-hover:text-white border-primary hover:border-white group-hover:shadow-lg">
                      Explore
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomepageBlogs;
