import { IoClose, IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFacebookSquare,  FaWhatsapp } from "react-icons/fa";
import { IoIosCall, IoLogoYoutube, IoMdMail } from "react-icons/io";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

const ModalSidePanel = ({ show, setShow, pathname }) => {
  useEffect(() => {
    const body = document.body;
    if (show) {
      // Disable scrolling
      body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      body.style.overflow = "visible";
    }

    // Clean up the effect
    return () => {
      body.style.overflow = "visible";
    };
  }, [show]);

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      setShow(false);
    }
  };

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Buy Car", path: "/buy-used-cars" },
    { name: "Sell Car ", path: "/sell-your-car" },
    { name: "About Us", path: "/about-us" },
    { name: "Finance", path: "/finance" },
    { name: "Contact Us", path: "/contact-preowned-car-dealer" },
    { name: "Blog", path: "/used-car-blog" },
    { name: "FAQs", path: "/used-car-faqs" },
    { name: "Outlets", path: "/used-car-outlets" },
    { name: "Privacy Policy", path: "/used-cars-terms-conditions" },
  ];

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className={`fixed lg:hidden ${
        !show
          ? "translate-x-[110%] duration-500 md:duration-1000"
          : "duration-500 md:duration-700"
      }   flex justify-end  top-0 right-0 h-full  w-full z-40 `}
    >
      <div className="overflow-hidden bg-white shadow-2xl w-80 rounded-l-xl">
        <div className="flex flex-col justify-between h-full gap-6 px-6 pt-20 pb-10 rounded-2xl">
          <div className="flex flex-col gap-2">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.path}
                onClick={() => setShow(false)}
                className={`w-full py-2 pl-6 border-b cursor-pointer hover:bg-primary hover:text-white rounded-lg ${pathname === tab.path && "bg-primary text-white"}`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 px-4 py-1 text-sm text-white rounded-lg bg-primary">
              <div className="flex items-center gap-2 ">
                <IoIosCall className="" /> 81878 81878
              </div>{" "}
              <div className="flex items-center gap-2 ">
                <FaLocationDot /> Hyderabad
              </div>
            </div>
            <div className="flex gap-4 pt-4 text-2xl text-primary justify-evenly">
              <a
                href="https://www.instagram.com/nuform__/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://www.facebook.com/your-facebook-page"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.youtube.com/your-channel"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <IoLogoYoutube />
              </a>
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <IoMdMail />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setShow(false)}
            className="p-1 duration-200 rounded-full select-none w-min bg-primary hover:bg-primary hover:scale-105"
          >
            <IoClose className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSidePanel;
