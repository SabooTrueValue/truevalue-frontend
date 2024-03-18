import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FirebaseStore } from "../../../components/context/Firebase";

const options = [
  { value: "option-1", label: "Option 1" },
  { value: "option-2", label: "Option 2" },
  { value: "option-3", label: "Option 3" },
];

function PostAVehicleDash({ setCurrentTab }) {
  const validationSchema = Yup.object().shape({
    trueValueLocation: Yup.string().required("Truevalue Location is required"),
    vehicleStatus: Yup.string().required("Vehicle Status is required"),
    vehicleTitle: Yup.string().required("Vehicle Title is required"),
    vehicleBrand: Yup.string().required("Vehicle Brand is required"),
    vehicleOverview: Yup.string().required("Vehicle Overview is required").max(500),
    userType: Yup.string().required("User Type is required"),
    vehicleCategory: Yup.string().required("Vehicle Category is required"),
    transmission: Yup.string().required("Transmission is required"),
    bodyType: Yup.string().required("Body Type is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    fuelType: Yup.string().required("Fuel Type is required"),
    modelYear: Yup.number()
      .required("Model Year is required")
      .positive("Model Year must be positive"),
    engineCapacity: Yup.string().required("Engine Capacity is required"),
    registeredCity: Yup.string().required("Registered City is required"),
    color: Yup.string().required("Color is required"),
    registrationNo: Yup.string().required("Registration No is required"),
    kmDriven: Yup.number()
      .required("KM Driven is required")
      .positive("KM Driven must be positive"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Store the form data in Firestore
      console.log("Submitting form:", values);
      //   console.log("Submitting form:", db)
      await FirebaseStore.collection("form-data").add(values);
      //   await db.collection("form-data").add(values);

      // Reset the form after successful submission
      resetForm();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container px-4 py-10 mx-auto">
      <Formik
        initialValues={{
          trueValueLocation: "",
          vehicleStatus: "",
          vehicleTitle: "",
          vehicleBrand: "",
          vehicleOverview: "",
          userType: "",
          vehicleCategory: "",
          transmission: "",
          bodyType: "",
          price: "",
          fuelType: "",
          modelYear: "",
          engineCapacity: "",
          registeredCity: "",
          color: "",
          registrationNo: "",
          kmDriven: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap mb-6 -mx-3 gap-y-4">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="trueValueLocation"
                >
                  Truevalue Location*
                </label>
                <Field
                  id="trueValueLocation"
                  name="trueValueLocation"
                  as="select"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="trueValueLocation"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="vehicleStatus"
                >
                  Vehicle Status*
                </label>
                <Field
                  id="vehicleStatus"
                  name="vehicleStatus"
                  as="select"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="vehicleStatus"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Add other form fields similarly */}
              {/* Vehicle Title */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="vehicleTitle"
                >
                  Vehicle Title*
                </label>
                <Field
                  id="vehicleTitle"
                  name="vehicleTitle"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="vehicleTitle"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Vehicle Brand */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="vehicleBrand"
                >
                  Vehicle Brand*
                </label>
                <Field
                  id="vehicleBrand"
                  name="vehicleBrand"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="vehicleBrand"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Vehicle Overview */}
              <div className="w-full px-3 mb-6 md:mb-0 lg:w-1/2 min-h-16">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="vehicleOverview"
                >
                  Vehicle Overview*
                </label>
                <Field
                  id="vehicleOverview"
                  name="vehicleOverview"
                  as="textarea"
                  rows="2"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 max-h-20"
                />
                <ErrorMessage
                  name="vehicleOverview"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* User Type */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="userType"
                >
                  User Type*
                </label>
                <Field
                  id="userType"
                  name="userType"
                  as="select"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="userType"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Vehicle Category */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="vehicleCategory"
                >
                  Vehicle Category*
                </label>
                <Field
                  id="vehicleCategory"
                  name="vehicleCategory"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="vehicleCategory"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Transmission */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="transmission"
                >
                  Transmission*
                </label>
                <Field
                  id="transmission"
                  name="transmission"
                  as="select"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="transmission"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Body Type */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="bodyType"
                >
                  Body Type*
                </label>
                <Field
                  id="bodyType"
                  name="bodyType"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="bodyType"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Price */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="price"
                >
                  Price*
                </label>
                <Field
                  id="price"
                  name="price"
                  type="number"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Fuel Type */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="fuelType"
                >
                  Fuel Type*
                </label>
                <Field
                  id="fuelType"
                  name="fuelType"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="fuelType"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Model Year */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="modelYear"
                >
                  Model Year*
                </label>
                <Field
                  id="modelYear"
                  name="modelYear"
                  type="number"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="modelYear"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Engine Capacity */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="engineCapacity"
                >
                  Engine Capacity*
                </label>
                <Field
                  id="engineCapacity"
                  name="engineCapacity"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="engineCapacity"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Registered City */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="registeredCity"
                >
                  Registered City*
                </label>
                <Field
                  id="registeredCity"
                  name="registeredCity"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="registeredCity"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Color */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="color"
                >
                  Color*
                </label>
                <Field
                  id="color"
                  name="color"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="color"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Registration No */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="registrationNo"
                >
                  Registration No*
                </label>
                <Field
                  id="registrationNo"
                  name="registrationNo"
                  type="text"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="registrationNo"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* KM Driven */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-bold uppercase"
                  htmlFor="kmDriven"
                >
                  KM Driven*
                </label>
                <Field
                  id="kmDriven"
                  name="kmDriven"
                  type="number"
                  className="w-full py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="kmDriven"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setCurrentTab(1)}
                type="submit"
                className="text-white bg-truevalue  focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-10 py-2.5 text-center mr-2 mb-2  "
              >
                Next
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default PostAVehicleDash;
