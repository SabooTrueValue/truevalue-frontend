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
      try {
        const res = await axios.get(
          // `http://localhost:3001/allavailableVehicles`
          `https://true-value.onrender.com/allavailableVehicles`
        );

        if (res.data.data.length > 0) {
          setVehicleData(res.data.data);
        }
      } catch (error) {
        console.log(error);
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
