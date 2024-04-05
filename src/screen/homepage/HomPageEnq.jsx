import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FirebaseStore } from "../../components/context/Firebase";

import { Formik, Form, Field, ErrorMessage } from "formik";

// Inside your component
import { object, string } from "yup";

const phoneRegExp = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const proposelSchema = object().shape({
  name: string().required("This field is required*"),
  email: string()
    .email("Invalid email address")
    .matches(emailRegex, "Invalid email"),
  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("This field is required*"),
  type: string().required("This field is required*"),
});

export const HomePageEnq = ({ title }) => {
  const [loading, setLoading] = useState(false);

  // let history = useNavigate();

  return (
    <div className="py-2">
      <div className="container px-5 mx-auto space-y-3 lg:px-0 ">
        {/* <div className="py-2 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl">
          {title}
        </div> */}
        {/* <div className="py-2 text-3xl font-medium text-left uppercase ">
          WHERE DREAMS MEET THE ROAD.
        </div>
        <div className="py-2 text-3xl font-medium text-left uppercase">
          BEGIN YOUR JOURNEY INTO LUXURY HERE.
        </div> */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            type: "",
          }}
          validationSchema={proposelSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setLoading(true);
            setSubmitting(true);
            // First API call - Zoho Web Form - name="WebToLeads54158000007156717"
            try {
              await axios
                .post("https://true-value.onrender.com/homequery", {
                  ...values,
                })
                .then((res) => {
                  toast.success("Form submitted successfully");
                })
                .catch((err) => {
                  toast.error("Error submitting enquiry");
                });
            } catch (error) {
              console.error("Error submitting enquiry: ", error);
              toast.error("Error submitting enquiry");
            }

            // Second API call - Firebase Firestore
            try {
              let date = new Date();
              let hours = date.getHours();
              let minutes = date.getMinutes();
              let seconds = date.getSeconds();
              const docRef = await addDoc(
                collection(FirebaseStore, "homepageEnquiries"),
                {
                  ...values,
                  date: date.toDateString(),
                  time: `${hours}:${minutes}:${seconds}`,
                  timestamp: serverTimestamp(),
                }
              );
              console.log("Document written with ID: ", docRef.id);
            } catch (error) {
              console.error("Error adding document: ", error);
              toast.error("Error submitting enquiry");
            }
            setSubmitting(false);
            setLoading(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid gap-4 lg:gap-6">
                <div className="relative flex flex-col justify-end ">
                  {/* <label
                      htmlFor="name"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Name
                    </label> */}
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    required
                    maxLength={35}
                    placeholder="Name"
                    className="w-full h-10 text-lg  font-sans border-b-2 border-primary outline-none  px-0.5 text-center lg:text-left "
                  />
                </div>

                <div className="relative flex flex-col justify-end ">
                  {/* <label
                        htmlFor="phone"
                        className="invisible text-sm leading-7 text-gray-600"
                      >
                        Phone No.
                      </label> */}
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />

                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="off"
                    maxLength={10}
                    placeholder="Mobile Number"
                    className="w-full text-lg text-center h-10 font-sans border-b-2 border-primary outline-none placeholder:text-lg   px-0.5 lg:text-left"
                  />
                </div>
                <div className="relative flex flex-col justify-end ">
                  {/* <label
                        htmlFor="phone"
                        className="invisible text-sm leading-7 text-gray-600"
                      >
                        Phone No.
                      </label> */}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />

                  <Field
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                    className="w-full text-lg text-center h-10 font-sans border-b-2 border-primary outline-none placeholder:text-lg   px-0.5 lg:text-left"
                  />
                </div>

                <div className="relative flex flex-col justify-end ">
                  {/* <label
                     className="block font-semibold text-gray-800 text-md"
                     htmlFor="model"
                   >
                     Product Name
                   </label> */}
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />
                  <Field
                    as="select"
                    className="w-full h-10 px-0.5 font-sans text-center border-b-2 border-primary outline-none placeholder:text-lg placeholder:text-gray-400 lg:text-left"
                    name="type"
                    id="type"
                    required
                    placeholder="Interested in"
                  >
                    <option value="" disabled className="bg-gray-100 ">
                      Interested in
                    </option>
                    <option value="I Want To Buy" className="bg-gray-100 ">
                      I Want To Buy
                    </option>
                    <option className="bg-gray-100 " value="I Want To Sell">
                      I Want To Sell
                    </option>
                  </Field>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={` px-6 py-2  hover:scale-95 text-white duration-200 mt-4  text-lg rounded-full bg-primary `}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <CgSpinner className="w-5 h-5 mr-2 animate-spin" />
                      Submitting
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>

              <div className="container mt-3 text-xs text-gray-600 lg:mt-4">
                <span className="font-semibold">*Disclaimer:</span> By clicking
                'Submit', you have agreed to our Terms and Conditions.
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

HomePageEnq.defaultProps = {
  title: "ENQUIRY FORM",
};
