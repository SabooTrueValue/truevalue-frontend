import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const VehicleOwnerForm = () => {
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
      case 1:  return (
        <div className="">
          {/* Step 2: Car Information */}
          <h4 className="text-xl text-center text-primary">
            Step 1: Car Information
          </h4>
          <div className="flex flex-col items-center mb-6 -mx-3">
            {/* Brand Name Field */}
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                htmlFor=" brandName"
              >
                Brand Name*
              </label>
              <Field
                id="brandName"
                name="brandName"
                type="text"
                placeholder="Enter brand name"
                className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="brandName"
                component="div"
                className="text-red-500"
              />
            </div>
            {/* Make of Year Field */}
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                htmlFor=" makeOfYear"
              >
                Make of Year*
              </label>
              <Field
                id="makeOfYear"
                name="makeOfYear"
                type="number"
                placeholder="Enter make of year"
                className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="makeOfYear"
                component="div"
                className="text-red-500"
              />
            </div>
            {/* Car Model Field */}
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
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
                placeholder="Enter car model"
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
          <>
            {/* Step 2: Additional Information */}
            <h4 className="text-xl text-center text-primary">
              Step 2: Additional Information
            </h4>
            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* Fuel Type Field */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" fuelType"
                >
                  Fuel Type*
                </label>
                <Field
                  id="fuelType"
                  name="fuelType"
                  type="text"
                  placeholder="Enter fuel type"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="fuelType"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Car Variant Field */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
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
                  placeholder="Enter car variant"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="carVariant"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Ownership Field */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" ownership"
                >
                  Ownership*
                </label>
                <Field
                  id="ownership"
                  name="ownership"
                  type="text"
                  placeholder="Enter ownership details"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="ownership"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Rest of the fields */}
            </div>
          </>
        );
      case 3:
        return (
          <>
            {/* Step 3: Additional Information */}
            <h4 className="text-xl text-center text-primary">
              Step 3: Final Information
            </h4>
            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* KM Driven Field */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" kmDriven"
                >
                  KM Driven*
                </label>
                <Field
                  id="kmDriven"
                  name="kmDriven"
                  type="number"
                  placeholder="Enter kilometers driven"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="kmDriven"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Registered City Field */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" registeredCity"
                >
                  Registered City*
                </label>
                <Field
                  id="registeredCity"
                  name="registeredCity"
                  type="text"
                  placeholder="Enter registered city"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="registeredCity"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Transmission Field */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block px-2 mt-3 mb-1 font-semibold uppercase lg:mt-4 text-primary"
                  htmlFor=" transmission"
                >
                  Transmission*
                </label>
                <Field
                  id="transmission"
                  name="transmission"
                  type="text"
                  placeholder="Enter transmission type"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="transmission"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Rest of the fields */}{" "}
            </div>
          </>
        );
      case 4:
        return (
          <div className="">
            {/* Step 1: Contact Details */}
            <h4 className="text-xl text-center text-primary">
              Step 4: Contact Details
            </h4>
            <div className="flex flex-col items-center mb-6 -mx-3">
              {/* Name Field */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
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
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
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
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
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
    <div className="container w-full px-4 py-10 mx-auto bg-white border shadow-xl rounded-3xl xl:w-1/2 ">
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
              {renderFormStep(formik)}
              {/* Next and Previous buttons */}
              <div className="flex justify-center gap-20 mt-8 ">
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
                    type="button"
                    onClick={handleNextStep}
                    className="text-white bg-primary focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none"
                  >
                    Next
                  </button>
                )}
                {currentStep === 4 && (
                  <button
                    type="submit"
                    disabled={formik.isSubmitting || !formik.isValid}
                    className="text-white bg-primary focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 select-none"
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

export default VehicleOwnerForm;
