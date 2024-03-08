import React, { useState } from "react";
import DashboardSidePanel from "./DashboardSidePanel";
import MainPanel from "./MainPanel";
import DashboardHeader from "./DashboardHeader";

export const SellYourCar = () => {
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-blue-100">
      <div className="flex min-h-screen gap-2 p-2 overflow-hidden duration-200 ">
        <div className={`${!open ? "hidden " : "block"} w-[300px]`}>
          <DashboardSidePanel setSelected={setSelected} open={open} />
        </div>
        <div className="flex flex-col w-full h-full gap-2">
          <DashboardHeader open={open} setOpen={setOpen} selected={selected} />
          <MainPanel selected={selected} />
        </div>
      </div>
    </div>
  );
};
