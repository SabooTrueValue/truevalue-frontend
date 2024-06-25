import React, { useEffect, useState } from "react";
import { useFormData } from "../../components/Other/FormDataProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import CarSlider2 from "./CarSlider2";
import { MdAirlineSeatReclineExtra, MdVerified } from "react-icons/md";
import { FaCalendarDays, FaCar, FaLocationDot, FaUser } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox, TbView360Number } from "react-icons/tb";
import { IoIosColorPalette, IoMdSpeedometer } from "react-icons/io";
import { PiEngineFill } from "react-icons/pi";
import CurrencyFormatter from "../../components/Other/currency-formatter";
import BookForm from "./book-form";
import React360 from "./React360";

const CarDetails = () => {
  const { vehicleData } = useFormData();
  const { id } = useParams();
  const [carData, setCarData] = useState({});
  const [threesixty, setThreesixty] = useState(false);


  const navigate = useNavigate();

  const images = [
    require("../../assets/Car 360/1.jpg"),
    require("../../assets/Car 360/2.jpg"),
    require("../../assets/Car 360/3.jpg"),
    require("../../assets/Car 360/4.jpg"),
    require("../../assets/Car 360/5.jpg"),
    require("../../assets/Car 360/6.jpg"),
    require("../../assets/Car 360/7.jpg"),
    require("../../assets/Car 360/8.jpg"),
    require("../../assets/Car 360/9.jpg"),
    require("../../assets/Car 360/10.jpg"),
    require("../../assets/Car 360/11.jpg"),
    require("../../assets/Car 360/12.jpg"),
    require("../../assets/Car 360/13.jpg"),
    require("../../assets/Car 360/14.jpg"),
    require("../../assets/Car 360/15.jpg"),
    require("../../assets/Car 360/16.jpg"),
    require("../../assets/Car 360/17.jpg"),
    require("../../assets/Car 360/18.jpg"),
    require("../../assets/Car 360/19.jpg"),
    require("../../assets/Car 360/20.jpg"),
    require("../../assets/Car 360/21.jpg"),
    require("../../assets/Car 360/22.jpg"),
    require("../../assets/Car 360/23.jpg"),
    require("../../assets/Car 360/24.jpg"),
    require("../../assets/Car 360/25.jpg"),
    require("../../assets/Car 360/26.jpg"),
    require("../../assets/Car 360/27.jpg"),
    require("../../assets/Car 360/28.jpg"),
    require("../../assets/Car 360/29.jpg"),
    require("../../assets/Car 360/30.jpg"),
    require("../../assets/Car 360/31.jpg"),
    require("../../assets/Car 360/32.jpg"),
    require("../../assets/Car 360/33.jpg"),
    require("../../assets/Car 360/34.jpg"),
    require("../../assets/Car 360/35.jpg"),
    require("../../assets/Car 360/36.jpg"),
    require("../../assets/Car 360/37.jpg"),
    require("../../assets/Car 360/38.jpg"),
    require("../../assets/Car 360/39.jpg"),
    require("../../assets/Car 360/40.jpg"),
  ];

  useEffect(() => {
    const car = vehicleData.find((car) => car._id === id);
    if (car) {
      setCarData(car);
    }
  }, [id, navigate, vehicleData]);

  

  return (
    <div className="container mx-auto">
      <div className="max-w-screen-xl px-2 py-10 mx-auto">
        <p className="my-8 font-medium text-gray-400/90">
          <Link to={"/"}>Home</Link> /&nbsp;
          <span className="capitalize ">{carData?.vehicleBrand}</span>
          &nbsp;/&nbsp;
          <span className="text-primary">{carData?.vehicleTitle}</span>
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="col-span-1 space-y-10 lg:col-span-2">
            <div className="flex justify-between pr-2 mb-5 space-y-1">
              <h2 className="text-2xl font-semibold uppercase xl:text-4xl ">
                {carData?.vehicleTitle}
              </h2>
              <div>
                <h1 className="text-2xl font-semibold ">
                  {carData?.price && CurrencyFormatter.format(carData?.price)}
                  <sup className="text-red-600">*</sup>
                </h1>
                <p className="text-right text-gray-900/90">
                  Our Best Price {/* {<small>starts at</small>} */}
                </p>
              </div>

              {/* <p>{car?.tag}</p> */}
            </div>
            <div className="overflow-hidden rounded-lg">
              {threesixty ? (
                <div className="flex items-center justify-center overflow-hidden rounded-lg ">
                  <React360 images={images} />
                </div>
              ) : (
                carData?.images && <CarSlider2 sliders={carData?.images} />
              )}

              <div className="flex justify-center ">
                <button
                  onClick={() => setThreesixty(!threesixty)}
                  className="px-4 py-2 mt-2 text-white rounded-lg bg-primary"
                >
                  {!threesixty ? (
                    <div className="flex">
                      <TbView360Number className="text-2xl" />° View
                    </div>
                  ) : (
                    "Back to normal view"
                  )}
                </button>
                {/* <img
                  src="https://www.marutisuzukicommercial.com/images/icons/Icon360.svg"
                  alt=""
                  className="w-20 h-20 cursor-pointer"
                /> */}
              </div>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="mb-4 text-xl font-semibold uppercase select-none text-primary">
                Car Overview
              </h3>

              <div className="grid grid-cols-2 gap-x-4 xl:grid-cols-4 md:grid-cols-3 gap-y-6">
                <div className="">
                  <FaLocationDot className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.trueValueLocation}</p>
                </div>
                <div className="">
                  <IoIosColorPalette className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.color}</p>
                </div>
                <div className="">
                  <BsFillFuelPumpFill className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.fuelType}</p>
                </div>
                <div className="">
                  <TbManualGearbox className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.transmission}</p>
                </div>
                <div className="">
                  <FaCar className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.bodyType}</p>
                </div>
                <div className="">
                  <FaCalendarDays className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.modelYear}</p>
                </div>
                <div className="">
                  <PiEngineFill className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.engineCapacity} cc</p>
                </div>
                <div className="">
                  <IoMdSpeedometer className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.kmDriven} Km</p>
                </div>
                <div className="">
                  <MdVerified className="text-2xl text-primary" />
                  <p className="mt-2">{carData?.vehicleCategory}</p>
                </div>
                <div className="">
                  <MdAirlineSeatReclineExtra className="text-3xl text-primary" />
                  <p className="mt-0.5">{carData?.seatingCapacity}</p>
                </div>
                <div className="">
                  <FaUser className="text-xl text-primary" />
                  <p className="mt-2">{carData?.userType}</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="mb-4 text-xl font-semibold uppercase select-none text-primary">
                Car Features
              </h3>
              {/* { carData?.accessories.AirConditioning } */}
              <ul className="grid grid-cols-2 list-disc gap-x-4 xl:grid-cols-4 lg:grid-cols-3 gap-y-6">
                {carData?.accessories?.["AirConditioning"] === true && (
                  <li className="ml-4">Air Conditioning</li>
                )}
                {carData?.accessories?.AlloyWheels === true && (
                  <li className="ml-4">Alloy Wheels</li>
                )}
                {carData?.accessories?.Bluetooth === true && (
                  <li className="ml-4">Bluetooth</li>
                )}
                {carData?.accessories?.ClimateControl === true && (
                  <li className="ml-4">Climate Control</li>
                )}
                {carData?.accessories?.CooledSeats === true && (
                  <li className="ml-4">Cooled Seats</li>
                )}
                {carData?.accessories?.CruiseControl === true && (
                  <li className="ml-4">Cruise Control</li>
                )}
                {carData?.accessories?.FogLights === true && (
                  <li className="ml-4">Fog Lights</li>
                )}
                {carData?.accessories?.HeatedSeats === true && (
                  <li className="ml-4">Heated Seats</li>
                )}
                {carData?.accessories?.LeatherSeats === true && (
                  <li className="ml-4">Leather Seats</li>
                )}
                {carData?.accessories?.MemorySeats === true && (
                  <li className="ml-4">Memory Seats</li>
                )}
                {carData?.accessories?.Navigation === true && (
                  <li className="ml-4">Navigation</li>
                )}
                {carData?.accessories?.ParkingSensors === true && (
                  <li className="ml-4">Parking Sensors</li>
                )}
                {carData?.accessories?.PowerMirrors === true && (
                  <li className="ml-4">Power Mirrors</li>
                )}
                {carData?.accessories?.PowerSeats === true && (
                  <li className="ml-4">Power Seats</li>
                )}
                {carData?.accessories?.PowerWindows === true && (
                  <li className="ml-4">Power Windows</li>
                )}
                {carData?.accessories?.ReverseCamera === true && (
                  <li className="ml-4">Reverse Camera</li>
                )}
                {carData?.accessories?.Sunroof === true && (
                  <li className="ml-4">Sunroof</li>
                )}
              </ul>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="mb-4 text-xl font-semibold uppercase select-none text-primary">
                Seller Comment
              </h3>
              <p>{carData?.vehicleOverview}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h1 className="mb-5 text-3xl font-semibold text-center">
                98488 98488
              </h1>
              <a
                href="tel:9848898488"
                target="_blank"
                rel="noreferrer"
                aria-label="Call Now"
                className="flex items-center justify-center w-full py-3 font-medium text-white rounded-lg shadow cursor-pointer bg-primary"
              >
                Book Now
              </a>
            </div>
            <div
              id="vehicleForm"
              className="p-8 bg-white border border-gray-200 rounded-lg"
            >
              <BookForm
                carId={carData.registrationNo}
                carBrand={carData.vehicleBrand}
                carModel={carData.vehicleTitle}
                fuelType={carData.fuelType}
                ownership={carData.userType}
                kmDriven={carData.kmDriven}
              />
            </div>
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-xl font-semibold uppercase select-none text-primary">
                Stay Safe
              </h3>
              <ul className="ml-4 space-y-2 list-disc">
                <li>Avoid deals that are too good to be true.</li>
                <li>
                  Deal with people in your area by meeting face to face to see
                  the item.
                </li>
                <li>Never provide your personal or banking information.</li>
                <li>
                  See our Safety tips regarding vehicle buying and selling.
                </li>
                <li> How to spot scam ads? </li>
                <li>How to protect yourself?</li>
              </ul>
            </div>
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold select-none text-primary">
                Car Inspection Is Important Before Buying A Used Car
              </h3>
              <p className="mb-4">
                A good deal for buying a used car includes:
              </p>
              <ul className="ml-4 space-y-2 list-disc">
                <li>
                  Step-by-step inspection of vehicles to be assess its running
                  condition and drivability, this will protect you from any
                  unwanted repair bills and situations.
                </li>
                <li>
                  Every vehicle at True Value undergoes a thorough a 376 point
                  check to ensure that there is a comprehensive check done to
                  each of the preowned vehicles, before it is put up for sale to
                  our valued customers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
