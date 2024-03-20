import React, { useRef } from "react";
import HeadingComponent from "../../components/Other/HeadingComponent";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// import BMWi3 from "../../assets/homepage/BMW i3.png";
// import JeepWrangler from "../../assets/Home/Jeep Wrangler.png";
// import AudiQ5 from "../../assets/Home/Audi Q5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeft } from "react-icons/bs";
import CarCard from "../../components/Other/CarCard";
// import "./HomeSlider.css";

const FeaturedCars = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="container px-1 mx-auto ">
        <HeadingComponent title="Featured True Value Car" />
        <p className="mb-10 text-center">
          Stay updated with all the latest vehicles at Saboo RKS – True Value
        </p>
        <div className="">
          <LimitedEditonCarSlider />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;

function LimitedEditonCarSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const data = [
    {
      img: "https://sabootruevalue.in/admin/img/vehicleimages/TS08/1.jpg",
      title: "Jeep Wrangler",
      detail: "Automatic ",
      power: "1998 cc",
      killometerDriven: "71K",
      type: "Petrol",
      year: "2018",
      price: "7.52",
      emiPrice: "7,562",
      location: "Malakpet",
    },
    {
      img: "https://sabootruevalue.in/admin/img/vehicleimages/TS36/1.jpg",
      title: "BMW i3",
      detail: "RWD & AWD",
      power: "1995 to 2998 cc",
      killometerDriven: "90K",
      type: "CNG & Diesel",
      year: "2021",
      price: "8.44",
      emiPrice: "8,464",
      location: "Kompally",
    },
    {
      img: "https://sabootruevalue.in/admin/img/vehicleimages/TS09/1.jpg",
      title: "Audi Q5",
      detail: "4WD / AWD",
      power: "1968 to 1984 cc",
      killometerDriven: "65K",
      type: "CNG & Diesel",
      year: "2020",
      price: "10.50",
      emiPrice: "10,560",
      location: "Kushaiguda",
    },
    {
      img: "https://sabootruevalue.in/admin/img/vehicleimages/Ts09/1.jpg",
      title: "Jeep Wrangler",
      detail: "Automatic ",
      power: "1998 cc",
      killometerDriven: "70K",
      type: "Electric",
      year: "2022",
      price: "6.52",
      emiPrice: "6,562",
      location: "Kompally",
    },
    {
      img: "https://sabootruevalue.in/admin/img/vehicleimages/TS07/1.jpg",
      title: "BMW i3",
      detail: "RWD & AWD",
      power: "1995 to 2998 cc",
      type: "Petrol ",
      killometerDriven: "80K",
      year: "2019",
      price: "7.52",
      emiPrice: "7,562",
      location: "Malakpet",
    },
    {
      img: "https://sabootruevalue.in/admin/img/vehicleimages/TS34/1.jpg",
      title: "Audi Q5",
      detail: "4WD / AWD",
      power: "1968 to 1984 cc",
      type: " Diesel",
      killometerDriven: "90K",
      year: "2020",
      price: "5.52",
      emiPrice: "5,562",
      location: "Somajiguda",
    },
  ];

  return (
    <>
      <div className="relative overflow-visible select-none ">
        <Swiper
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
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
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
          className="container pt-10 pl-10 pr-2 mx-auto overflow-hidden bg-transparent mySwiper "
        >
          {/* <div className="h-10"></div> */}
          <div className="absolute z-10 justify-between  w-full gap-4 flex top-[43%] ">
            <div
              className="flex items-center justify-center w-10 h-10 ml-2 text-white border-2 border-white border-dashed rounded-full cursor-pointer xl:w-12 xl:h-12 hover:bg-primary group hover:border-primary "
              // onClick={() => setIsTrue(!isTrue)}
              ref={navigationPrevRef}
            >
              <BsArrowLeft className="text-2xl text-white duration-500 translate-x-4 group-hover:translate-x-0 xl:text-3xl" />
            </div>

            <div
              className="flex items-center justify-center w-10 h-10 mr-2 text-white border-2 border-white border-dashed rounded-full cursor-pointer xl:w-12 xl:h-12 hover:bg-primary group hover:border-primary"
              ref={navigationNextRef}
            >
              <BsArrowLeft className="text-2xl text-white duration-500 rotate-180 -translate-x-4 group-hover:translate-x-0 xl:text-3xl" />
            </div>
          </div>
          <div className="px-2 overflow-hidden">
            {data.map((x, i) => {
              return (
                <SwiperSlide key={i} className="relative pb-4 group">
                  <CarCard carData={x} />
                </SwiperSlide>
              );
            })}
          </div>
          <div className="h-4"></div>
        </Swiper>
      </div>
    </>
  );
}
