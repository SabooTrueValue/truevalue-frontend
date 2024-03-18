import React, { useState } from "react";
import HomeNav from "../homepage/HomeNav";
import VehicleFormData from "./VehicleFormData";

const SellYourCar = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <div>
      <HomeNav />
      {currentTab === 1 && <VehicleFormData setCurrentTab={setCurrentTab} />}
      {currentTab === 2 && "VehicleFormData"}
    </div>
  );
};

export default SellYourCar;
