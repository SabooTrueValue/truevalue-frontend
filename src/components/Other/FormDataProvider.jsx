import React, { createContext, useContext, useEffect, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => {
    return useContext(FormDataContext);
    };

export const FormDataProvider = ({ children }) => {
  const [localData, setLocalData] = useState({});
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    const currentTab = localStorage.getItem("currentTab");
    if (storedFormData) {
      setLocalData(JSON.parse(storedFormData));
    }
    if (currentTab) {
      setCurrentTab(parseInt(currentTab));
    }
    console.log("Local data", localData);
  }, []);
  useEffect(() => {
    console.log("Local data", localData);
  }, [localData, currentTab]);

  return (
    <FormDataContext.Provider value={{ localData, setLocalData, currentTab, setCurrentTab }}>
      {children}
    </FormDataContext.Provider>
  );
}