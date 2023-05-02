import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "../components/Spinner";
import { routes } from "./config"
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import NotFoundPage from "../pages/NotFoundPage";
import ContactUS from "../pages/ContactUs";
import Shop from "../components/shop";
import OurGallery from "../components/ourGallery";
import HoneyCard from "../components/honeyCard";
import SignUp from "../components/signUp";
import SignIn from "../components/signIn/SignIn";
const {
  home,
  aboutUs,
  verificate,
  OAuth,
  contactUs,
  shop,
  ourGallery,
  signUp,
  signIn,
} = routes;
const RoutesComponent = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {/* PUBLIC */}
        <Route path={home.path} element={<Home />} />
        <Route path={aboutUs.path} element={<AboutUs />} />
        <Route path={contactUs.path} element={<ContactUS />} />
        <Route path={shop.path} element={<Shop />} />
        <Route path={ourGallery.path} element={<OurGallery />} />
        <Route path={signUp.path} element={<SignUp />} />
        <Route path={signIn.path} element={<SignIn />} />
        <Route path={`${verificate.path}/:token`} element={null} />
        <Route path={`${OAuth.path}/:token`} element={null} />
        <Route path="/product/:name" element={<HoneyCard />} />

        {/* NOT AUTH */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
