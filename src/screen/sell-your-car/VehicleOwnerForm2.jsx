import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const VehicleOwnerForm2 = () => {
  // Current step state
  const [currentStep, setCurrentStep] = useState(1);

  // Validation schema using Yup for each step
  const validationSchemaStep1 = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("Mobile number is required"),
  });

  const validationSchemaStep2 = Yup.object().shape({
    brandName: Yup.string().required("Brand name is required"),
    makeOfYear: Yup.number().required("Make of year is required"),
    carModel: Yup.string().required("Car model is required"),
  });

  const validationSchemaStep3 = Yup.object().shape({
    fuelType: Yup.string().required("Fuel type is required"),
    carVariant: Yup.string().required("Car variant is required"),
    ownership: Yup.string().required("Ownership details are required"),
  });
  const validationSchemaStep4 = Yup.object().shape({
    kmDriven: Yup.number().required("Kilometers driven is required"),
    registeredCity: Yup.string().required("Registered city is required"),
    transmission: Yup.string().required("Transmission type is required"),
  });

  // Initial form values for each step
  const initialValuesStep1 = {
    name: "",
    email: "",
    mobile: "",
  };

  const initialValuesStep2 = {
    brandName: "",
    makeOfYear: "",
    carModel: "",
  };

  const initialValuesStep3 = {
    fuelType: "",
    carVariant: "",
    ownership: "",
  };
  const initialValuesStep4 = {
    kmDriven: "",
    registeredCity: "",
    transmission: "",
  };

  // Function to handle next step
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to handle previous step
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Submit function
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false); // Set submitting to false to enable button after form submission
  };

  // Render form based on current step
  const renderFormStep = (formik) => {
    switch (currentStep) {
      case 1:
        return (
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
                <select
                  id="brandName"
                  name="brandName"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:border-indigo-500"
                >
                  <option value="" selected disabled>
                    Select brand name
                  </option>
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
                </select>

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
                <select
                  id="makeOfYear"
                  name="makeOfYear"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled selected>
                    Select year
                  </option>
                  {Array.from({ length: 22 }, (_, i) => 2024 - i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                  <option value="2003 or older">2003 or older</option>
                </select>
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
                  placeholder="Enter car model eg. Swift, i20, etc."
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
        );

      case 2:
        return (
          <div>
            {/* Step 2: Additional Information */}

            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* Fuel Type Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="fuelType"
                >
                  Fuel Type*
                </label>
                <select
                  id="fuelType"
                  name="fuelType"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled selected>
                    Select fuel type
                  </option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                  <option value="CNG">Electric</option>
                  {/* Add more fuel types as needed */}
                </select>
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
                <select
                  id="ownership"
                  name="ownership"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled selected>
                    Select ownership details
                  </option>
                  <option value="1st owner">1st owner</option>
                  <option value="2nd owner">2nd owner</option>
                  <option value="3rd owner">3rd owner</option>
                  <option value="4th owner">4th owner</option>
                  <option value="Car dealer">I am a car dealer</option>
                </select>
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
        );
      case 3:
        return (
          <div>
            {/* Step 3: Additional Information */}

            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* KM Driven Field */}
              <div className="w-full px-3 mb-6 md:mb-2 lg:px-6">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor="kmDriven"
                >
                  KM Driven*
                </label>
                <select
                  id="kmDriven"
                  name="kmDriven"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled selected>
                    Select kilometers driven
                  </option>
                  <option value="0-10000">0 Km - 10,000 Km</option>
                  <option value="10000-20000">10,000 Km - 20,000 Km</option>
                  <option value="20000-30000">20,000 Km - 30,000 Km</option>
                  <option value="30000-40000">30,000 Km - 40,000 Km</option>
                  <option value="40000-50000">40,000 Km - 50,000 Km</option>
                  <option value="50000-60000">50,000 Km - 60,000 Km</option>
                  <option value="60000-70000">60,000 Km - 70,000 Km</option>
                  <option value="70000-80000">70,000 Km - 80,000 Km</option>
                  <option value="80000-90000">80,000 Km - 90,000 Km</option>
                  <option value="90000-100000">90,000 Km - 1,00,000 Km</option>
                  <option value="100000-125000">
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
                </select>
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
                <select
                  id="registeredCity"
                  name="registeredCity"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled selected className="text-sm">
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
                </select>
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
                <select
                  id="transmission"
                  name="transmission"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled selected>
                    Select transmission type
                  </option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
                <ErrorMessage
                  name="transmission"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Rest of the fields */}{" "}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="">
            {/* Step 1: Contact Details */}

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
        );

      default:
        return null;
    }
  };

  return (
    <div className="container w-full max-w-2xl px-4 py-10 mx-2 bg-white border shadow-xl lg:mx-auto rounded-3xl">
      <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b lg:px-5">
        <div className="text-2xl text-primary">
          {/* {currentStep === 4 ? "Last step" : `Step ${currentStep} of 4`} */}
          {currentStep === 1
            ? "Car Information"
            : currentStep === 2
            ? "Additional Information"
            : currentStep === 3
            ? "Additional Information"
            : "Contact Details"}
        </div>{" "}
        <div className="text-gray-600 ">Step {currentStep} of 4</div>
      </div>
      <div className="">
        <Formik
          initialValues={
            currentStep === 1
              ? initialValuesStep1
              : currentStep === 2
              ? initialValuesStep2
              : currentStep === 3
              ? initialValuesStep3
              : initialValuesStep4
          }
          validationSchema={
            currentStep === 1
              ? validationSchemaStep1
              : currentStep === 2
              ? validationSchemaStep2
              : currentStep === 3
              ? validationSchemaStep3
              : validationSchemaStep4
          }
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              {/* {renderFormStep(formik)} */}

              {renderFormStep(formik)}

              {/* Next and Previous buttons */}

              <div className="flex mt-8 justify-evenly ">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="text-gray-600 border focus:outline-none font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 hover:border-primary select-none"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 4 && (
                  <button
                    type="submit"
                    onClick={handleNextStep}
                    className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none"
                  >
                    Next
                  </button>
                )}
                {currentStep === 4 && (
                  <button
                    type=""
                    disabled={formik.isSubmitting || !formik.isValid}
                    className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none"
                  >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      
    </div>
  );
};

export default VehicleOwnerForm2;
