import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./screen/homepage/Homepage";
import { AboutUs } from "./screen/about-us/AboutUs";
import { SellYourCar } from "./screen/sell-your-car/SellYourCar";
import FAQs from "./screen/more-links/FAQs";
import { Blogs } from "./screen/more-links/Blogs";
import { Outlets } from "./screen/more-links/Outlets";
import { ContactUs } from "./screen/more-links/ContactUs";
import { TermsAndConditions } from "./screen/more-links/TermsAndConditions";
import { PageNotFound } from "./screen/page-not-found/PageNotFound";
import { Footer } from "./components/Footer/Footer";
import Finance from "./screen/finance/Finance";
import FindACar from "./screen/pre-owned-cars/FindACar";
import CarDetails from "./screen/details/CarDetails";

function App() {
  const { pathname } = useLocation();

  const isAdminRoute = pathname === "/sell-your-car";
  // || pathname === "/dashboard";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/finance" element={<Finance />} />
        <Route exact path="/buy-used-cars" element={<FindACar />} />
        <Route exact path="/sell-your-car" element={<SellYourCar />} />
        <Route exact path="/used-car-blog" element={<Blogs />} />
        <Route exact path="/car-details" element={<CarDetails />} />
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

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
