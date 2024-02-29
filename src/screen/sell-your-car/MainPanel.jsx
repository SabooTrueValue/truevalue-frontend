import React from "react";

const MainPanel = ({ selected }) => {
  return (
    <div className="w-full h-full p-2 bg-white lg:p-4 rounded-xl">
      {/* {selected} */}
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-truevalue">
          Basic Information
        </h4>
      </div>
    </div>
  );
};

export default MainPanel;
