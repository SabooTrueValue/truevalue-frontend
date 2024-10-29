import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./screen/homepage/Homepage";
import { AboutUs } from "./screen/about-us/AboutUs";
import FAQs from "./screen/more-links/FAQs";
import { Blogs } from "./screen/more-links/Blogs";
import { ContactUs } from "./screen/more-links/ContactUs";
import { TermsAndConditions } from "./screen/more-links/TermsAndConditions";
import { PageNotFound } from "./screen/page-not-found/PageNotFound";
import { Footer } from "./components/Footer/Footer";
import Finance from "./screen/finance/Finance";
// import FindACar from "./screen/pre-owned-cars/FindACar";
import CarDetails from "./screen/details/CarDetails";
import SellYourCar from "./screen/sell-your-car/SellYourCar";
import Popup from "./components/Other/Popup";
import Header from "./screen/homepage/Header";
import Outlets from "./screen/more-links/Outlets";
import { Toaster } from "react-hot-toast";

// import CarCart from "./screen/pre-owned-cars/CarCart";
import ModalSidePanel from "./components/Headers/ModalSidePanel";
import CarDetails2 from "./screen/details/CarDetails2";
import CarCart2 from "./screen/pre-owned-cars/CarCart2";

function App() {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header
        // option={pathname === "/" && true}
        setOpen={setOpen}
        pathname={pathname}
      />

      <Popup />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/finance" element={<Finance />} />
        <Route exact path="/buy-used-cars" element={<CarCart2 />} />
        {/* <Route exact path="/buy-used-cars" element={<CarCart />} /> */}
        <Route exact path="/sell-your-car" element={<SellYourCar />} />
        <Route exact path="/used-car-blog" element={<Blogs />} />
        <Route exact path="/car-details/:id" element={<CarDetails />} />
        <Route
          exact
          path="/car-details2/:id"
          element={<CarDetails2 />}
        />
        <Route exact path="/used-car-outlets" element={<Outlets />} />
        <Route exact path="/used-car-faqs" element={<FAQs />} />

        <Route
          exact
          path="/contact-preowned-car-dealer"
          element={<ContactUs />}
        />
        <Route
          exact
          path="/used-cars-terms-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
      <ModalSidePanel show={open} setShow={setOpen} pathname={pathname} />

      <Footer />
    </>
  );
}

export default App;
