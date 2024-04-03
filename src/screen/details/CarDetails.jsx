import React, { useEffect, useState } from "react";
import { useFormData } from "../../components/Other/FormDataProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import CarSlider2 from "./CarSlider2";
import { MdAirlineSeatReclineExtra, MdVerified } from "react-icons/md";
import { FaCalendarDays, FaCar, FaLocationDot, FaUser } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { IoIosColorPalette, IoMdSpeedometer } from "react-icons/io";
import { PiEngineFill } from "react-icons/pi";
import CurrencyFormatter from "../../components/Other/currency-formatter";
import BookForm from "./book-form";

const CarDetails = () => {
  const { vehicleData } = useFormData();
  const { id } = useParams();
  const [carData, setCarData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const car = vehicleData.find((car) => car.id === id);
    if (car) setCarData(car);
    // if (!car) navigate("/");
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 space-y-10 lg:col-span-2">
            <div className="flex justify-between pr-2 mb-5 space-y-1">
              <h2 className="text-2xl font-semibold uppercase xl:text-4xl ">
                {carData?.vehicleTitle}
              </h2>
              {/* <h2 className="text-xl font-semibold xl:text-2xl ">
                <span className="text-lg text-primary"> ₹</span>{" "}
                {carData?.price / 100000} Lakh
              </h2> */}
              {/* <p>{car?.tag}</p> */}
            </div>
            <div className="overflow-hidden rounded-lg">
              <CarSlider2 sliders={carData?.images} />
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="mb-4 text-xl font-semibold uppercase select-none text-primary">
                Car Overview
              </h3>
              <div className="grid grid-cols-2 gap-x-4 xl:grid-cols-4 lg:grid-cols-3 gap-y-6">
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
              <ul className="grid grid-cols-2 list-disc gap-x-4 xl:grid-cols-4 lg:grid-cols-3 gap-y-6">
                {carData?.AirConditioning === "Yes" && (
                  <li className="ml-4">Air Conditioning</li>
                )}
                {carData?.AlloyWheels === "Yes" && (
                  <li className="ml-4">Alloy Wheels</li>
                )}
                {carData?.Bluetooth === "Yes" && (
                  <li className="ml-4">Bluetooth</li>
                )}
                {carData?.ClimateControl === "Yes" && (
                  <li className="ml-4">Climate Control</li>
                )}
                {carData?.CooledSeats === "Yes" && (
                  <li className="ml-4">Cooled Seats</li>
                )}
                {carData?.CruiseControl === "Yes" && (
                  <li className="ml-4">Cruise Control</li>
                )}
                {carData?.FogLights === "Yes" && (
                  <li className="ml-4">Fog Lights</li>
                )}
                {carData?.HeatedSeats === "Yes" && (
                  <li className="ml-4">Heated Seats</li>
                )}
                {carData?.LeatherSeats === "Yes" && (
                  <li className="ml-4">Leather Seats</li>
                )}
                {carData?.MemorySeats === "Yes" && (
                  <li className="ml-4">Memory Seats</li>
                )}
                {carData?.Navigation === "Yes" && (
                  <li className="ml-4">Navigation</li>
                )}
                {carData?.ParkingSensors === "Yes" && (
                  <li className="ml-4">Parking Sensors</li>
                )}
                {carData?.PowerMirrors === "Yes" && (
                  <li className="ml-4">Power Mirrors</li>
                )}
                {carData?.PowerSeats === "Yes" && (
                  <li className="ml-4">Power Seats</li>
                )}
                {carData?.PowerWindows === "Yes" && (
                  <li className="ml-4">Power Windows</li>
                )}
                {carData?.ReverseCamera === "Yes" && (
                  <li className="ml-4">Reverse Camera</li>
                )}
                {carData?.Sunroof === "Yes" && (
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
              <p className="mb-2 text-gray-900/90">
                Our Best Price {/* {<small>starts at</small>} */}
              </p>
              <h1 className="mb-5 text-3xl font-semibold">
                {CurrencyFormatter.format(carData?.price)}
                <span className="text-red-600">*</span>
              </h1>
              <a
                href="tel:9848898488"
                target="_blank"
                rel="noreferrer"
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
                carId={carData.id}
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
