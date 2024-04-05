import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useFormData } from "../../../components/Other/FormDataProvider";

const AccessoriesOpions = ({ setCurrentTab, currentTab }) => {
  const { postVehicleData, setPostVehicleData } = useFormData();

  const validationSchema = Yup.object().shape({
    Sunroof: Yup.string().required("Required"),
    LeatherSeats: Yup.string().required("Required"),
    AlloyWheels: Yup.string().required("Required"),
    FogLights: Yup.string().required("Required"),
    Navigation: Yup.string().required("Required"),
    Bluetooth: Yup.string().required("Required"),
    ReverseCamera: Yup.string().required("Required"),
    CruiseControl: Yup.string().required("Required"),
    ParkingSensors: Yup.string().required("Required"),
    AirConditioning: Yup.string().required("Required"),
    ClimateControl: Yup.string().required("Required"),
    PowerSteering: Yup.string().required("Required"),
    PowerWindows: Yup.string().required("Required"),
    PowerMirrors: Yup.string().required("Required"),
    PowerSeats: Yup.string().required("Required"),
    HeatedSeats: Yup.string().required("Required"),
    CooledSeats: Yup.string().required("Required"),
    MemorySeats: Yup.string().required("Required"),
  });
  const initialValues = {
    Sunroof: postVehicleData.Sunroof || "",
    LeatherSeats: postVehicleData.LeatherSeats || "",
    AlloyWheels: postVehicleData.AlloyWheels || "",
    FogLights: postVehicleData.FogLights || "",
    Navigation: postVehicleData.Navigation || "",
    Bluetooth: postVehicleData.Bluetooth || "",
    ReverseCamera: postVehicleData.ReverseCamera || "",
    CruiseControl: postVehicleData.CruiseControl || "",
    ParkingSensors: postVehicleData.ParkingSensors || "",
    AirConditioning: postVehicleData.AirConditioning || "",
    ClimateControl: postVehicleData.ClimateControl || "",
    PowerSteering: postVehicleData.PowerSteering || "",
    PowerWindows: postVehicleData.PowerWindows || "",
    PowerMirrors: postVehicleData.PowerMirrors || "",
    PowerSeats: postVehicleData.PowerSeats || "",
    HeatedSeats: postVehicleData.HeatedSeats || "",
    CooledSeats: postVehicleData.CooledSeats || "",
    MemorySeats: postVehicleData.MemorySeats || "",
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setPostVehicleData({ ...postVehicleData, accessories :{...values }});
          setCurrentTab(2);
          const newPostVehicleData = { ...postVehicleData, ...values };
          const localData = JSON.stringify(newPostVehicleData);
          localStorage.setItem("postVehicleData", localData);
        }}
      >
        {() => (
          <Form>
            <div className="grid grid-cols-2 gap-4 px-4 mb-6 font-sans sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              <div>
                <label
                  htmlFor="Sunroof"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Sunroof
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="sunroof-yes"
                    name="Sunroof"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="sunroof-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="sunroof-no"
                    name="Sunroof"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="sunroof-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>

                {/* <div className="flex items-center"></div> */}
                <ErrorMessage
                  name="Sunroof"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="LeatherSeats"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Leather Seats
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="LeatherSeats-yes"
                    name="LeatherSeats"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="LeatherSeats-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="LeatherSeats-no"
                    name="LeatherSeats"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="LeatherSeats-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="LeatherSeats"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="AlloyWheels"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Alloy Wheels
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="AlloyWheels-yes"
                    name="AlloyWheels"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="AlloyWheels-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="AlloyWheels-no"
                    name="AlloyWheels"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="AlloyWheels-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="AlloyWheels"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="FogLights"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Fog Lights
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="FogLights-yes"
                    name="FogLights"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="FogLights-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="FogLights-no"
                    name="FogLights"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="FogLights-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="FogLights"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="Navigation"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Navigation
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="Navigation-yes"
                    name="Navigation"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="Navigation-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="Navigation-no"
                    name="Navigation"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="Navigation-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="Navigation"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="Bluetooth"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Bluetooth
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="Bluetooth-yes"
                    name="Bluetooth"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="Bluetooth-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="Bluetooth-no"
                    name="Bluetooth"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="Bluetooth-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="Bluetooth"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="ReverseCamera"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Reverse Camera
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="ReverseCamera-yes"
                    name="ReverseCamera"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="ReverseCamera-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="ReverseCamera-no"
                    name="ReverseCamera"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="ReverseCamera-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="ReverseCamera"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="CruiseControl"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Cruise Control
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="CruiseControl-yes"
                    name="CruiseControl"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="CruiseControl-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="CruiseControl-no"
                    name="CruiseControl"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="CruiseControl-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="CruiseControl"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="ParkingSensors"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Parking Sensors
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="ParkingSensors-yes"
                    name="ParkingSensors"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="ParkingSensors-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="ParkingSensors-no"
                    name="ParkingSensors"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="ParkingSensors-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="ParkingSensors"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="AirConditioning"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Air Conditioning
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="AirConditioning-yes"
                    name="AirConditioning"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="AirConditioning-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="AirConditioning-no"
                    name="AirConditioning"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="AirConditioning-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="AirConditioning"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="ClimateControl"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Climate Control
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="ClimateControl-yes"
                    name="ClimateControl"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="ClimateControl-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="ClimateControl-no"
                    name="ClimateControl"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="ClimateControl-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="ClimateControl"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="PowerSteering"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Power Steering
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="PowerSteering-yes"
                    name="PowerSteering"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="PowerSteering-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="PowerSteering-no"
                    name="PowerSteering"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="PowerSteering-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="PowerSteering"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="PowerWindows"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Power Windows
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="PowerWindows-yes"
                    name="PowerWindows"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="PowerWindows-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="PowerWindows-no"
                    name="PowerWindows"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="PowerWindows-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="PowerWindows"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="PowerMirrors"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Power Mirrors
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="PowerMirrors-yes"
                    name="PowerMirrors"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="PowerMirrors-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="PowerMirrors-no"
                    name="PowerMirrors"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="PowerMirrors-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="PowerMirrors"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="PowerSeats"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Power Seats
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="PowerSeats-yes"
                    name="PowerSeats"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="PowerSeats-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="PowerSeats-no"
                    name="PowerSeats"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="PowerSeats-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="PowerSeats"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="HeatedSeats"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Heated Seats
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="HeatedSeats-yes"
                    name="HeatedSeats"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="HeatedSeats-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="HeatedSeats-no"
                    name="HeatedSeats"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="HeatedSeats-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="HeatedSeats"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="CooledSeats"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Cooled Seats
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="CooledSeats-yes"
                    name="CooledSeats"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="CooledSeats-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="CooledSeats-no"
                    name="CooledSeats"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="CooledSeats-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="CooledSeats"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="MemorySeats"
                  className={`${
                    currentTab === 1 && "text-lg"
                  } block text-primary`}
                >
                  Memory Seats
                </label>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="MemorySeats-yes"
                    name="MemorySeats"
                    value="Yes"
                    className="mr-2"
                  />
                  <label
                    htmlFor="MemorySeats-yes"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    Yes
                  </label>{" "}
                  <Field
                    type="radio"
                    id="MemorySeats-no"
                    name="MemorySeats"
                    value="No"
                    className="ml-3 mr-2"
                  />
                  <label
                    htmlFor="MemorySeats-no"
                    className={`${
                      currentTab === 1 && "text-lg"
                    } cursor-pointer text-primary hover:scale-105 hover:font-bold select-none`}
                  >
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="MemorySeats"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            {currentTab === 1 && (
              <div className="flex gap-4 px-4 pt-4">
                <button
                  onClick={() => setCurrentTab(0)}
                  className="hover:text-white hover:bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-20 py-2.5 select-none border border-primary "
                >
                  Back
                </button>
                <button
                  // onClick={() => setCurrentTab(2)}
                  type="submit"
                  className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-20 py-2.5 select-none "
                >
                  Next
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccessoriesOpions;
