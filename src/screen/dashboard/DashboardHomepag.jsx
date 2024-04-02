import React, { useEffect, useState } from "react";
import DashboardSidePanel from "./DashboardSidePanel";
import MainPanel from "./MainPanel";
import DashboardHeader from "./DashboardHeader";

export const DashboardHomepag = () => {
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    console.log(userToken);
    if (!userToken) {
      // If there's no token, redirect to the login page
      window.location.replace("/login");
    }
  }, []);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      <div className="flex h-[99.5vh] gap-2 p-2 duration-200 ">
        <div
          className={`${open ? "block xl:w-1/6" : " hidden"} h-full relative z-10`}
        >
          <DashboardSidePanel setSelected={setSelected} setOpen={setOpen} />
        </div>
        <div
          className={`flex flex-col  gap-2 ${
            open ? "xl:w-5/6" : "w-full h-full"
          }`}
        >
          <DashboardHeader open={open} setOpen={setOpen} selected={selected} />
          <MainPanel selected={selected} />
        </div>
      </div>
    </div>
  );
};
