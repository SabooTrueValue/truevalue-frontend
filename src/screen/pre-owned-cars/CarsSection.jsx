import React, { useState } from "react";
import CarCart from "./CarCart";

const CarsSection = () => {
  const [selectedOption, setSelectedOption] = useState("sort by price");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <div className="flex items-center px-4 py-2 text-sm bg-gray-100 rounded-full w-min whitespace-nowrap">
          Maruti Suzuki (240)
          <span className="pl-2 text-base cursor-pointer select-none hover:text-red-500">
            x
          </span>
        </div>
        <div className="flex items-center px-4 py-2 text-sm bg-gray-100 rounded-full w-min whitespace-nowrap">
          Nissan (160)
          <span className="pl-2 text-base cursor-pointer select-none hover:text-red-500">
            x
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between pb-4">
        <div>1 - 48 out of 240 results</div>
        <div className="dropdown">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="px-2 py-1 border rounded-xl w-60"
          >
            <option className="" value="sort by price">Sort by Price</option>
            <option className="" value="sort by budget">Sort by Budget</option>
            <option className="" value="sort by model">Sort by Model</option>
            <option className="" value="sort by color">Sort by Color</option>
            <option className="" value="sort by fuel type">Sort by Fuel Type</option>
            <option className="" value="sort by body type">Sort by Body Type</option>
            <option className="" value="sort by gearbox">Sort by Gearbox</option>
          </select>
        </div>
      </div>
      <div className="h-[200vh] overflow-y-scroll pb-10 px-1">
        <CarCart />
      </div>
    </div>
  );
};

export default CarsSection;
