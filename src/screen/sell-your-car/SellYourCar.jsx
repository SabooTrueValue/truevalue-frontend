import React from "react";
// import VehicleOwnerForm from "./VehicleOwnerForm";
import VehicleOwnerForm2 from "./VehicleOwnerForm2";
// import VehicleOwnerForm from "./VehicleOwnerForm";
// import VehicleFormData from "./VehicleFormData";

const SellYourCar = () => {
  const backgroundStyle = {
    backgroundImage: `radial-gradient(circle at 77% 66%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 9%,transparent 9%, transparent 43%,transparent 43%, transparent 100%),radial-gradient(circle at 6% 56%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 20%,transparent 20%, transparent 56%,transparent 56%, transparent 100%),radial-gradient(circle at 48% 45%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 15%,transparent 15%, transparent 85%,transparent 85%, transparent 100%),radial-gradient(circle at 89% 6%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 5%,transparent 5%, transparent 32%,transparent 32%, transparent 100%),radial-gradient(circle at 71% 38%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 14%,transparent 14%, transparent 21%,transparent 21%, transparent 100%),radial-gradient(circle at 84% 78%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 11%,transparent 11%, transparent 85%,transparent 85%, transparent 100%),radial-gradient(circle at 92% 72%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 42%,transparent 42%, transparent 51%,transparent 51%, transparent 100%),radial-gradient(circle at 73% 95%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 48%,transparent 48%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 29% 29%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 24%,transparent 24%, transparent 73%,transparent 73%, transparent 100%),linear-gradient(90deg, hsl(147,0%,99%),hsl(147,0%,99%))`,
  };

  return (
    <div style={backgroundStyle} className="min-h-[90vh] overflow-hidden">
      {/* {currentTab === 1 && <VehicleFormData setCurrentTab={setCurrentTab} />} */}
      <div className="flex items-start justify-center h-screen pt-20 lg:pt-28 lg:pb-20">
        <VehicleOwnerForm2 />
        {/* <VehicleFormData /> */}
      </div>
    </div>
  );
};

export default SellYourCar;
