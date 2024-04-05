import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FirebaseStore } from "../../components/context/Firebase";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormData } from "../../components/Other/FormDataProvider";
import axios from "axios";


// const notifyError = () =>
//   toast.error("This didn't submitted.", {
//     style: {
//       borderRadius: "10px",
//       background: "red",
//       color: "#fff",
//     },
//   });

const VehicleOwnerForm2 = () => {
  const { localData, setCurrentTab, setLocalData, currentTab } = useFormData();
  // Form data state
  const [formData, setFormData] = useState({
    brandName: localData.brandName || "",
    makeOfYear: localData.makeOfYear || "",
    carModel: localData.carModel || "",
    fuelType: localData.fuelType || "",
    carVariant: localData.carVariant || "",
    ownership: localData.ownership || "",
    kmDriven: localData.kmDriven || "",
    registeredCity: localData.registeredCity || "",
    transmission: localData.transmission || "",
    name: localData.name || "",
    email: localData.email || "",
    mobile: localData.mobile || "",
  });

  useEffect(() => {
    if (localData) {
      setFormData(localData);
    }
  }, [localData]);

  // Current step state
  const [currentStep, setCurrentStep] = useState(currentTab || 1);
  const [loading, setLoading] = useState(false);

  // Validation schema using Yup for each step
  const validationSchemaStep4 = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("Mobile number is required"),
  });

  const validationSchemaStep1 = Yup.object().shape({
    brandName: Yup.string().required("Brand name is required"),
    makeOfYear: Yup.number().required("Make of year is required"),
    carModel: Yup.string().required("Car model is required"),
  });

  const validationSchemaStep2 = Yup.object().shape({
    fuelType: Yup.string().required("Fuel type is required"),
    carVariant: Yup.string().required("Car variant is required"),
    ownership: Yup.string().required("Ownership details are required"),
  });
  const validationSchemaStep3 = Yup.object().shape({
    kmDriven: Yup.string().required("Kilometers driven is required"),
    registeredCity: Yup.string().required("Registered city is required"),
    transmission: Yup.string().required("Transmission type is required"),
  });

  const initialValuesStep1 = {
    brandName: formData.brandName,
    makeOfYear: formData.makeOfYear,
    carModel: formData.carModel,
  };

  const initialValuesStep2 = {
    fuelType: formData.fuelType,
    carVariant: formData.carVariant,
    ownership: formData.ownership,
  };
  const initialValuesStep3 = {
    kmDriven: formData.kmDriven,
    registeredCity: formData.registeredCity,
    transmission: formData.transmission,
  };

  // Initial form values for each step
  const initialValuesStep4 = {
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
  };

  const saveData = async () => {
    setLoading(true);
    //console.log("Form data", formData);
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const docRef = await addDoc(collection(FirebaseStore, "sellEnquiry"), {
      ...formData,
      date: date.toDateString(),
      time: `${hours}:${minutes}:${seconds}`,
      timestamp: serverTimestamp(),
    });
   
console.log("Document written with ID: ", docRef.id);
    localStorage.removeItem("formData");
    localStorage.removeItem("currentTab");
    setCurrentTab(1);
    setLocalData({});
    setLoading(false);
  };

  return (
    <div className="w-full mx-2">
      <div className="container w-full max-w-2xl px-4 py-10 mx-auto bg-white border shadow-xl rounded-3xl">
        <div className="flex flex-col-reverse items-center justify-between px-2 pb-2 mb-3 border-b lg:px-5 md:flex-row">
          <div className="text-2xl text-primary">
            {/* {currentStep === 4 ? "Last step" : `Step ${currentStep} of 4`} */}
            {currentStep === 1
              ? "Car Information"
              : currentStep === 2
              ? "Additional Information"
              : currentStep === 3
              ? "Additional Information"
              : currentStep === 4
              ? "Contact Details"
              : currentStep === 5
              ? "Preview and Submit"
              : "Thank you for filling out your information!"}
          </div>{" "}
          <div
            className={` ${currentStep > 4 ? "hidden" : "block"} lg:text-lg`}
          >
            Step <span className="text-primary">{currentStep}</span> of 4
          </div>
        </div>

        <div>
          {currentStep === 1 ? (
            <Step1
              setCurrentStep={setCurrentStep}
              initialValuesStep1={initialValuesStep1}
              validationSchemaStep1={validationSchemaStep1}
              setFormData={setFormData}
              formData={formData}
              setCurrentTab={setCurrentTab}
              setLocalData={setLocalData}
            />
          ) : currentStep === 2 ? (
            <Step2
              setCurrentStep={setCurrentStep}
              initialValuesStep2={initialValuesStep2}
              validationSchemaStep2={validationSchemaStep2}
              setFormData={setFormData}
              formData={formData}
              setCurrentTab={setCurrentTab}
              setLocalData={setLocalData}
            />
          ) : currentStep === 3 ? (
            <Step3
              setCurrentStep={setCurrentStep}
              initialValuesStep3={initialValuesStep3}
              validationSchemaStep3={validationSchemaStep3}
              setFormData={setFormData}
              formData={formData}
              setCurrentTab={setCurrentTab}
              setLocalData={setLocalData}
            />
          ) : currentStep === 4 ? (
            <Step4
              setCurrentStep={setCurrentStep}
              initialValuesStep4={initialValuesStep4}
              validationSchemaStep4={validationSchemaStep4}
              setFormData={setFormData}
              formData={formData}
              setCurrentTab={setCurrentTab}
              setLocalData={setLocalData}
            />
          ) : currentStep === 5 ? (
            <Step5
              setCurrentStep={setCurrentStep}
              formData={formData}
              saveData={saveData}
              loading={loading}
            />
          ) : (
            <div className="px-2 mt-4 lg:lg:px-5">
              <h1 className="pb-6">
                We appreciate you contacting us. One of our colleagues will get
                back in touch with you soon! Have a great day!
              </h1>
              {/* <div className="flex justify-center"> */}
              <Link
                to="/"
                className="px-4 py-2 text-white rounded-lg bg-primary lg:px-6"
              >
                Back to Homepage
              </Link>
              {/* </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleOwnerForm2;

const Step1 = ({
  validationSchemaStep1,
  initialValuesStep1,
  setCurrentStep,
  setFormData,
  formData,
  setCurrentTab,
  setLocalData,
}) => {
  const handleSubmit1 = (values) => {
    setFormData({ ...formData, ...values });
    const newFormData = { ...formData, ...values };
    localStorage.setItem("formData", JSON.stringify(newFormData));
    setCurrentTab(2);
    setLocalData((prevLocalData) => ({
      ...prevLocalData,
      ...values,
    }));
    localStorage.setItem("currentTab", 2);
    setCurrentStep(2);
  };
  return (
    <div>
      <Formik
        initialValues={initialValuesStep1}
        validationSchema={validationSchemaStep1}
        onSubmit={handleSubmit1}
      >
        <Form>
          <div className="">
            {/* Step 1: Car Information */}

            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* Brand Name Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="brandName"
                >
                  Brand Name*
                </label>
                <Field
                  as="select"
                  id="brandName"
                  name="brandName"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:border-indigo-500"
                >
                  <option value="">Select brand name</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Citroen">Citroen</option>
                  <option value="Datsun">Datsun</option>
                  <option value="Fiat">Fiat</option>
                  <option value="Ford">Ford</option>
                  <option value="Honda">Honda</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Isuzu">Isuzu</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Kia">Kia</option>
                  <option value="Land Rover">Land Rover</option>
                  <option value="Mahindra">Mahindra</option>
                  <option value="Maruti Suzuki">Maruti Suzuki</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="MG Motors">MG Motors</option>
                  <option value="Mini">Mini</option>
                  <option value="Mitsubishi">Mitsubishi</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Renault">Renault</option>
                  <option value="Skoda">Skoda</option>
                  <option value="Tata">Tata</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Volvo">Volvo</option>
                  {/* Add more options for other car companies */}
                </Field>

                <ErrorMessage
                  name="brandName"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Make of Year Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="makeOfYear"
                >
                  Make of Year*
                </label>
                <Field
                  as="select"
                  id="makeOfYear"
                  name="makeOfYear"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select year</option>
                  {Array.from({ length: 22 }, (_, i) => 2024 - i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                  <option value="2003 or older">2003 or older</option>
                </Field>
                <ErrorMessage
                  name="makeOfYear"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Car Model Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" carModel"
                >
                  Car Model*
                </label>
                <Field
                  id="carModel"
                  name="carModel"
                  type="text"
                  placeholder="Enter car model eg. Swift, i20, Nexon, Compass etc. or Don't know"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="carModel"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Rest of the fields */}
            </div>
          </div>
          <div className="flex mt-8 justify-evenly ">
            <button
              type="submit"
              className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none"
            >
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
const Step2 = ({
  validationSchemaStep2,
  initialValuesStep2,
  setCurrentStep,
  setFormData,
  formData,
  setCurrentTab,
  setLocalData,
}) => {
  const handleSubmit1 = (values) => {
    setFormData({ ...formData, ...values });
    const newFormData = { ...formData, ...values };
    localStorage.setItem("formData", JSON.stringify(newFormData));
    localStorage.setItem("currentTab", 3);
    setCurrentTab(3);
    setLocalData((prevLocalData) => ({
      ...prevLocalData,
      ...values,
    }));
    setCurrentStep(3);
  };
  return (
    <div>
      <Formik
        initialValues={initialValuesStep2}
        validationSchema={validationSchemaStep2}
        onSubmit={handleSubmit1}
      >
        <Form>
          <div className="">
            {/* Step 1: Car Information */}

            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* Fuel Type Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="fuelType"
                >
                  Fuel Type*
                </label>
                <Field
                  as="select"
                  id="fuelType"
                  name="fuelType"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select fuel type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                  <option value="Electric">Electric</option>
                  {/* Add more fuel types as needed */}
                </Field>
                <ErrorMessage
                  name="fuelType"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Ownership Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="ownership"
                >
                  Ownership*
                </label>
                <Field
                  as="select"
                  id="ownership"
                  name="ownership"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select ownership details</option>
                  <option value="1st owner">1st owner</option>
                  <option value="2nd owner">2nd owner</option>
                  <option value="3rd owner">3rd owner</option>
                  <option value="4th owner">4th owner</option>
                  <option value="Car dealer">I am a car dealer</option>
                </Field>
                <ErrorMessage
                  name="ownership"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Car Variant Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" carVariant"
                >
                  Car Variant*
                </label>
                <Field
                  id="carVariant"
                  name="carVariant"
                  type="text"
                  placeholder="Enter car variant eg. VDI, VXi etc. or Don't know,"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="carVariant"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Rest of the fields */}
            </div>
          </div>
          <div className="flex mt-8 justify-evenly ">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="hover:text-white hover:bg-primary  font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none lg:w-1/3 text-primary border border-primary"
            >
              Previous
            </button>
            <button
              type="submit"
              className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none lg:w-1/3"
            >
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
const Step3 = ({
  validationSchemaStep3,
  initialValuesStep3,
  setCurrentStep,
  setFormData,
  formData,
  setCurrentTab,
  setLocalData,
}) => {
  const handleSubmit1 = (values) => {
    setFormData({ ...formData, ...values });
    const newFormData = { ...formData, ...values };
    localStorage.setItem("formData", JSON.stringify(newFormData));
    localStorage.setItem("currentTab", 4);
    setCurrentTab(4);
    setLocalData((prevLocalData) => ({
      ...prevLocalData,
      ...values,
    }));

    setCurrentStep(4);
  };
  return (
    <div>
      <Formik
        initialValues={initialValuesStep3}
        validationSchema={validationSchemaStep3}
        onSubmit={handleSubmit1}
      >
        <Form>
          <div className="">
            {/* Step 1: Contact Details */}

            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* KM Driven Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="kmDriven"
                >
                  KM Driven*
                </label>
                <Field
                  as="select"
                  id="kmDriven"
                  name="kmDriven"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select kilometers driven</option>
                  <option value="0 km -10000 km">0 Km - 10,000 Km</option>
                  <option value="10000 km -20000 km">
                    10,000 Km - 20,000 Km
                  </option>
                  <option value="20000 km -30000 km">
                    20,000 Km - 30,000 Km
                  </option>
                  <option value="30000 km -40000 km">
                    30,000 Km - 40,000 Km
                  </option>
                  <option value="40000 km -50000 km">
                    40,000 Km - 50,000 Km
                  </option>
                  <option value="50000 km -60000 km">
                    50,000 Km - 60,000 Km
                  </option>
                  <option value="60000 km -70000 km">
                    60,000 Km - 70,000 Km
                  </option>
                  <option value="70000 km -80000 km">
                    70,000 Km - 80,000 Km
                  </option>
                  <option value="80000 km -90000 km">
                    80,000 Km - 90,000 Km
                  </option>
                  <option value="90000 km -100000 km">
                    90,000 Km - 1,00,000 Km
                  </option>
                  <option value="100000 km -125000 km">
                    1,00,000 Km - 1,25,000 Km
                  </option>
                  <option value="125000-150000">
                    1,25,000 Km - 1,50,000 Km
                  </option>
                  <option value="150000-175000">
                    1,50,000 Km - 1,75,000 Km
                  </option>
                  <option value="175000-200000">
                    1,75,000 Km - 2,00,000 Km
                  </option>
                  <option value="200000-225000">
                    2,00,000 Km - 2,25,000 Km
                  </option>
                  <option value="225000-250000">
                    2,25,000 Km - 2,50,000 Km
                  </option>
                  <option value="250000-more">2,50,000 Km or more</option>
                </Field>
                <ErrorMessage
                  name="kmDriven"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Registered City Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="registeredCity"
                >
                  Registered City*
                </label>
                <Field
                  as="select"
                  id="registeredCity"
                  name="registeredCity"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" className="text-sm">
                    Select registered city
                  </option>
                  <option value="" disabled className="text-sm">
                    Popular Cities
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Gurgaon">Gurgaon</option>
                  <option value="Noida">Noida</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="" disabled className="pt-4 "></option>
                  <option value="" disabled className="pt-4 ">
                    Other Cities
                  </option>
                  <option value="Agra">Agra</option>
                  <option value="Allahabad">Allahabad</option>
                  <option value="Aurangabad">Aurangabad</option>
                  <option value="Belgaum">Belgaum</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Faridabad">Faridabad</option>
                  <option value="Ghaziabad">Ghaziabad</option>
                  <option value="Hubli">Hubli</option>
                  <option value="Indore">Indore</option>
                  <option value="Jodhpur">Jodhpur</option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Ludhiana">Ludhiana</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Mangalore">Mangalore</option>
                  <option value="Meerut">Meerut</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Salem">Salem</option>
                  <option value="Sonipat">Sonipat</option>
                  <option value="Surat">Surat</option>
                  <option value="Trichy">Trichy</option>
                  <option value="Tumkur">Tumkur</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Warangal">Warangal</option>
                </Field>
                <ErrorMessage
                  name="registeredCity"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Transmission Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="transmission"
                >
                  Transmission*
                </label>
                <Field
                  as="select"
                  id="transmission"
                  name="transmission"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select transmission type</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </Field>
                <ErrorMessage
                  name="transmission"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Rest of the fields */}{" "}
            </div>
          </div>
          <div className="flex mt-8 justify-evenly ">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="hover:text-white hover:bg-primary  font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none lg:w-1/3 text-primary border border-primary"
            >
              Previous
            </button>
            <button
              type="submit"
              className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none lg:w-1/3"
            >
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
const Step4 = ({
  validationSchemaStep4,
  initialValuesStep4,
  setFormData,
  setCurrentStep,
  formData,
  setCurrentTab,
  setLocalData,
}) => {
  const handleSubmit1 = (values) => {
    setFormData({ ...formData, ...values });
    const newFormData = { ...formData, ...values };
    localStorage.setItem("formData", JSON.stringify(newFormData));
    localStorage.setItem("currentTab", 5);
    setCurrentTab(5);
    setLocalData((prevLocalData) => ({
      ...prevLocalData,
      ...values,
    }));
    setCurrentStep(5);
  };
  return (
    <div>
      <Formik
        initialValues={initialValuesStep4}
        validationSchema={validationSchemaStep4}
        onSubmit={handleSubmit1}
      >
        <Form>
          <div className="">
            {/* Step 4: Contact Details */}

            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* Name Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" name"
                >
                  Name*
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Mobile Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" mobile"
                >
                  Mobile*
                </label>
                <Field
                  id="mobile"
                  name="mobile"
                  type="tel"
                  maxLength="10"
                  placeholder="Enter your mobile number"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Email Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" email"
                >
                  Email*
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Rest of the fields */}
            </div>
          </div>
          <div className="flex mt-8 justify-evenly ">
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="hover:text-white hover:bg-primary  font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none lg:w-1/3 text-primary border border-primary"
            >
              Previous
            </button>

            <button
              type="submit"
              className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none lg:w-1/3"
            >
              Preview
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const Step5 = ({ setCurrentStep, formData, saveData, loading }) => {
  const handleSubmit1 = async (values) => {
    try {
      await axios
        .post("https://true-value.onrender.com/sell", {
          ...formData,
        })
        .then((res) => {
          // toast.success("Enquiry sent successfully");
          toast.success("Form submitted successfully");
        })
        .catch((err) => {
          // setLoader(false);
          toast.error("Error submitting enquiry");
        });
    } catch (error) {
      console.error("Error submitting enquiry: ", error);
      toast.error("Error submitting enquiry");
    }



    try {
      let res = saveData();
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("This didn't submitted.", {
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });
    } finally {
      setCurrentStep(6);
    }
  };
  return (
    <div>
      <div className="px-2 mt-4 lg:lg:px-5">
        <div className="w-full ">
          <table className="">
            <tbody>
              <tr className="mb-2">
                <td className="pb-2 text-gray-500">Brand Name: </td>

                <td className="px-4 text-primary">{formData.brandName}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Make of Year: </td>
                <td className="px-4 text-primary">{formData.makeOfYear}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Car Model: </td>
                <td className="px-4 text-primary">{formData.carModel}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Fuel Type: </td>
                <td className="px-4 text-primary">{formData.fuelType}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Ownership: </td>
                <td className="px-4 text-primary">{formData.ownership}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Car Variant: </td>
                <td className="px-4 text-primary">{formData.carVariant}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">KM Driven: </td>
                <td className="px-4 text-primary">{formData.kmDriven}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Registered City: </td>
                <td className="px-4 text-primary">{formData.registeredCity}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Transmission: </td>
                <td className="px-4 text-primary">{formData.transmission}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Name: </td>
                <td className="px-4 text-primary">{formData.name}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Mobile: </td>
                <td className="px-4 text-primary">{formData.mobile}</td>
              </tr>
              <tr>
                <td className="pb-2 text-gray-500">Email: </td>
                <td className="px-4 text-primary">{formData.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex mt-8 justify-evenly ">
        {!loading && (
          <button
            type="button"
            onClick={() => setCurrentStep(4)}
            className="hover:text-white hover:bg-primary  font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none lg:w-1/3 text-primary border border-primary"
          >
            Previous
          </button>
        )}
        <button
          type="submit"
          onClick={handleSubmit1}
          className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none lg:w-1/3"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};
