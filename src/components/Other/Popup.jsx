import React, { useEffect, useState } from "react";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";

export default function Popup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("popup", JSON.stringify(open));
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (sessionStorage.getItem("popup") !== "true") {
        setOpen(true);
        // sessionStorage.setItem("popup", "true");
      }
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div className="flex items-center justify-center h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-[400px]">
              <div className="flex justify-end">
                <button
                  onClick={handleClose}
                  type="button"
                  aria-label="Close popup"
                  className="text-red-500 hover:text-red-700 sm:ml-3 sm:w-auto sm:text-2xl"
                >
                  <RiCloseLine className="inline-block mr-1" />
                </button>
              </div>{" "}
              <Formik
                initialValues={{ mobileNumber: "" }}
                validationSchema={Yup.object({
                  mobileNumber: Yup.string()
                    .required("Mobile number is required")
                    .matches(/^[0-9]{10}$/, "Invalid mobile number"),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                  setLoading(true);

                  try {
                    await axios
                      // .post("http://localhost:3001/popup", {
                        .post("https://true-value.onrender.com/popup", {
                        mobileNumber: values.mobileNumber,
                      })
                      .then((res) => {
                        // toast.success("Enquiry sent successfully");
                        toast.success(
                          "Your enquiry has been submitted successfully"
                        );
                      })
                      .catch((err) => {
                        // setLoader(false);
                        toast.error("Error submitting enquiry");
                      });
                  } catch (error) {
                    console.error("Error submitting enquiry: ", error);
                    toast.error("Error submitting enquiry");
                  }

                  setSubmitting(false);
                  sessionStorage.setItem("popup", "true");
                  handleClose();
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                      <div className="w-full sm:flex sm:items-start">
                        <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                          <h3
                            className="mb-6 text-lg font-extrabold leading-6 text-center uppercase lg:text-xl text-primary"
                            id="modal-title"
                          >
                            Get A Quote & New Offer
                          </h3>
                          <div className="mt-2">
                            <Field
                              name="mobileNumber"
                              type="tel"
                              autoComplete="off"
                              maxLength="10"
                              className="w-full px-3 py-2 text-lg leading-tight text-center text-gray-700 border rounded appearance-none border-primary focus:outline-none focus:border-primary"
                              placeholder="Provide your mobile number"
                            />
                            <ErrorMessage
                              name="mobileNumber"
                              component="div"
                              className="text-sm text-center text-red-500"
                            />
                          </div>
                          <div className="flex justify-center gap-4 mt-6 md:gap-8">
                            <a
                              href="tel: 98488 98488 "
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Call Us"
                              className="flex justify-center w-1/2 gap-3 py-1.5 border rounded-lg text-primary"
                            >
                              <AiOutlinePhone className="w-5 h-5 " /> Call Us
                            </a>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Whatsapp"
                              href="https://wa.me/9848898488"
                              className="flex justify-center w-1/2 gap-3 py-1.5 text-green-500 border rounded-lg"
                            >
                              <AiOutlineWhatsApp className="w-5 h-5 " />{" "}
                              Whatsapp
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center px-4 pt-2">
                      <button
                        // onClick={handleClose}
                        // disabled={!mobileNumber}
                        disabled={isSubmitting}
                        type="submit"
                        aria-label="Submit form"
                        className={`   py-2 rounded-lg   sm:text-sm  mx-auto bg-primary w-full text-white cursor-pointer`}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                    <p className="pt-3 text-sm text-center">
                      I agree to the{" "}
                      <Link
                        to="/used-cars-terms-conditions"
                        className="text-blue-500"
                      >
                        terms and conditions.
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
