import React, { useState } from "react";
import DashboardSidePanel from "./DashboardSidePanel";
import MainPanel from "./MainPanel";
import DashboardHeader from "./DashboardHeader";

export const DashboardHomepag = () => {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <div className="flex h-[99.5vh] gap-2 p-2 duration-200 ">
        <div
          className={`${open ? "block lg:w-1/6" : " hidden"} h-full   relative`}
        >
          <DashboardSidePanel setSelected={setSelected} setOpen={setOpen} />
        </div>
        <div
          className={`flex flex-col  gap-2 ${
            open ? "lg:w-5/6" : "w-full h-full"
          }`}
        >
          <DashboardHeader open={open} setOpen={setOpen} selected={selected} />
          <MainPanel selected={selected} />
        </div>
      </div>
    </div>
  );
};
