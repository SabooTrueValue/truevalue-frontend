import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const VehicleFormData = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("Mobile number is required"),
    brandName: Yup.string().required("Brand name is required"),
    makeOfYear: Yup.number().required("Make of year is required"),
    carModel: Yup.string().required("Car model is required"),
    fuelType: Yup.string().required("Fuel type is required"),
    carVariant: Yup.string().required("Car variant is required"),
    ownership: Yup.string().required("Ownership details are required"),
    kmDriven: Yup.number().required("Kilometers driven is required"),
    registeredCity: Yup.string().required("Registered city is required"),
    transmission: Yup.string().required("Transmission type is required"),
    // Add more validation rules for other fields
  });

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    brandName: "",
    makeOfYear: "",
    carModel: "",
    fuelType: "",
    carVariant: "",
    ownership: "",
    kmDriven: "",
    registeredCity: "",
    transmission: "",
  };

  // Submit function
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false); // Set submitting to false to enable button after form submission
  };

  return (
    <div className="container px-4 py-10 mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            {/* Contact Details */}
            <h4 className="text-xl text-primary lg:text-4xl">
              Contact Details
            </h4>
            <div className="flex flex-wrap mb-6 -mx-3 lg:mb-10">
              {/* Name Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" name"
                >
                  Name*
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name here"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Email Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" email"
                >
                  Email*
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email here " 
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Mobile Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" mobile"
                >
                  Mobile*
                </label>
                <Field
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <h4 className="text-xl text-primary lg:text-4xl">Car Details</h4>
            <div className="flex flex-wrap mb-6 -mx-3">
              {/* Rest of the form fields */}
              {/* Brand Name Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" brandName"
                >
                  Brand Name*
                </label>
                <Field
                  id="brandName"
                  name="brandName"
                  type="text"
                  placeholder="Enter brand name eg. Maruti, Hyundai, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="brandName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Make of Year Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" makeOfYear"
                >
                  Make of Year*
                </label>
                <Field
                  id="makeOfYear"
                  name="makeOfYear"
                  type="number"
                  placeholder="Enter make of year eg. 2015, 2016, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="makeOfYear"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Car Model Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" carModel"
                >
                  Car Model*
                </label>
                <Field
                  id="carModel"
                  name="carModel"
                  type="text"
                  placeholder="Enter car model eg. Swift, i20, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="carModel"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Fuel Type Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" fuelType"
                >
                  Fuel Type*
                </label>
                <Field
                  id="fuelType"
                  name="fuelType"
                  type="text"
                  placeholder="Enter fuel type eg. Petrol, Diesel, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="fuelType"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Car Variant Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" carVariant"
                >
                  Car Variant*
                </label>
                <Field
                  id="carVariant"
                  name="carVariant"
                  type="text"
                  placeholder="Enter car variant eg. VDI, VXi, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="carVariant"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Ownership Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" ownership"
                >
                  Ownership*
                </label>
                <Field
                  id="ownership"
                  name="ownership"
                  type="text"
                  placeholder="Enter ownership details eg. First, Second, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="ownership"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* KM Driven Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" kmDriven"
                >
                  KM Driven*
                </label>
                <Field
                  id="kmDriven"
                  name="kmDriven"
                  type="number"
                  placeholder="Enter kilometers driven eg. 10000, 20000, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="kmDriven"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Registered City Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" registeredCity"
                >
                  Registered City*
                </label>
                <Field
                  id="registeredCity"
                  name="registeredCity"
                  type="text"
                  placeholder="Enter registered city eg. Delhi, Mumbai, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="registeredCity"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Transmission Field */}
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block px-2 mt-4 mb-1 font-semibold uppercase lg:mt-6 text-primary"
                  htmlFor=" transmission"
                >
                  Transmission*
                </label>
                <Field
                  id="transmission"
                  name="transmission"
                  type="text"
                  placeholder="Enter transmission type eg. Manual, Automatic, etc."
                  className="w-full px-2 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-b-primary"
                />
                <ErrorMessage
                  name="transmission"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
                className="text-white bg-primary focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg  px-5 lg:px-10 py-2.5 text-center mr-2 mb-2 lg:w-1/3 md:w-1/2 text-lg"
              >
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VehicleFormData;
