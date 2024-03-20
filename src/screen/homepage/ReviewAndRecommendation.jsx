import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingComponent from "../../components/Other/HeadingComponent";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ReviewAndRecommendation = () => {
  const blogsData = [
    {
      review:
        "I purchased a pre-owned Alto from True Value Shaheedpath. My overall experience has been wonderful. I got the kind of car I was looking for well within my budget. They have quite a wide-ranging stock of cars and the way the staff helped me throughout was quite admirable. Very satisfied with my purchase from True Value and Maruti Suzuki.",
      name: "Mr. Aman Agarwal",
      rating: "5",
    },
    {
      review:
        "This was the fastest and easiest car purchase I have experienced. I purchased the car in Feb 2020 and the dealing was upfront and honest. I even got the RC transfer in the first week of Mar 2020, within a month even though the max. time mentioned was 4 months. This transparency makes me trust True Value where my overall experience was excellent!",
      name: "Mr. Iqbal Ahmad",
      rating: "5",
    },
    {
      review:
        "I have purchased a Maruti Suzuki WagonR from DD Motors True Value showroom. The vehicle is in great condition and the service provided by the staff is of a very high standard. Keep up the good work.",
      name: "Col. Lourembam Jiten Singh",
      rating: "5",
    },
    {
      review:
        "Everything at the True Value dealer in Chinchwad, Pune was very clear and systematic. Thanks to that, my experience of buying a pre-owned Swift has turned out to be better than expected. After seven months of buying the car, I’d say that I have got a pretty good deal.",
      name: "Mr. Ajay Anand",
      rating: "5",
    },
    {
      review:
        "I went into the True Value showroom with the mood to survey, and ended up buying the car I have been planning for, a Swift Dzire, much sooner than I had planned to. I really like their extensive car valuation process, and the fact that I am getting three free services.",
      name: "Mr. Mohan Krishna",
      rating: "4",
    },
    {
      review:
        "Based on my experience throughout my True Value car purchase, I can trust Maruti Suzuki. Everything was done right in front of my eye, and I got an honest value for my old car. In above to all, the experience that I got was as good as that of buying a new car.",
      name: "Mrs. Santosh",
      rating: "4",
    },
    {
      review:
        "I have never been an advocate of buying a pre-owned car, but that perception has changed with Maruti Suzuki True Value. Everything is right there on paper, and they even do the evaluation digitally! Overall, a pleasant experience because I know exactly what I am paying for.",
      name: "Mrs. Krishna",
      rating: "4",
    },
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="container py-10 mx-auto ">
      <HeadingComponent title="Review & Recommendation" />
      <p className="mb-10 text-center">
        Stay up to date with all of the latest vehicles and offers with Saboo
        RKS TrueValue
      </p>

      <div className="container mx-auto mb-10 overflow-visible select-none">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
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
          className="relative overflow-visible mySwiper"
        >
          {" "}
         
          {blogsData.map((x, i) => {
            return (
              <SwiperSlide key={i} className="overflow-hidden ">
                <div className=" overflow-hidden bg-[#ebedff] duration-200 h-full  rounded-xl group border hover:border-primary  ">
                  <div className="p-4 my-auto space-y-3 text-left lg:p-6">
                    <div className="flex gap-2 pb-2">
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar
                        className={` ${
                          x.rating === "5" ? "text-primary" : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="pb-2 text-sm tracking-wide text-justify">
                      {x.review}
                    </div>
                    <div className="italic">~ {x.name}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="mt-6"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewAndRecommendation;
