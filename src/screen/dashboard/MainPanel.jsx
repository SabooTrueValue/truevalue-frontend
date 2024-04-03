import React, { useState } from "react";
import PostAVehicleDash from "./dashboard compoents/PostAVehicleDash";
import ImageUpload from "./dashboard compoents/ImageUpload";
import ContactUs from "./dashboard compoents/ContactUsEnq";
import FinanceEnq from "./dashboard compoents/FinanceEnq";
import PopupEnq from "./dashboard compoents/PopupEnq";
import SellVehicleEnq from "./dashboard compoents/SellVehicleEnq";
import BuyVehicleEnq from "./dashboard compoents/BuyVehicleEnq";
import AccessoriesOpions from "./dashboard compoents/AccessoriesOpions";
import { useEffect } from "react";
import { FirebaseStore } from "../../components/context/Firebase";
import { collection, getDocs } from "firebase/firestore";
import ManageVehicle from "./dashboard compoents/ManageVehicle";

const MainPanel = ({ selected }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [popupData, setPopupData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [buyData, setBuyData] = useState([]);
  const [financeData, setFinanceData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const getPopupData = async () => {
      const querySnapshot = await getDocs(
        collection(FirebaseStore, "popupEnquiries")
      );

      let index = 0;
      querySnapshot.forEach((doc) => {
        // let id = doc.id;
        setPopupData((prev) => [
          ...prev,
          { ...doc.data(), index: 1 + index++ },
        ]);
      });
      // console.log(popupData);
      // console.log("popup data", popupData);
    };

    const getFinanceData = async () => {
      const querySnapshot = await getDocs(
        collection(FirebaseStore, "financeEnq")
      );

      let index = 0;
      querySnapshot.forEach((doc) => {
        // let id = doc.id;
        setFinanceData((prev) => [
          ...prev,
          { ...doc.data(), index: 1 + index++ },
        ]);
      });
      // console.log(financeData);
      // console.log("finance data", financeData);
    };
    const getContactUsData = async () => {
      const querySnapshot = await getDocs(
        collection(FirebaseStore, "contact-us")
      );

      let index = 0;
      querySnapshot.forEach((doc) => {
        // let id = doc.id;
        setContactData((prev) => [
          ...prev,
          { ...doc.data(), index: 1 + index++ },
        ]);
      });
      // console.log(contactData);
      // console.log("contact data", contactData);
    }
    const getSellVehicleData = async () => {
      const querySnapshot = await getDocs(
        collection(FirebaseStore, "sellEnquiry")
      );

      let index = 0;
      querySnapshot.forEach((doc) => {
        // let id = doc.id;
        setSellData((prev) => [
          ...prev,
          { ...doc.data(), index: 1 + index++ },
        ]);
      });
      // console.log(sellData);
      // console.log("sell data", sellData);
    }
    const getBuyVehicleData = async () => {
      const querySnapshot = await getDocs(
        collection(FirebaseStore, "buy-vehicle")
      );

      let index = 0;
      querySnapshot.forEach((doc) => {
        // let id = doc.id;
        setBuyData((prev) => [
          ...prev,
          { ...doc.data(), index: 1 + index++ },
        ]);
      });
      // console.log(buyData);
      // console.log("buy data", buyData);
    }
    const getManageVehicleData = async () => {
      const querySnapshot = await getDocs(
        collection(FirebaseStore, "postVehicleData")
      );

      let index = 0;
      querySnapshot.forEach((doc) => {
        // let id = doc.id;
        setVehicleData((prev) => [
          ...prev,
          { ...doc.data(), index: 1 + index++ },
        ]);
      });
      console.log(vehicleData);
      // console.log("vehicle data", vehicleData);
    }
    getPopupData();
    getFinanceData();
    getContactUsData();
    getSellVehicleData();
    getBuyVehicleData();
    getManageVehicleData();
  }, []);

  return (
    <div className="w-full p-2 bg-white h- lg:p-4 rounded-xl">
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
      {selected === 2 && <ManageVehicle data2={vehicleData} />}
      {selected === 3 && <BuyVehicleEnq data={buyData} />}
      {selected === 4 && <SellVehicleEnq data={sellData} />}
      {selected === 5 && <PopupEnq data={popupData} />}
      {selected === 6 && <ContactUs data={contactData} />}
      {selected === 7 && <FinanceEnq data={financeData} />}
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


