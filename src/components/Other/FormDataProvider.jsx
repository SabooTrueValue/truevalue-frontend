import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [localData, setLocalData] = useState({});

  const [currentTab, setCurrentTab] = useState(1);
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    const currentTab = localStorage.getItem("currentTab");

    if (storedFormData) {
      setLocalData(JSON.parse(storedFormData));
    }
    if (currentTab) {
      setCurrentTab(parseInt(currentTab));
    }
  }, []);

  useEffect(() => {
    const getVehicleData = async () => {
      const res = await axios.get(
        `https://true-value.onrender.com/allVehicles`
      );

      if (res.data.data.length > 0) {
        setVehicleData(res.data.data);
      }
    };
    getVehicleData();
    //console.log(vehicleData);
  }, []);

  return (
    <FormDataContext.Provider
      value={{
        localData,
        setLocalData,
        currentTab,
        setCurrentTab,
        vehicleData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
