import React from "react";
import { LuLogOut } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

const DashboardHeader = ({ open, setOpen, selected }) => {
  const tabs1 = [
    "Dashboard",
    "Post A Vehicle",
    "Manage Vehicles",
    "Buy Vehicle",
    "Sell Vehicle",
    "Popup",
    "Contact us",
    "Finance",
  ];

  return (
    <div className="">
      <div className="grid grid-cols-3 p-4 text-white bg-primary rounded-xl">
        <div
          className="flex flex-col justify-center text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiMenuAlt2 /> : <HiMenuAlt3 />}
        </div>
        <div className="text-2xl text-center">{tabs1[selected]}</div>
        <div className="flex justify-end gap-8 text-lg">
          <div className="flex items-center gap-3 cursor-pointer ">
            Admin <FaRegUser className="" />
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            Logount <LuLogOut className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
