import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const FAQS = () => {
  const [selected, setSelected] = React.useState(0);
  const data = [
    [
      {
        no: "01",
        question: "Where can I get my car evaluated?",
        answer:
          " After you submit your details to ‘Request for Evaluation’, you can either go for a doorstep evaluation or get your car evaluated at the nearest True Value Outlet. ",
      },
      {
        no: "02",
        question: "What is the procedure to get my car evaluated?",
        answer:
          "You can visit the True Value website or app to book your car’s evaluation. What’s more, you can either opt for a doorstep evaluation or get it done at your nearest True Value outlet. ",
      },
      {
        no: "03",
        question: " What all do you check during a Pre-Owned car evaluation? ",
        answer:
          "Maruti Suzuki True Value has an exhaustive check list of 376 quality checkpoints, including thorough inspection of exteriors, interiors, structural damage, and engine for mechanical wear and tear.                                     ",
      },
      {
        no: "04",
        question:
          " Do I need to pay any additional charges or commissions when getting my car evaluated, or selling to Maruti Suzuki True Value? ",
        answer:
          "You do not need to pay any additional charges or commissions when you get your car evaluated or when you sell your car to a True Value outlet.    ",
      },
      {
        no: "05",
        question: "  How will you ensure that I am getting the best price? ",
        answer:
          "The True Value price of your car is calculated through Maruti Suzuki True Value’s digital evaluation process to give you the most realistic price.  ",
      },
      {
        no: "06",
        question: " How will you ensure that the process is hassle-free? ",
        answer:
          "Once you decide to sell your car to Maruti Suzuki True Value, our professionals evaluate your car as per the defined process. Thereafter, we make the payment in full.",
      },
      {
        no: "07",
        question:
          "What happens to my car once I sell it to Maruti Suzuki True Value? ",
        answer:
          "Once you sell your car to us, it undergoes a stringent quality assessment followed by a refurbishment process to ensure that it is in top condition. After that, it will be put on sale.",
      },
      {
        no: "08",
        question: "In how much time will I get my money after selling my car?",
        answer:
          "The payment is made at the earliest* and in full once the seller’s i.e. your bona fides are verified at the RTO.",
      },
      {
        no: "09",
        question:
          " Is it necessary to have valid insurance on my car at the time of selling?",
        answer:
          "Car Insurance is mandated by law, so whether it is an old car you have or a relatively new one, it is always ideal that your car is insured.",
      },
      {
        no: "10",
        question:
          " My car is hypothecated to the bank I took the loan from. Can I still sell it?",
        answer:
          "If your car is hypothecated to the loan providing bank, you can only sell it once you have repaid the loan amount in full and got the hypothecation removed.",
      },
    ],
    [
      {
        no: "01",
        question:
          " Do I have to register online on your website to sell a used car at Maruti Suzuki True Value? ",
        answer:
          " No, you do not need to do that. You can simply request for an evaluation through the website or mobile app, and we shall get in touch with you. You can also visit a Maruti Suzuki True Value dealer in your city for the same purpose. ",
        answer2:
          "However, registering online will allow you to know about the latest offers, promotions, discounts and customer events at Maruti Suzuki True Value.",
      },
      {
        no: "02",
        question:
          "  Someone else uploaded information about my car, but I want to get it removed. What should I do now? ",
        answer:
          "We apologize for the inconvenience. Please share with us your vehicle’s details on contact@maruti.co.in, and the Maruti Suzuki True Value team will get it addressed as soon as possible.",
      },
      {
        no: "03",
        question: " What are the payment options available?",
        answer:
          " You can pay in a number of ways; including by cash, pay order, credit card, cheque, demand draft, etc. We also have affiliations with a number of financial institutions, and can assist you in availing used car loans.     ",
      },
      {
        no: "04",
        question:
          " Which car brands are available at Maruti Suzuki True Value? ",
        answer:
          "Apart from Maruti Suzuki models, we have pre-owned car models from many other brands, to meet your driving needs and preferences. You can check on the website or the mobile app to see what is available, or you can contact a Maruti Suzuki True Value outlet near you.",
      },
      {
        no: "05",
        question: "  Do you accept car exchanges?  ",
        answer:
          "Yes. While we do specialize in exchanging cars, even after you sell to us, you are under no obligation to buy. ",
      },
      {
        no: "06",
        question:
          "  Do I need to make an appointment before visiting a Maruti Suzuki True Value showroom? ",
        answer: `If you need to sell or exchange your car, you can simply submit a request for car evaluation by visiting the website or mobile app. To start the process, our authorized True Value evaluator will come and evaluate your car right at your doorstep.
If you plan to buy a Maruti Suzuki True Value certified pre-owned car –


 ⦁ You can visit our website or mobile app to browse through the various pre-owned cars available.

 ⦁ Filter as per your Location and Price Range.

 ⦁ Select a used car, provide your mobile number, and book a test drive.

Or, you can simply walk in to a Maruti Suzuki True Value showroom near you; it is all as per what’s convenient for you. `,
      },
      {
        no: "07",
        question: "Buy Quality Used Car in Hyderabad?",
        answer:
          "Maruti Suzuki True Value is best place to buy used cars at Hyderabad; each and every pre-owned car is assessed and evaluated on 376 checkpoints to ensure not only quality but also complete peace of mind for the customers. Get your own pre-owned Maruti Suzuki car from Maruti Suzuki True Value! Used Cars: https://sabootruevalue.in/buy-used-cars ",
      },
      {
        no: "08",
        question: " Buy Verified Used Car?  ",
        answer:
          "Maruti Suzuki True Value is best place to buy verified used cars At True Value, the history of each used car is checked and verified on three key aspects - kilometers driven, ownership and service records. Knowing is believing, which is why at True Value, you'll find only those pre-owned cars which have been verified on key aspects related to the car's history. Drive home your favorite True Value pre-owned car with peace of mind, and complete. Used Cars: https://sabootruevalue.in/ ",
      },
      {
        no: "09",
        question: " Used Car for Sale in Hyderabad? ",
        answer:
          "Visit nearest SabooMaruti showroom for Quality,Verified, Certified all model used cars with best price and warranty.Visit : https://sabootruevalue.in/buy-used-cars",
      },
      {
        no: "10",
        question: "Certified used cars in Hyderabad  ",
        answer:
          "At Maruti Suzuki True Value, the term ‘True Value’ takes on an all-important meaning. It is a sum of key aspects that every True Value certified pre-owned car adheres to, and value-adds that the car comes with, to ensure transparency, reliability and most importantly, customer delight.",
        answer2: "Visit: https://sabootruevalue.in/buy-used-cars",
      },
    ],
    [
      {
        no: "01",
        question: " Why should I buy from Maruti Suzuki True Value? ",
        answer:
          " At Maruti Suzuki True Value, your peace of mind is our first priority. Along with our expertise and trust, we provide numerous advantages to ease your buying experience.",
      },
      {
        no: "02",
        question:
          " What are the benefits of buying a Maruti Suzuki True Value certified per-owned car? ",
        answer:
          "Every Maruti Suzuki True Value certified Pre-Owned car comes with the seal of quality assurance. You also get a warranty of up to one year* and three free services*. ",
      },
      {
        no: "03",
        question:
          " What all do you check during a Pre-Owned car evaluation?  Are there any quality checks in the pre-owned cars sold by Maruti Suzuki True Value? ",
        answer:
          "True Value certified pre-owned cars undergo 376 quality checks to ensure that they are in great condition at the time of sale. ",
      },
      {
        no: "04",
        question: "  Is there any finance facility available? ",
        answer:
          "Yes, there are a number of affordable finance options available. To know more about the options available, you can simply visit the nearest True Value outlet. ",
      },
      {
        no: "05",
        question:
          "  Will the car that I buy from Maruti Suzuki True Value come with insurance? ",
        answer:
          "Once the Registration Certificate (RC) name transfer has been completed, the existing insurance policy can be transferred in your name within 10 days.",
      },
      {
        no: "06",
        question:
          "   What papers will I receive when I buy a pre-owned car from Maruti Suzuki True Value? ",
        answer:
          "When you buy a Pre-Owned car from us, you will receive the Booking Form, Delivery Letter, Certificate (only for True Value Certified cars), Service manual, Insurance Policy, Registration Certificate (if not hypothecated) and Pollution Under Control (PUC) Certificate.",
      },
      {
        no: "07",
        question: "  Are Accessories available for Pre-Owned cars?  ",
        answer:
          "Yes, there is a wide variety of accessories available for different Maruti Suzuki models. Please visit your nearest outlet to get more details.",
      },
    ],
  ];
  return (
    <section className="">
      <img
        src={require("../../assets/other/Cars-range.webp")}
        alt="Privacy Policy"
      />
      <div className="container px-1 pt-5 mx-auto ">
        <div className="mb-2 text-2xl text-center md:text-3xl text-primary">
          Frequently Asked Questions
        </div>
        <div className="mb-3 lg:mb-8 md:text-center ">
          Have any questions? Take a look & maybe we can answer them right now.
          If not, write to us at{" "}
          <a
            href="mailto:info@saboomaruti.in"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
            aria-label="Email Us"
          >
            info@saboomaruti.in
          </a>
        </div>

        <div>
          <div className="flex justify-center gap-2 mb-4 select-none ">
            <div
              onClick={() => setSelected(0)}
              className={`p-2 rounded-lg  lg:px-4 cursor-pointer ${
                selected === 0 ? "bg-primary text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              Selling
            </div>
            <div
              onClick={() => setSelected(1)}
              className={`p-2 rounded-lg  lg:px-4 cursor-pointer ${
                selected === 1 ? "bg-primary text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              General FAQs
            </div>
            <div
              onClick={() => setSelected(2)}
              className={`p-2 rounded-lg  lg:px-4 cursor-pointer ${
                selected === 2 ? "bg-primary text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              Buying
            </div>
          </div>
        </div>

        {selected === 0 ? (
          <div className="pt-10 text-xs pb-14 lg:pb-20 md:text-base sm:text-sm">
            {data[0].map((x, i) => {
              return (
                <div
                  key={i}
                  className={` duration-200 cursor-pointer border-b border-primary rounded mb-3 `}
                >
                  <Accordion
                    style={{ boxShadow: "0 1px 1px rgba(0, 0, 0, 0.3)" }}
                    className=""
                  >
                    <AccordionSummary
                      expandIcon={<IoIosArrowDown className="text-primary" />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className=""
                    >
                      <div className="py-2 md:text-lg lg:text-xl ">
                        <span className="pr-3 text-primary">{x.no}. </span>{" "}
                        {x.question}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="ml-4 -mt-4 lg:ml-12 ">
                      <p className="pb-2 ">{x.answer}</p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
        ) : selected === 1 ? (
          <div className="pt-10 text-xs pb-14 lg:pb-20 md:text-base sm:text-sm">
            {data[1].map((x, i) => {
              return (
                <div
                  key={i}
                  className={` duration-200 cursor-pointer border-b border-primary rounded mb-3 `}
                >
                  <Accordion
                    style={{ boxShadow: "0 1px 1px rgba(0, 0, 0, 0.3)" }}
                    className=""
                  >
                    <AccordionSummary
                      expandIcon={<IoIosArrowDown className="text-primary" />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className=""
                    >
                      <div className="py-2 md:text-lg lg:text-xl ">
                        <span className="pr-3 text-primary">{x.no}. </span>{" "}
                        {x.question}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="ml-4 -mt-4 lg:ml-12 ">
                      <p className="">{x.answer}</p>
                      <p className="">{x.answer2}</p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="pt-10 text-xs pb-14 lg:pb-20 md:text-base sm:text-sm">
            {data[2].map((x, i) => {
              return (
                <div
                  key={i}
                  className={` duration-200 cursor-pointer border-b border-primary rounded mb-3 `}
                >
                  <Accordion
                    style={{ boxShadow: "0 1px 1px rgba(0, 0, 0, 0.3)" }}
                    className=""
                  >
                    <AccordionSummary
                      expandIcon={<IoIosArrowDown className="text-primary" />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className=""
                    >
                      <div className="py-2 md:text-lg lg:text-xl ">
                        <span className="pr-3 text-primary">{x.no}. </span>{" "}
                        {x.question}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="ml-4 -mt-4 lg:ml-12 ">
                      <p className="pb-2 ">{x.answer}</p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQS;
