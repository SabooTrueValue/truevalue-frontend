import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";

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
  model: string().required("This field is required*"),
});

export const HomePageEnq = ({ title }) => {
  const [loading, setLoading] = useState(false);

  let history = useNavigate();

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
            model: "",
          }}
          validationSchema={proposelSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setLoading(true);
            setSubmitting(true);
            // First API call - Zoho Web Form - name="WebToLeads54158000007156717"
            try {
              const response = await fetch(
                "https://crm.zoho.in/crm/WebToLeadForm",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: new URLSearchParams({
                    xnQsjsdp:
                      "5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b",
                    zc_gad: "",
                    xmIwtLD:
                      "3e4c511e1bfac462fb9ac158b261b0d3e54ddbaf41eb8a08b30b4fc061369283",
                    actionType: "TGVhZHM=",
                    returnURL: "https://www.saboonexa.in/",
                    "Last Name": values.name,
                    Email:
                      values.email.length > 0
                        ? values.email
                        : values.phone + "@gmail.com",
                    Phone: values.phone,
                    LEADCF6: values.model,
                    // LEADCF23: outlet,
                  }),
                }
              );
              if (response.ok) {
                toast("Enquiry sent successfully", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  // transition: Bounce,
                });
              } else {
                // Handle error, e.g., show an error message
              }
            } catch (error) {
              // Handle network or other errors
            }

            // Second API call - Old SQL Backend
            try {
              await axios
                .post("https://saboogroups.com/admin/api/enquiry", {
                  name: values.name,
                  email:
                    values.email.length > 0
                      ? values.email
                      : values.phone + "@gmail.com",
                  phone: values.phone,
                  model: values.model,
                })
                .then((res) => {})
                .catch((err) => {
                  toast.error("Something went wrong!");
                  //console.log(err);
                });
            } catch (error) {
              // setSubmitting(false);
            }

            // Third API call - New MongoDB backend
            try {
              await axios
                .post("https://saboo-nexa.onrender.com/onRoadPrice", {
                  name: values.name,
                  email:
                    values.email.length > 0
                      ? values.email
                      : values.phone + "@gmail.com",
                  phone: values.phone,
                  model: values.model,
                })
                .then((res) => {})
                .catch((err) => {
                  toast.error("Something went wrong!");
                  //console.log(err);
                });
              // Handle response for the second API call
            } catch (error) {
              // Handle error for the second API call
            }

            // Fourt API call - SMS Strikker
            try {
              await axios
                .get(
                  `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${values.phone}&msg=Thank you for showing interest in Maruti Suzuki.
             Our Sales consultant will contact you shortly.
             
             Regards
             RKS Motor Pvt. Ltd.
             98488 98488
             www.saboomaruti.in
             www.saboonexa.in&type=1&template_id=1407168967467983613`
                )
                .then((res) => {
                  // console.log("SMS API Response:", res.data);

                  setLoading(false);
                  history(`/thank-you`);
                  setSubmitting(false);
                })
                .catch((err) => {
                  console.error("Error sending SMS:", err);

                  setLoading(false);
                  history(`/thank-you`);
                  setSubmitting(false);
                });
              // Handle response for the third API call
            } catch (error) {
              // Handle error for the third API call
            }
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
                    className="w-full text-lg h-10 font-sans border-b-2 border-primary outline-none placeholder:text-lg px-0.5 "
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
                    name="model"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />
                  <Field
                    as="select"
                    className="w-full h-10 px-0.5 font-sans text-center border-b-2 border-primary outline-none placeholder:text-lg placeholder:text-gray-400 lg:text-left"
                    name="model"
                    id="model"
                    required
                    placeholder="Select Model"
                  >
                    <option value="" disabled className="bg-gray-100 ">
                      Select Model
                    </option>
                    <option value="Invicto" className="bg-gray-100 ">
                      Invicto
                    </option>
                    <option className="bg-gray-100 " value="Fronx">
                      Fronx
                    </option>
                    <option className="bg-gray-100 " value="Jimny">
                      Jimny
                    </option>
                    <option className="bg-gray-100 " value="Grand Vitara">
                      Grand Vitara
                    </option>
                    <option className="bg-gray-100 " value="Ciaz">
                      Ciaz
                    </option>
                    <option className="bg-gray-100 " value="Baleno">
                      Baleno
                    </option>
                    <option className="bg-gray-100 " value="Ignis">
                      Ignis
                    </option>
                    <option className="bg-gray-100 " value="XL6">
                      XL6
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
