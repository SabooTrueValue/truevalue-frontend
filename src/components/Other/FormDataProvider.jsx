import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseStore } from "../context/Firebase";

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [localData, setLocalData] = useState({});
  const [postVehicleData, setPostVehicleData] = useState({});
  const [currentTab, setCurrentTab] = useState(1);
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    const currentTab = localStorage.getItem("currentTab");
    const storedPostVehicleData = localStorage.getItem("postVehicleData");
    if (storedFormData) {
      setLocalData(JSON.parse(storedFormData));
    }
    if (currentTab) {
      setCurrentTab(parseInt(currentTab));
    }
    if (storedPostVehicleData) {
      setPostVehicleData(JSON.parse(storedPostVehicleData));
    }
  }, []);

  useEffect(() => {
    const getVehicleData = async () => {
      const querySnapshot = await getDocs(
        collection(FirebaseStore, "postVehicleData")
      );
      let index = 0;
      querySnapshot.forEach((doc) => {
        setVehicleData((prev) => [
          ...prev,
          { ...doc.data(), index: 1 + index++ },
        ]);
      });
      
    };
    getVehicleData();
    console.log(vehicleData);
  }, []);
  useEffect(() => {
    console.log(vehicleData);
  }
  , [vehicleData]);

  return (
    <FormDataContext.Provider
      value={{
        localData,
        setLocalData,
        currentTab,
        setCurrentTab,
        postVehicleData,
        setPostVehicleData,
        vehicleData
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
