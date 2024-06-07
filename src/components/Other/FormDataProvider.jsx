import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [localData, setLocalData] = useState({});
  const [finalData, setFinalData] = useState([]);

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

        if (res.data.data) {
          setVehicleData(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getVehicleData();
    //console.log(vehicleData);
  }, []);

  useEffect(() => {
    const getVehicleData = async () => {
      try {
        const res = await axios.get(
          // `http://localhost:3001/allavailableVehicles`
          `https://api.helloviewer.io/search_products/?application_id=665033e954c046a17e3cffc9`,
          {
            headers: {
              Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTY5OTA1NTMsImFjY291bnRfaWQiOiI2NjU3MzFlZTQwMGI5YjE0OWUzMzk2OGQiLCJzZXNzaW9uX2lkIjoiNjY1NzMyNTllMmJmOWE0MzZmYWM3MjMyIiwidXNlcl9uYW1lIjoiZW5naW5lZXJpbmdAaGVsbG9hci5pbyJ9.liP5hpJsCcxR0iMVZ1Xpjs_zkulDmKQIeOJIqfm7k0g`,
              // Authorization: `Bearer ${process.env.REACT_APP_HELLOVIEWER_API_KEY}`,
            },
          }
        );
        console.log(res.data.data);
        if (res.data.data.length > 0) {
          let tempData = res.data.data.map((item) => {
            return {
              _id: item._id,
              trueValueLocation:
                item?.application === "6654288bb77c87cf9e61fa9d"
                  ? "KOMPALLY"
                  : item?.application === "665427b6b77c87cf9e61fa9b"
                  ? "SOMAJIGUDA"
                  : item?.application === "66542823b77c87cf9e61fa9c"
                  ? "KOMPALLY"
                  : // : item?.application === "66542823b77c87cf9e61fa9c"
                    // ? "KOMPALLY"
                    "Saboo True Value",
              vehicleTitle: item.name,
              vehicleBrand: item?.meta_data?.productDetails?.make,
              vehicleOverview: "",
              seatingCapacity: "-",
              userType: item?.meta_data?.productDetails?.noOfOwners,
              vehicleCategory: item?.meta_data?.productDetails?.isCertified,
              transmission: item?.meta_data?.productDetails?.transmission,
              bodyType: item?.meta_data?.productDetails?.bodyType,
              price: item?.meta_data?.productDetails?.price,
              fuelType: item?.meta_data?.productDetails?.fuelType,
              modelYear: item?.meta_data?.productDetails?.registrationYear,
              registrationNo:
                item?.meta_data?.productDetails?.registrationNumber,
              engineCapacity: "-",
              registeredCity: "Hyderabad",
              color: item?.meta_data?.productDetails?.color,
              kmDriven: item?.meta_data?.productDetails?.kmsDriven,
              slot_images: item?.slot_images,

              // image: item.images[0].url,
              // images: {
              //   image1: {
              //     img1: item?.images[0]?.url,
              //   },
              //   image2: {
              //     img2: item?.images[1]?.url,
              //   },
              //   image3: {
              //     img3: item?.images[2]?.url,
              //   },
              //   image4: {
              //     img4: item?.images[3]?.url,
              //   },
              //   image5: {
              //     img5: item?.images[4]?.url,
              //   },
              //   image6: {
              //     img6: item?.images[5]?.url,
              //   },
              // },
            };
          });
          // setVehicleData(tempData);
          console.log("tempData", tempData);
          setFinalData(tempData);
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
        finalData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
