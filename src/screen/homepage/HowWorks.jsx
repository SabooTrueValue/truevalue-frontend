import React from "react";
import HeadingComponent from "../../components/Other/HeadingComponent";

const HowWorks = () => {
  // Define arrays of objects containing image source, alt text, and description for both buying and selling sections
  const buyingSteps = [
    {
      src: require("../../assets/homepage/carserch.jpg"),
      alt: "Choose from the best pre-owned cars",
      text: "Choose from the best pre-owned cars",
      description: "1,000+ fully inspected cars online",
    },
    {
      src: require("../../assets/homepage/formfill.jpg"),
      alt: "Fill the form for selected car",
      text: "Fill the form for selected car",
      description: "Fill in a few details about you",
    },
    {
      src: require("../../assets/homepage/carhandover.jpg"),
      alt: "Get your own car",
      text: "Get your own car",
      description: "Doorstep Delivery.",
    },
  ];

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
    <div className="container px-1 pt-10 mx-auto lg:pt-16">
      <div className="pb-10">
        <HeadingComponent title="How Saboo True Value Works" />
        <p className="mb-6 text-center">
          You won't just love our cars, you'll love the way you buy them.
        </p>
        <h4 className="pb-4 text-xl font-bold text-center uppercase text-primary">
          Owning your car made simple
        </h4>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Loop through the buyingSteps array and render each step */}
          {buyingSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center hover:text-primary"
            >
              <img
                src={step.src}
                alt={step.alt}
                className="mb-2 md:max-h-64 max-h-40"
              />
              <div className="text-lg font-semibold">{step.text}</div>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
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

export default HowWorks;
