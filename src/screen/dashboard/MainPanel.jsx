import React, { useState } from "react";
import PostAVehicleDash from "./dashboard compoents/PostAVehicleDash";
import ImageUpload from "./dashboard compoents/ImageUpload";
import ContactUs from "./dashboard compoents/ContactUsEnq";
import FinanceEnq from "./dashboard compoents/FinanceEnq";
import PopupEnq from "./dashboard compoents/PopupEnq";
import SellVehicleEnq from "./dashboard compoents/SellVehicleEnq";
import BuyVehicleEnq from "./dashboard compoents/BuyVehicleEnq";
import AccessoriesOpions from "./dashboard compoents/AccessoriesOpions";
import { Toaster} from "react-hot-toast";

const MainPanel = ({ selected }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="w-full h-full p-2 bg-white lg:p-4 rounded-xl">
      {/* {selected} */}
      {selected === 0 && dashboard()}
      {selected === 1 && (
        <div>
          <div className="">
            {currentTab === 0 && (
              <div>
                <h4 className="px-4 mt-3 text-xl font-bold uppercase text-primary">
                  Basic Information
                </h4>
                <PostAVehicleDash setCurrentTab={setCurrentTab} />
              </div>
            )}
            {currentTab > 0 && (
              <div>
                <h4 className="px-4 mt-3 mb-4 text-xl font-bold uppercase text-primary">
                  Accessories
                </h4>
                <AccessoriesOpions
                  setCurrentTab={setCurrentTab}
                  currentTab={currentTab}
                />
              </div>
            )}
            {currentTab === 2 && (
              <div>
                <h4 className="px-4 mt-3 mb-4 text-xl font-bold uppercase text-primary md:mt-10 lg:mt-12">
                  Upload Images
                </h4>
                <ImageUpload setCurrentTab={setCurrentTab} />
              </div>
            )}
          </div>
        </div>
      )}
      {selected === 2 && manageVehicles()}
      {selected === 3 && <BuyVehicleEnq />}
      {selected === 4 && <SellVehicleEnq />}
      {selected === 5 && <PopupEnq />}
      {selected === 6 && <ContactUs />}
      {selected === 7 && <FinanceEnq />}
      <Toaster />
    </div>
  );
};

export default MainPanel;

const dashboard = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-primary">
          Dashboard
        </h4>
      </div>
    </div>
  );
};

const manageVehicles = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-primary ">
          Manage Vehicles
        </h4>
      </div>
    </div>
  );
};
