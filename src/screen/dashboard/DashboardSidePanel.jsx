import React from "react";
import { Link } from "react-router-dom";

const DashboardSidePanel = ({ setSelected, setOpen }) => {
  const tabs1 = ["Dashboard", "Post A Vehicle", "Manage Vehicles"];
  const tabs2 = [
    "Buy Vehicle",
    "Sell Vehicle",
    "Popup",
    "Contact us",
    "Finance",
  ];

  return (
    <div
      className={`w-[250px] bg-primary h-full  px-4 text-white py-4   rounded-xl font-sans text-lg absolute z-10 border-r lg:static  xl:w-full  `}
    >
      <div className="flex items-end justify-between pb-8">
        <Link to="/">
          <img
            src={require("../../assets/logo/logo-white.png")}
            alt=""
            className="h-10 "
          />
        </Link>
        <p onClick={() => setOpen(false)} className="cursor-pointer xl:hidden">
          Close
        </p>
      </div>
      <p className="px-2 pb-4 text-xl text-gray-300 ">Main </p>
      {tabs1.map((x, i) => {
        return (
          <div>
            <button
              key={i}
              onClick={() => {
                setSelected(i);
                setOpen(false);
              }}
              aria-label={x}
              className="w-full px-2 py-3 mb-2 font-semibold text-center bg-white border-b text-primary rounded-xl lg:hidden"
            >
              {x}
            </button>
            <button
              key={i}
              onClick={() => {
                setSelected(i);
                // setOpen(false);
              }}
              aria-label={x}
              className="hidden w-full px-2 py-3 mb-2 font-semibold text-center bg-white border-b text-primary rounded-xl lg:block"
            >
              {x}
            </button>
          </div>
        );
      })}
      <p className="px-2 py-4 text-xl text-gray-300 ">Manage Enquiry </p>
      {tabs2.map((x, i) => {
        return (
          <div>
            <button
              key={i}
              aria-label={x}
              onClick={() => {
                setSelected(i + 3);
                setOpen(false);
              }}
              className="w-full px-2 py-3 mb-2 font-semibold text-center bg-white border-b text-primary rounded-xl lg:hidden"
            >
              {x}
            </button>{" "}
            <button
              key={i}
              aria-label={x}
              onClick={() => {
                setSelected(i + 3);
                // setOpen(false);
              }}
              className="hidden w-full px-2 py-3 mb-2 font-semibold text-center bg-white border-b text-primary rounded-xl lg:block"
            >
              {x}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardSidePanel;
