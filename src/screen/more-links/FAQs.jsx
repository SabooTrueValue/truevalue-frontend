import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const FAQS = () => {
  const data = [
    {
      no: "01",
      question: "How do I go about consuming the supplements?",
      answer:
        " It’s easy-peasy. Our supplements come in an easy-to-consume powder formula which you can directly have from the stick. A pack of 30 sticks is made for a one month supply. Take one per day for a period  of 90 days. ",
      answer2: "",
    },
    {
      no: "02",
      question: "What kind of testing do you do?",
      answer:
        "Giving you only the best is at the core of our intentions. To ensure we’re only putting out the highest quality products, each product undergoes stringent checks for ingredients, dosage and precision at our facility. To ensure impartiality, we also conduct third-party testing to ensure our products meet regulatory standards and guidelines.      ",
      answer2:
        "Your trust and well-being are of utmost importance to us. That's why we hold ourselves to the highest standards and make testing an integral part of our process. With Nuform, you can have confidence in the quality and consistency of our products.      ",
    },
    {
      no: "03",
      question: "How long until I see results?",
      answer:
        "It takes 21 days for any good habit to be formed. But you’ll see the difference in just 10 days with Skin101 but to see its magic in full power, we recommend taking it for 4 weeks.      ",
      answer2:
        "You can see “second product” in full-blown action within 4-6 weeks, we recommend you take it for 90 days for everlasting effects.      ",
    },
    {
      no: "04",
      question: "How and when should I take the skin supplement?",
      answer:
        "You can gulp the powder before or after food. This hassle free format also helps you take it on the go because we know life is H-E-C-T-I-C!      ",
      answer2: "",
    },
    {
      no: "05",
      question: " Are your supplements suitable for vegetarians/vegans?    ",
      answer:
        "Yes! We offer products suitable for vegetarians. You can find this information clearly labeled on our product packaging and website      ",
      answer2: "",
    },
  ];
  return (
    <section className="">
      <img
        src={require("../../assets/other/Cars-range.webp")}
        alt="Privacy Policy"
      />
      <div className="container px-1 pt-5 mx-auto ">
        <h3 className="mb-2 text-2xl text-center md:text-3xl text-primary">
          Frequently Asked Questions
        </h3>
        <h5 className="mb-3 lg:mb-8 md:text-center ">
          Have any questions? Take a look & maybe we can answer them right now.
          If not, write to us at{" "}
          <a
            href="mailto:info@saboomaruti.in"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            info@saboomaruti.in
          </a>
        </h5>

        <div className="pt-10 pb-14 lg:pb-20">
          {data.map((x, i) => {
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
                    <h5 className="py-2 md:text-lg lg:text-xl ">
                      <span className="pr-3 text-primary">{x.no}. </span>{" "}
                      {x.question}
                    </h5>
                  </AccordionSummary>
                  <AccordionDetails className="ml-4 -mt-4 lg:ml-12 ">
                    <p className="pb-2 ">{x.answer}</p>
                    <p>{x.answer2}</p>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
