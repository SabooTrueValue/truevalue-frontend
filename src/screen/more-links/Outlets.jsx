import React from "react";
import { Helmet } from "react-helmet";

const Outlets = () => {
  return (
    <>
      <Helmet>
        <title>Discover Quality Used Cars at TrueValue Outlets</title>
        <meta
          name="title"
          content="Discover Quality Used Cars at TrueValue Outlets"
        />
        <meta
          name="description"
          content="Explore our TrueValue outlets for a wide selection of reliable and certified pre-owned cars. With our rigorous inspection process and transparent pricing, you can find your dream car with confidence. Visit us today!"
        />
        <meta
          name="keywords"
          content="Saboo TrueValue, outlets, pre-owned cars, certified, reliable, inspection, transparent pricing"
        />
      </Helmet>
      <img
        src={require("../../assets/other/Truevalue-Finance-Banner.jpg")}
        alt="Privacy Policy"
      />
      <div className="pb-10">
        <div className="container px-2 py-10 mx-auto lg:px-0 ">
          {/* <div className="py-2 text-3xl font-medium uppercase sm:text-4xl md:text-5xl">
      OUTLETS
    </div> */}

          <h1 className="mt-4 mb-8 text-3xl font-bold text-center lg:text-4xl text-primary lg:whitespace-nowrap">
            Our Outlets
          </h1>

          <div className="mb-6 text-center">
            Our conveniently located network of outlets assures the best access
            for all our customers in Hyderabad, Telangana.
            <br className="hidden md:block " /> Find the closest True Value
            dealership to you!
          </div>

          <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 ">
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="500"
              className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden"
            >
              <div className="bg-primary h-32 w-36 duration-500 group-hover:h-[250%] group-hover:w-[250%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
              <div className="mb-4 text-xl font-medium uppercase ">
                Somajiguda
              </div>
              {/* <div className="mb-2">Adarsh Nagar, Hyderabad - 500063</div> */}
              <a
                href="https://www.google.com/maps/place/NEXA/@17.407435,78.472675,14z/data=!4m5!3m4!1s0x0:0x167869bcabc7428b!8m2!3d17.407435!4d78.4726753?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                  style={{
                    //   backgroundImage: `url(${require("../../assets/HomePageImages/SABOO_NEXA_LUMBINI_SHOWROOM_HYDERABAD.webp.webp")})`,
                    backgroundImage:
                      'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/saboo_truevalue_outlet.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="500"
              className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden"
            >
              <div className="bg-primary h-32 w-36 duration-500 group-hover:h-[250%] group-hover:w-[250%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
              <div className="mb-4 text-xl font-medium uppercase ">
                Malakpet
              </div>
              {/* <div className="mb-2">Jubilee Hills, Hyderabad - 500033</div> */}
              <a
                href="https://www.google.com/maps/place/NEXA/@17.439431,78.398485,14z/data=!4m5!3m4!1s0x0:0x1cb759ff5f828d3!8m2!3d17.4394309!4d78.398485?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                  style={{
                    //   backgroundImage: `url(${require("../../assets/HomePageImages/SABOO_NEXA_JUBILEE_HILLS_SHOWROOM_HYDERABAD.webp")})`,
                    backgroundImage:
                      'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/saboo_truevalue_outlet.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="500"
              className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden"
            >
              <div className="bg-primary h-32 w-36 duration-500 group-hover:h-[250%] group-hover:w-[250%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
              <div className="mb-4 text-xl font-medium uppercase ">
                Kompally
              </div>
              {/* <div className="mb-2">Hafeezpet, Hyderabad - 500049</div> */}
              <a
                href="https://goo.gl/maps/rgoP8TXGQ9b3WvYu8"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                  style={{
                    //   backgroundImage: `url(${require("../../assets/HomePageImages/SABOO_NEXA_HAFEEZPET_SHOWROOM_HYDERABAD.webp")})`,
                    backgroundImage:
                      'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/saboo_truevalue_outlet.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="500"
              className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden"
            >
              <div className="bg-primary h-32 w-36 duration-500 group-hover:h-[250%] group-hover:w-[250%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
              <div className="mb-4 text-xl font-medium uppercase ">
                Kushaiguda
              </div>
              {/* <div className="mb-2">Hafeezpet, Hyderabad - 500049</div> */}
              <a
                href="https://goo.gl/maps/rgoP8TXGQ9b3WvYu8"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                  style={{
                    //   backgroundImage: `url(${require("../../assets/HomePageImages/SABOO_NEXA_HAFEEZPET_SHOWROOM_HYDERABAD.webp")})`,
                    backgroundImage:
                      'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/truevalue/saboo_truevalue_outlet.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outlets;
