import React, { createContext, useContext, useEffect, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => {
    return useContext(FormDataContext);
    };

export const FormDataProvider = ({ children }) => {
  const [localData, setLocalData] = useState({});
  const [postVehicleData, setPostVehicleData] = useState({});
  const [currentTab, setCurrentTab] = useState(1);

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
 

  return (
    <FormDataContext.Provider value={{ localData, setLocalData, currentTab, setCurrentTab,postVehicleData, setPostVehicleData }}>
      {children}
    </FormDataContext.Provider>
  );
}