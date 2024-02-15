import React from "react";

const HowWorks = () => {
  return (
    <div>
      {" "}
      <div className="container px-1 py-10 mx-auto ">
        <div className="pb-10">
          <h2 className="text-4xl font-bold text-center text-truevalue">
            How Saboo TrueValue Works
          </h2>
          <p className="mb-4 text-center">You won't just love our cars, you'll love the way you buy them.</p>
          <h4 className="pb-4 text-2xl font-bold text-center text-truevalue">
            Owning your car made simple
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center ">
              <img
                src={require("../../assets/homepage/carserch.jpg")}
                alt=""
                srcset=""
              />
               <div className="text-xl font-semibold">Choose from the best pre-owned cars</div>
               <p>1,000+ fully inspected cars online</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={require("../../assets/homepage/formfill.jpg")}
                alt=""
                srcset=""
                className="h-[17.8rem]"
              />
               <div className="text-xl font-semibold">Fill the form for selected car</div><p className="">Fill in a few details about you</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={require("../../assets/homepage/carhandover.jpg")}
                alt=""
                srcset=""
              />
               <div className="text-xl font-semibold">Get your own car</div>
               <p>Doorstep Delivery.</p>
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="pb-4 text-2xl font-bold text-center text-truevalue">
            Selling your car made simple
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <img
                src={require("../../assets/homepage/form.jpg")}
                alt=""
                srcset=""
                className="h-[16.2rem] rounded-xl mb-4"
              />
              <div className="text-xl font-semibold">
                Instant online application
              </div>
              <p className="">Fill in a few details about your car</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={require("../../assets/homepage/inspection.jpg")}
                alt=""
                srcset=""
                className=" rounded-xl"
              />
              <div className="text-xl font-semibold">
                Free doorstep evaluation
              </div>
              <p className="">
                Schedule the evaluation at your convenience, from the comfort of
                your home or workplace
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={require("../../assets/homepage/finalpayment.jpg")}
                alt=""
                srcset=""
                className=" rounded-xl"
              />
               <div className="text-xl font-semibold">Same day payment</div>
               <p>Complete payment and paper work on the spot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
