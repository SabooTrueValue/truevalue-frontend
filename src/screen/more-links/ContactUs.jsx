import React from "react";
import ContactUsForm from "../../components/Other/ContactUsForm";
import { AiOutlinePhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Toaster } from "react-hot-toast";

export const ContactUs = () => {
  return (
    <div>
      <img
        src={require("../../assets/other/Truevalue-Finance-Banner.jpg")}
        alt="Contact Us"
      />
      <div className="py-10 lg:pb-20 lg:pt-14">
        <h3 className="mb-2 text-2xl text-center md:text-3xl text-primary">
          Contact Us
        </h3>
        <h5 className="mb-3 lg:mb-4 md:text-center ">
          Have any questions? Take a look & maybe we can answer them right now.
          If not, write to us at{" "}
          <a
            href="mailto:info@saboomaruti.in"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            info@saboomaruti.in
          </a>
        </h5>
      </div>
      <div className="container grid gap-4 mx-auto mb-10 lg:grid-cols-2">
        <div className="max-w-xl mx-auto">
          <ContactUsForm />
        </div>

        <div className="grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-2 p-4 border rounded hover:shadow-lg">
            <FaLocationDot className="text-4xl text-primary" />
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary">ADDRESS</h4>
              <p>Somajiguda,</p>
              <p>Hyderabad - 500082 </p>
              <p>Telangana</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-4 border rounded hover:shadow-lg">
            <AiOutlinePhone className="text-4xl text-primary" />{" "}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary">Call Us</h4>
              <a href="tel: +91 9848898488" className="">
                +91 98488 98488
              </a>
            </div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center gap-2 p-4 border rounded hover:shadow-lg">
            <IoIosMail className="text-4xl text-primary" />
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary">Email Us</h4>
              <a
                href="mailto:info@saboomaruti.in"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                info@saboomaruti.in
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-4 border rounded hover:shadow-lg">
            <IoTime className="text-4xl text-primary" />
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary">
                Working Hours
              </h4>
              <p>Mon - Sat: 9 AM to 6 PM</p>
              <p>Sunday: 9 AM to 6 PM</p>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      
    </div>
  );
};
