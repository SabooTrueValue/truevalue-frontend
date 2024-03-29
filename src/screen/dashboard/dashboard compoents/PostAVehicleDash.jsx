import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useFormData } from "../../../components/Other/FormDataProvider";

const outletsOptions = [
  { value: "Kompally", label: "Kompally" },
  { value: "Somajiguda", label: "Somajiguda" },
  { value: "Komajiguda", label: "Komajiguda" },
  { value: "Malakpet", label: "Malakpet" },
];

function PostAVehicleDash({ setCurrentTab }) {
  const { postVehicleData, setPostVehicleData } = useFormData();

  const validationSchema = Yup.object().shape({
    trueValueLocation: Yup.string().required("Truevalue Location is required"),
    vehicleStatus: Yup.string().required("Vehicle Status is required"),
    vehicleTitle: Yup.string().required("Vehicle Title is required"),
    vehicleBrand: Yup.string().required("Vehicle Brand is required"),
    vehicleOverview: Yup.string()
      .required("Vehicle Overview is required")
      .max(500),
    seatingCapacity: Yup.number()
      .required("Seating Capacity is required")
      .positive("Seating Capacity must be positive"),
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
      localStorage.setItem("postVehicleData", JSON.stringify(values));
      //   console.log("Submitting form:", db)
      setPostVehicleData((prev) => ({ ...prev, ...values }));

      //   await db.collection("form-data").add(values);

      // Reset the form after successful submission

      setCurrentTab(1);
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
          trueValueLocation: postVehicleData.trueValueLocation || "",
          vehicleStatus: postVehicleData.vehicleStatus || "",
          vehicleTitle: postVehicleData.vehicleTitle || "",
          vehicleBrand: postVehicleData.vehicleBrand || "",
          vehicleOverview: postVehicleData.vehicleOverview || "",
          seatingCapacity: postVehicleData.seatingCapacity || "",
          userType: postVehicleData.userType || "",
          vehicleCategory: postVehicleData.vehicleCategory || "",
          transmission: postVehicleData.transmission || "",
          bodyType: postVehicleData.bodyType || "",
          price: postVehicleData.price || "",
          fuelType: postVehicleData.fuelType || "",
          modelYear: postVehicleData.modelYear || "",
          engineCapacity: postVehicleData.engineCapacity || "",
          registeredCity: postVehicleData.registeredCity || "",
          color: postVehicleData.color || "",
          registrationNo: postVehicleData.registrationNo || "",
          kmDriven: postVehicleData.kmDriven || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form>
            <div className="flex flex-wrap mb-6 -mx-3 gap-y-4">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="trueValueLocation"
                >
                  Truevalue Location*
                </label>
                <Field
                  id="trueValueLocation"
                  name="trueValueLocation"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
                  {outletsOptions.map((option) => (
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
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="vehicleStatus"
                >
                  Vehicle Status*
                </label>
                <Field
                  id="vehicleStatus"
                  name="vehicleStatus"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
                  <option value="Sale">Sale</option>
                  <option value="Booked">Booked</option>
                  <option value="Sold">Sold</option>
                </Field>
                <ErrorMessage
                  name="vehicleStatus"
                  component="div"
                  className="text-red-500"
                />
              </div>{" "}
              {/* Vehicle Brand */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="vehicleBrand"
                >
                  Vehicle Brand*
                </label>
                <Field
                  id="vehicleBrand"
                  name="vehicleBrand"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
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
                </Field>
                <ErrorMessage
                  name="vehicleBrand"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Add other form fields similarly */}
              {/* Vehicle Title */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="vehicleTitle"
                >
                  Vehicle MODEL*
                </label>
                <Field
                  id="vehicleTitle"
                  name="vehicleTitle"
                  type="text"
                  placeholder="e.g. Swift, City, Compass, Jimny, etc."
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="vehicleTitle"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Vehicle Overview */}
              <div className="w-full px-3 mb-6 md:mb-0 lg:w-1/3 min-h-16 md:w-1/2 ">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="vehicleOverview"
                >
                  Vehicle Overview*
                </label>
                <Field
                  id="vehicleOverview"
                  name="vehicleOverview"
                  as="textarea"
                  rows="2"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 max-h-20"
                />
                <ErrorMessage
                  name="vehicleOverview"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Seating Capacity */}
              <div className="w-full px-3 mb-6 md:mb-0 lg:w-1/3 md:w-1/2 ">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="seatingCapacity"
                >
                  Seating Capacity*
                </label>
                <Field
                  id="seatingCapacity"
                  name="seatingCapacity"
                  type="number"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="seatingCapacity"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* User Type */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="userType"
                >
                  Ownership Type*
                </label>
                <Field
                  id="userType"
                  name="userType"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
                  <option value="1st owner">1st owner</option>
                  <option value="2nd owner">2nd owner</option>
                  <option value="3rd owner">3rd owner</option>
                  <option value="4th owner">4th owner</option>
                  {/* <option value="Car dealer">I am a car dealer</option> */}
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
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="vehicleCategory"
                >
                  Vehicle Category*
                </label>
                <Field
                  id="vehicleCategory"
                  name="vehicleCategory"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled></option>
                  <option value="Certified">Certified</option>
                  <option value="Non Certified">Non Certified</option>
                </Field>
                <ErrorMessage
                  name="vehicleCategory"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Transmission */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="transmission"
                >
                  Transmission*
                </label>
                <Field
                  id="transmission"
                  name="transmission"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
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
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="bodyType"
                >
                  Body Type*
                </label>
                <Field
                  id="bodyType"
                  name="bodyType"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
                  <option value="Minivan">Minivan</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="MUV">MUV</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Convertible">Convertible</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Wagon">Wagon</option>
                </Field>
                <ErrorMessage
                  name="bodyType"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Price */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="price"
                >
                  Price - ₹*
                </label>
                <Field
                  id="price"
                  name="price"
                  type="number"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="fuelType"
                >
                  Fuel Type*
                </label>
                <Field
                  id="fuelType"
                  name="fuelType"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                  <option value="Electric">Electric</option>
                </Field>
                <ErrorMessage
                  name="fuelType"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Model Year */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="modelYear"
                >
                  Model Year*
                </label>
                <Field
                  id="modelYear"
                  name="modelYear"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
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
                  name="modelYear"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Engine Capacity */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="engineCapacity"
                >
                  Engine Capacity*
                </label>
                <Field
                  id="engineCapacity"
                  name="engineCapacity"
                  type="text"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="registeredCity"
                >
                  Registered City*
                </label>
                <Field
                  id="registeredCity"
                  name="registeredCity"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled className="text-sm"></option>
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
              {/* Color */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="color"
                >
                  Color*
                </label>
                <Field
                  id="color"
                  name="color"
                  as="select"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value=""></option>
                  <option value="Beige, Brown, Bronze">
                    Beige, Brown, Bronze
                  </option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Grey">Grey</option>
                  <option value="Red, Maroon">Red, Maroon</option>
                  <option value="Orange">Orange</option>
                  <option value="Purple, Voilet, Wine">
                    Purple, Voilet, Wine
                  </option>
                  <option value="Silver">Silver</option>
                  <option value="White">White</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Other">Other</option>
                </Field>

                <ErrorMessage
                  name="color"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* Registration No */}
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 lg:w-1/3">
                <label
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="registrationNo"
                >
                  Registration No*
                </label>
                <Field
                  id="registrationNo"
                  name="registrationNo"
                  type="text"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block mb-2 font-semibold uppercase"
                  htmlFor="kmDriven"
                >
                  KM Driven*
                </label>
                <Field
                  id="kmDriven"
                  name="kmDriven"
                  type="number"
                  className="w-full px-1 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="kmDriven"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex justify-center" >
              <button
                // onClick={() => setCurrentTab(2)}
                type="submit"
                className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-20 py-2.5 select-none "
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PostAVehicleDash;
