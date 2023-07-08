import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { routes } from "./config";
import Shop from "../components/shop";
import OurGallery from "../components/ourGallery";
import HoneyCard from "../components/honeyCard";
import SignUp from "../components/signUp";
import SignIn from "../components/signIn/SignIn";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { OrderHistory } from "../components/orderHistory";
import WishList from "../components/wishList";

const {
  home,
  aboutUs,
  contactUs,
  shop,
  ourGallery,
  signUp,
  signIn,
  cart,
  orderHistory,
  wishList,
} = routes;
const RoutesComponent = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const AboutUs = lazy(
    () => import("../pages/AboutUs" /* webpackChunkName: "AboutUs" */)
  );
  const NotFoundPage = lazy(
    () => import("../pages/NotFoundPage" /* webpackChunkName: "NotFoundPage" */)
  );
  const CartPage = lazy(
    () => import("../pages/CartPage" /* webpackChunkName: "CartPage" */)
  );
  const ContactUS = lazy(
    () => import("../pages/ContactUs" /* webpackChunkName: "ContactUS" */)
  );
  const Home = lazy(
    () => import("../pages/Home" /* webpackChunkName: "Home" */)
  );

  return (
    <Suspense fallback={<Spinner />}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/* PUBLIC */}
          <Route path={home.path} element={<Home />} />
          <Route path={aboutUs.path} element={<AboutUs />} />
          <Route path={contactUs.path} element={<ContactUS />} />
          <Route path={shop.path} element={<Shop />} />
          <Route path={ourGallery.path} element={<OurGallery />} />
          <Route path={signUp.path} element={<SignUp />} />
          <Route path={cart.path} element={<CartPage />} />
          <Route path={signIn.path} element={<SignIn />} />
          <Route path={orderHistory.path} element={<OrderHistory />} />
          <Route path={wishList.path} element={<WishList />} />
          <Route path={`/${t("product")}/:name`} element={<HoneyCard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default RoutesComponent;
