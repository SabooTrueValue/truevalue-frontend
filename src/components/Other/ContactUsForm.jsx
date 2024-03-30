import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CgSpinner } from "react-icons/cg";
import { toast } from "react-hot-toast";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FirebaseStore } from "../../components/context/Firebase";

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      disclaimer: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").notRequired(),
      phone: Yup.string()
        .matches(/^[6-9][0-9]{6,9}$/, "Invalid phone number")
        .required("Phone is required"),
      message: Yup.string()
        .required("Message is required")
        .max(120, "Message must be at most 120 characters"),
      disclaimer: Yup.boolean().oneOf([true], "Must accept disclaimer"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Simulate form submission delay

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        console.log("Form data", values);
        const docRef = await addDoc(collection(FirebaseStore, "contact-us"), {
          ...values,
          date: date.toDateString(),
          time: `${hours}:${minutes}:${seconds}`,
          timestamp: serverTimestamp(),
        });

        // setCurrentStep(5);
        console.log("Document written with ID: ", docRef.id);

        // Your actual form submission logic goes here
        // For demonstration purposes, let's display a success message using toast
        toast.success("Form submitted successfully");

        // Reset form values after successful submission
        resetForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          disclaimer: false,
        });
      } catch (error) {
        // Handle form submission errors here
        console.error("Form submission error:", error);
        toast.error("Form submission failed");
      } finally {
        // Always set submitting state to false after form submission
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-3">
          <label htmlFor="name">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="border w-full rounded p-1.5 outline-none"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border w-full rounded p-1.5 outline-none"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mt-3">
          <label htmlFor="mobile">
            Mobile <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="mobile"
            maxLength={10}
            className="border w-full rounded p-1.5 outline-none"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="mt-3">
          <label htmlFor="message">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            className="border w-full rounded p-1.5 outline-none max-h-44"
            {...formik.getFieldProps("message")} // Update to "message" field
          />

          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500">{formik.errors.message}</div> // Corrected error message
          ) : null}
        </div>

        <p className="mt-5 text-xs text-gray-700">
          <span className="text-sm font-bold text-black">Disclaimer</span>: I
          agree that by clicking the ‘Submit’ button below, I am explicitly
          soliciting a call/Message from Orange Groups or its Representatives on
          my ‘Mobile’.
        </p>

        <div className="flex items-start mt-5">
          <input
            id="disclaimer"
            type="checkbox"
            checked={formik.values.disclaimer} // Use checked instead of value
            onChange={formik.handleChange} // Handle onChange to update formik state
            required
            {...formik.getFieldProps("disclaimer")}
          />
          <div className="ml-2 text-sm ">
            <label htmlFor="disclaimer" className="font-medium text-gray-700">
              Please agree with the following Disclaimer
            </label>
          </div>
          {formik.touched.disclaimer && formik.errors.disclaimer ? (
            <div className="text-red-500">{formik.errors.disclaimer}</div>
          ) : null}
        </div>
        <button
          className={`${
            formik.isValid ? "bg-primary" : "bg-gray-300"
          } text-white px-5 py-1.5 flex mx-auto mt-5 rounded`}
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting ? (
            <div className="flex items-center justify-center">
              <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
