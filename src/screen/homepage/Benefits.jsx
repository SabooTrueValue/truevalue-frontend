import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingComponent from "../../components/Other/HeadingComponent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Benefits = () => {
  const benefitsData = [
    [
      {
        img: require("../../assets/homepage/benefits/Maruti-Suuzki-TrueValue-Documentaion.jpg"),
        title: "Hassle Free Documentation To Ensure Peace Of Mind",
      },

      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-Certified-TrueValue-Cars.jpg"),
        title: "Enusring A Trusted Buying Experience At Every Step",
      },

      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-Second-Hand-Cars.jpg"),
        title: "The Key To An Interesting New Journey",
      },
      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-TrueValue-Service-Warranty.jpg"),
        title: "We Stand Behind Every Car We Sell.",
      },
      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-TrueValue-Testimonials.jpg"),
        title: "Hassle Free Documentation To Ensure Peace Of Mind",
      },

      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-TrueValue-Warranty-Cars.jpg"),
        title: "Enusring A Trusted Buying Experience At Every Step",
      },
    ],
    [
      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-Preowned-Cars.webp"),
        title: "Hassle Free Documentation To Ensure Peace Of Mind",
      },

      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-TrueValue-Certified-Cars.jpg"),
        title: "Enusring A Trusted Buying Experience At Every Step",
      },

      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-Used-Cars.jpg"),
        title: "Stay Tuned To Meet The New Face Of Trust",
      },
      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-TrueValue-Car-Dealer.jpg"),
        title:
          "Embrace The Feeling Of Trust By Sharing Your Journey Of Trust With Us",
      },
      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-TrueValue-Happy-Clients.jpg"),
        title: "Stay Tuned To Meet The New Face Of Trust",
      },
      {
        img: require("../../assets/homepage/benefits/Maruti-Suzuki-Authorized-TrueValue-Dealer.jpg"),
        title:
          "Embrace The Feeling Of Trust By Sharing Your Journey Of Trust With Us",
      },
    ],
  ];

  // const navigationPrevRef3 = useRef(null);
  // const navigationNextRef3 = useRef(null);

  return (
    <div className="pt-10 overflow-hidden lg:pt-20">
      <HeadingComponent title="Saboo True Value Assured® Benefits" />
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
      <div className="mb-2 overflow-visible select-none">
        <Swiper
          // pagination={{
          //   type: "fraction",
          // }}
          loop={true}
          // navigation={{
          //   nextEl: navigationNextRef1.current,
          //   prevEl: navigationPrevRef1.current,
          // }}
          // onBeforeInit={(swiper) => {
          //   swiper.params.navigation.prevEl = navigationPrevRef1.current;
          //   swiper.params.navigation.nextEl = navigationNextRef1.current;
          // }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          draggable={false}
          speed={8000}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="relative overflow-visible mySwiper swiper-container-free-mode"
        >
          {/* <div className="absolute z-10 justify-between  w-full gap-4 flex top-[43%] ">
            <div
              className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white rounded-full ml-2 cursor-pointer hover:bg-primary group border-2 border-[#FF8041] border-dashed hover:border-primary "
              // onClick={() => setIsTrue(!isTrue)}
              ref={navigationPrevRef1}
            >
              <BsArrowLeft className="text-2xl duration-500 translate-x-4 group-hover:translate-x-0 text-[#FF8041] xl:text-3xl hover:text-white" />
            </div>
           
            <div
              className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white rounded-full mr-2 cursor-pointer hover:bg-primary group border-2 border-[#FF8041] border-dashed hover:border-primary"
              ref={navigationNextRef1}
            >
              <BsArrowLeft className="text-2xl duration-500 rotate-180 -translate-x-4 group-hover:translate-x-0 text-[#FF8041] xl:text-3xl hover:text-white" />
            </div>
          </div> */}
          {benefitsData[0].map((x, i) => {
            return (
              <SwiperSlide key={i} className="">
                <img
                  src={x.img}
                  alt={x.title}
                  className="shadow max-h-[350px]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mb-10 overflow-visible select-none ">
        <Swiper
          loop={true}
          // navigation={{
          //   nextEl: navigationNextRef2.current,
          //   prevEl: navigationPrevRef2.current,
          // }}
          // onBeforeInit={(swiper) => {
          //   swiper.params.navigation.prevEl = navigationPrevRef2.current;
          //   swiper.params.navigation.nextEl = navigationNextRef2.current;
          // }}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="relative overflow-visible mySwiper swiper-container-free-mode"
        >
          {benefitsData[1].map((x, i) => {
            return (
              <SwiperSlide key={i} className="">
                <img
                  src={x.img}
                  alt={x.title}
                  className="shadow max-h-[350px]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="container mx-auto mb-10 overflow-visible select-none">
        <Swiper
         
          loop={true}
          navigation={{
            nextEl: navigationNextRef3.current,
            prevEl: navigationPrevRef3.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef3.current;
            swiper.params.navigation.nextEl = navigationNextRef3.current;
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
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
          className="relative overflow-visible mySwiper "
        >
          {" "}
          <div className="absolute z-10 justify-between  w-full gap-4 flex top-[43%] ">
            <div
              className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white rounded-full ml-2 cursor-pointer hover:bg-primary group border-2 border-[#FF8041] border-dashed hover:border-primary "
              // onClick={() => setIsTrue(!isTrue)}
              ref={navigationPrevRef3}
            >
              <BsArrowLeft className="text-2xl duration-500 translate-x-4 group-hover:translate-x-0 text-[#FF8041] xl:text-3xl hover:text-white" />
            </div>
            {/* <div
          ref={navigationPrevRef}
          className=" p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125"
        >
          <AiOutlineArrowLeft />
        </div>
            <div
              className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white rounded-full mr-2 cursor-pointer hover:bg-primary group border-2 border-[#FF8041] border-dashed hover:border-primary"
              ref={navigationNextRef3}
            >
              <BsArrowLeft className="text-2xl duration-500 rotate-180 -translate-x-4 group-hover:translate-x-0 text-[#FF8041] xl:text-3xl hover:text-white" />
            </div>
          </div>
          {benefitsData[2].map((x, i) => {
            return (
              <SwiperSlide key={i} className="">
                <img
                  src={x.img}
                  alt={x.title}
                  className="duration-200 shadow cursor-pointer hover:scale-95"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
    </div>
  );
};

export default Benefits;
