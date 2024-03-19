import React from "react";

const HeadingComponent = ({ title }) => {
  return (
    <div className="container flex items-center justify-center gap-4 px-1 pb-5 mx-auto">
      <div className="w-[70%] border-b border-[#2b349579] hidden lg:block "></div>
      <h2 className="text-3xl font-bold text-center lg:text-4xl text-primary lg:whitespace-nowrap">
        {title}
      </h2>
      <div className="w-[70%] border-b border-[#2b349579] hidden lg:block "></div>
    </div>
  );
};

export default HeadingComponent;
