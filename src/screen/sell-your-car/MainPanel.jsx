import React from "react";
import PostAVehicleDash from "./dashboard/PostAVehicleDash";
import ImageUpload from "./dashboard/ImageUpload";

const MainPanel = ({ selected }) => {
  return (
    <div className="w-full h-full p-2 bg-white lg:p-4 rounded-xl">
      {/* {selected} */}
      {selected === 0 && dashboard()}
      {selected === 1 && postAvehicle()}
      {selected === 2 && manageVehicles()}
      {selected === 3 && buyVehicle()}
      {selected === 4 && sellVehicle()}
      {selected === 5 && popup()}
      {selected === 6 && contactUs()}
      {selected === 7 && finance()}
    </div>
  );
};

export default MainPanel;

const dashboard = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-truevalue">
          Dashboard
        </h4>
      </div>
    </div>
  );
};

const postAvehicle = () => {
  return (
    <div>
      <h4 className="text-xl font-bold uppercase text-truevalue">
        Basic Information
      </h4>

      <PostAVehicleDash />
      <ImageUpload />
    </div>
  );
};

const manageVehicles = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-truevalue">
          Manage Vehicles
        </h4>
        <ImageUpload />
      </div>
    </div>
  );
};

const buyVehicle = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-truevalue">
          Buy Vehicle
        </h4>
      </div>
    </div>
  );
};

const sellVehicle = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-truevalue">
          Sell Vehicle
        </h4>
      </div>
    </div>
  );
};

const popup = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-truevalue">
          Popup
        </h4>
      </div>
    </div>
  );
};

const contactUs = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-truevalue">
          Contact us
        </h4>
      </div>
    </div>
  );
};

const finance = () => {
  return (
    <div>
      <div>
        <h4 className="pb-4 text-xl font-bold uppercase text-truevalue">
          Finance
        </h4>
      </div>
    </div>
  );
};
