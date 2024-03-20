import React, { useState } from "react";
import DashboardSidePanel from "./DashboardSidePanel";
import MainPanel from "./MainPanel";
import DashboardHeader from "./DashboardHeader";

export const DashboardHomepag = () => {
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <div className="flex min-h-[99.5vh] gap-2 p-2 duration-200 ">
        <div className={`${!open ? "hidden " : "block"} w-[300px]`}>
          <DashboardSidePanel setSelected={setSelected} setOpen={setOpen} />
        </div>
        <div className="flex flex-col w-full h-full gap-2">
          <DashboardHeader open={open} setOpen={setOpen} selected={selected} />
          <MainPanel selected={selected} />
        </div>
      </div>
    </div>
  );
};
