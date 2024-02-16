import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "react-router-dom";

const HomepageFAQ = () => {
  const [clickedIndices, setClickedIndices] = useState([]); // Initialize clicked indices state to an empty array
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

  // Function to toggle answer visibility
  const toggleAnswer = (i) => {
    // Check if the clicked index is already in clickedIndices array
    if (clickedIndices.includes(i)) {
      // If yes, remove the index from the array
      setClickedIndices(clickedIndices.filter((index) => index !== i));
    } else {
      // If not, add the index to the array
      setClickedIndices([...clickedIndices, i]);
    }
  };

  return (
    <div className="container py-20 mx-auto">
      <div className="flex items-center justify-center pb-5">
        <div className="w-[70%] border-b border-[#2b349579] hidden lg:block "></div>
        <h2 className="w-full text-3xl font-bold text-center text-truevalue lg:whitespace-nowrap">
          Frequently Asked Questions
        </h2>
        <div className="w-[70%] border-b border-[#2b349579] hidden lg:block "></div>
      </div>

      {data.map((x, i) => {
        return (
          <div
            key={i}
            onClick={() => toggleAnswer(i)} // Toggle answer visibility on click
            className={`p-6 duration-200 cursor-pointer  ${
              clickedIndices.includes(i)
                ? "bg-white  shadow-md  "
                : " border-b border-[#2b3495ee] "
            } my-2 `}
          >
            <div className="flex justify-between ">
              <h5 className="text-lg ">
                <span className="text-[#002efe] pr-6 ">{x.no}. </span>{" "}
                {x.question}
              </h5>
              <IoIosArrowDown
                className={`text-xl  ${
                  clickedIndices.includes(i)
                    ? "text-[#2b3495ee] rotate-180 duration-500"
                    : "text-[#777777]"
                }  `}
              />
            </div>

            {clickedIndices.includes(i) && (
              <div className="text-[#777777] md:pl-[50px] pb-2 md:pb-4">
                <p className="pb-2">{x.answer}</p>
                <p>{x.answer2}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HomepageFAQ;
