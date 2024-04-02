import React from "react";
import VehicleOwnerForm2 from "./VehicleOwnerForm2";
import { Helmet } from "react-helmet";

const SellYourCar = () => {
  const backgroundStyle = {
    backgroundImage: `radial-gradient(circle at 77% 66%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 9%,transparent 9%, transparent 43%,transparent 43%, transparent 100%),radial-gradient(circle at 6% 56%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 20%,transparent 20%, transparent 56%,transparent 56%, transparent 100%),radial-gradient(circle at 48% 45%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 15%,transparent 15%, transparent 85%,transparent 85%, transparent 100%),radial-gradient(circle at 89% 6%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 5%,transparent 5%, transparent 32%,transparent 32%, transparent 100%),radial-gradient(circle at 71% 38%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 14%,transparent 14%, transparent 21%,transparent 21%, transparent 100%),radial-gradient(circle at 84% 78%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 11%,transparent 11%, transparent 85%,transparent 85%, transparent 100%),radial-gradient(circle at 92% 72%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 42%,transparent 42%, transparent 51%,transparent 51%, transparent 100%),radial-gradient(circle at 73% 95%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 48%,transparent 48%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 29% 29%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 24%,transparent 24%, transparent 73%,transparent 73%, transparent 100%),linear-gradient(90deg, hsl(147,0%,99%),hsl(147,0%,99%))`,
  };

  const sellingSteps = [
    {
      src: require("../../assets/homepage/form.jpg"),
      alt: "Instant online application",
      text: "Instant online application",
      description: "Fill in a few details about your car",
    },
    {
      src: require("../../assets/homepage/inspection.jpg"),
      alt: "Free doorstep evaluation",
      text: "Free doorstep evaluation",
      description:
        "Schedule the evaluation at your convenience, from the comfort of your home or workplace",
    },
    {
      src: require("../../assets/homepage/finalpayment.jpg"),
      alt: "Same day payment",
      text: "Same day payment",
      description: "Complete payment and paperwork on the spot",
    },
  ];

  return (
    <div className="min-h-[90vh] overflow-hidden">
      <Helmet>
        <title>Sell Your Car Hassle-Free with TrueValue</title>
        <meta
          name="title"
          content=" Sell Your Car Hassle-Free with TrueValue"
        />
        <meta
          name="description"
          content="Experience the convenience of selling your car hassle-free with TrueValue. Whether it's time for an upgrade or you're looking to sell your current vehicle, TrueValue offers a seamless process with fair valuations and transparent transactions. Say goodbye to the stress of selling your car and hello to a hassle-free experience with TrueValue!"
        />
        <meta
          name="keywords"
          content="Saboo TrueValue, sell car, hassle-free, fair valuation, transparent transaction, convenience, seamless process
"
        />
      </Helmet>
      <div
        style={backgroundStyle}
        className="flex items-start justify-center h-screen py-12 lg:pt-20 lg:pb-20"
      >
        <VehicleOwnerForm2 />
      </div>
      <div className="py-10 bg-white lg:py-20">
        <h4 className="pb-4 text-xl font-bold text-center uppercase text-primary">
          Selling your car made simple
        </h4>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Loop through the sellingSteps array and render each step */}
          {sellingSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center duration-300 hover:text-primary"
            >
              <img
                src={step.src}
                alt={step.alt}
                className="mb-2 rounded-lg md:max-h-64 max-h-40 "
              />
              <div className="text-lg font-semibold">{step.text}</div>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellYourCar;
