import "swiper/css";

import {  useRef } from "react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import { Swiper, SwiperSlide } from "swiper/react";
// import { GrFormNext } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

// import required modules
import {
  Pagination,
  Autoplay,
  Navigation,
  // EffectCreative,
} from "swiper/modules";

function CarSlider2({ sliders }) {
  console.log(sliders);
  const data = [
    sliders["image1"]["img1"],
    sliders["image2"]["img2"],
    sliders["image3"]["img3"],
    sliders["image4"]["img4"],
    sliders["image5"]["img5"],
    sliders["image6"]["img6"],
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  //console.log(sliders)

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {data?.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              src={slider}
              className="object-cover w-full h-[70vh] overflow-hidden "
              alt="Saboo True Value Car"
            />
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className="absolute z-10 p-1 rounded-full shadow-xl cursor-pointer select-none left-3 sm:left-10 top-1/2 sm:top-1/2 bg-white/60 hover:bg-primary sm:p-3 hover:text-white"
        >
          <GrFormNext className="rotate-180 " />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute z-10 p-1 rounded-full shadow-xl cursor-pointer select-none right-3 sm:right-10 top-1/2 sm:top-1/2 bg-white/60 hover:bg-primary sm:p-3 hover:text-white"
        >
          <GrFormNext />
        </div>
      </Swiper>
    </>
  );
}

export default CarSlider2;
