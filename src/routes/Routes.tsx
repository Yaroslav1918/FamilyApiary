import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import CartPage from "../pages/CartPage";
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from "framer-motion";

import { TransitionGroup } from 'react-transition-group';
const {
  home,
  aboutUs,
  contactUs,
  shop,
  ourGallery,
  signUp,
  signIn,
  cart,
} = routes;
const RoutesComponent = () => {
  const { t } = useTranslation();
  const location = useLocation()
  
  return (
    <Suspense fallback={<Spinner />}>
      <AnimatePresence>
      <Routes location ={location} key ={location.pathname}>
        {/* PUBLIC */}
        <Route path={home.path} element={<Home />} />
        <Route path={aboutUs.path} element={<AboutUs />} />
        <Route path={contactUs.path} element={<ContactUS />} />
        <Route path={shop.path} element={<Shop />} />
        <Route path={ourGallery.path} element={<OurGallery />} />
        <Route path={signUp.path} element={<SignUp />} />
        <Route path={cart.path} element={<CartPage />} />
        <Route path={signIn.path} element={<SignIn />} />
        <Route path={`/${t('product')}/:name`} element={<HoneyCard />} />
       
        {/* NOT AUTH */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default RoutesComponent;
