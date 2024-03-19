import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HeadingComponent from "../../components/Other/HeadingComponent";
// import { Link } from "react-router-dom";

const HomepageFAQ = () => {
  const [clickedIndices, setClickedIndices] = useState([]); // Initialize clicked indices state to an empty array

  const data = [
    {
      no: "01",
      question: " Where can I get my car evaluated? ",
      answer:
        " After you submit your details to ‘Request for Evaluation’, you can either go for a doorstep evaluation or get your car evaluated at the nearest True Value outlet.        ",
      answer2: "",
    },
    {
      no: "02",
      question: " What all do you check during a Pre-Owned car evaluation? ",
      answer:
        "Maruti Suzuki True Value has an exhaustive check list of 376 quality checkpoints, including thorough inspection of exteriors, interiors, structural damage, and engine for mechanical wear and tear.",
      answer2: " ",
    },
    {
      no: "03",
      question:
        " Do I need to pay any additional charges or commissions when getting my car evaluated, or selling to Maruti Suzuki True Value? ",
      answer:
        "No, there are no additional charges or commissions when you get your car evaluated or sell it to Maruti Suzuki True Value.        ",
      answer2: "",
    },
    {
      no: "04",
      question: "How will you ensure that I am getting the best price? ",
      answer: " How will you ensure that I am getting the best price?      ",
      answer2: "",
    },
    {
      no: "05",
      question: " How will you ensure that the process is hassle-free? ",
      answer:
        "Once you decide to sell your car to Maruti Suzuki True Value, our professionals evaluate your car as per the defined process. Thereafter, we make the payment in full.        ",
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
    <div className="container pb-20 mx-auto">
      <HeadingComponent title="Frequently Asked Questions" />

      {data.map((x, i) => {
        return (
          <div
            key={i}
            onClick={() => toggleAnswer(i)} // Toggle answer visibility on click
            className={`p-6 duration-200 cursor-pointer  ${
              clickedIndices.includes(i)
                ? "bg-white  shadow-md  "
                : " border-b border-primary "
            } my-2 `}
          >
            <div className="flex justify-between ">
              <h5 className="text-lg ">
                <span className="pr-6 text-primary ">{x.no}. </span>{" "}
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
              <div className="text-[#777777] md:pl-[50px] pb-2 md:pb-4 lg:pb-6">
                <p className="">{x.answer}</p>
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
