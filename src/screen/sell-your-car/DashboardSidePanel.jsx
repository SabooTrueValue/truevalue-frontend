import React from "react";

const DashboardSidePanel = ({ setSelected }) => {
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
      className={`w-[300px] bg-truevalue h-full  px-4 text-white py-4 md:block hidden  rounded-xl `}
    >
      <div className="pb-8 ">
        <img
          src={require("../../assets/logo/logo-white.png")}
          alt=""
          srcset=""
          className="h-10 "
        />
      </div>
      <p className="px-2 pb-4 text-xl text-gray-300 ">Main </p>
      {tabs1.map((x, i) => {
        return (
          <button
            key={i}
            onClick={()=>setSelected(i)}
            aria-label={x}
            className="w-full px-2 py-3 mb-2 font-bold text-center bg-white border-b text-truevalue rounded-xl"
          >
            {x}
          </button>
        );
      })}
      <p className="px-2 py-4 text-xl text-gray-300 ">Manage Enquiry </p>
      {tabs2.map((x, i) => {
        return (
          <button
            key={i}
            aria-label={x}
            onClick={()=>setSelected(i+3)}
            className="w-full px-2 py-3 mb-2 font-bold text-center bg-white border-b text-truevalue rounded-xl"
          >
            {x}
          </button>
        );
      })}
    </div>
  );
};

export default DashboardSidePanel;
