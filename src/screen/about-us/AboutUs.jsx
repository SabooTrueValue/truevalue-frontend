import React from "react";
import HomeNav from "../homepage/HomeNav";

export const AboutUs = () => {
  return (
    <div>
      <HomeNav option={true} />
      <img
        src={require("../../assets/about-us/Maruti-Suzuki-TrueValue-Showrrom.jpg")}
        alt=""
        srcSet=""
      />
      <div className="container pb-10 mx-auto space-y-4">
        {" "}
        <img
          src={require("../../assets/about-us/Truevalue-About-us-Banner.jpg")}
          alt=""
          srcSet=""
          className="mb-10 -mt-10 rounded-2xl drop-shadow-2xl"
        />
        <p>
          Over 10,200 Happy Sellers and Counting
          <span className="animate-pulse">...</span>
        </p>
        <p>
          Saboo RKS embarked on its journey in 2003 with the noble objective of
          providing customers with top-tier, certified pre-owned vehicles. Our
          inventory comprises cars meticulously certified by seasoned Maruti
          Suzuki evaluators, coupled with a warranty extending up to 1 year or
          20,000 kilometers (whichever occurs earlier from the delivery date)
          and inclusive of 3 complimentary services. What sets us apart is our
          unwavering commitment to honesty and transparency, making us the
          epitome of trustworthiness in the realm of pre-owned car transactions.
          We firmly believe that purchasing a pre-owned vehicle should be as
          seamless as acquiring a new one. Hence, we boast an extensive array of
          pre-owned cars for sale, complemented by an array of services such as
          insurance, financing, and accessories, ensuring comprehensive coverage
          for all your automotive needs under one roof. Maruti Suzuki True Value
          stands as the beacon for quality pre-owned automobiles.
        </p>
        <p>
          At Maruti Suzuki True Value, a stringent protocol is adhered to for
          assessing the quality of pre-owned vehicles!
        </p>
        <p>
          Each vehicle undergoes a meticulous digital evaluation encompassing
          376 points, covering critical aspects such as engine performance,
          suspension integrity, braking system efficiency, transmission
          proficiency, and steering control, along with scrutiny of electrical
          fittings, among others. Subsequently, the vehicle undergoes
          refurbishment at an authorized Maruti Suzuki Service Centre, utilizing
          only genuine Maruti Suzuki parts and accessories. Following this
          comprehensive evaluation, a digital certificate is issued, affirming
          the vehicle's fitness for operation. These rigorous assessments ensure
          that you embark on your journey with utmost trust and confidence, free
          from any apprehensions. We provide unparalleled assistance in
          selecting the perfect vehicle tailored to our customers' preferences,
          alongside offering the most favorable financing options, all backed by
          our unparalleled commitment to reliable and convenient service.
        </p>
        <p>
          Conveniently situated in strategic locales across Hyderabad, we
          operate four True Value outlets in Somajiguda, Malakpet, Kushaiguda,
          and Kompally, ensuring accessibility and convenience for our esteemed
          customers.
        </p>
      </div>
    </div>
  );
};
