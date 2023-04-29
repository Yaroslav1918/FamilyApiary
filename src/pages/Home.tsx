import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/ourMission";
import OurProducts from "../components/ourProducts";
import OurGallery from "../components/ourGallery";
import TypesHoney from "../components/typesHoney";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import Shop from "../components/shop/Shop";
import HoneyCard from "../components/honeyCard/HoneyCard";

const Home = () => {
  return (
    <>
      <NavBar />
      {/* <Shop/> */}
      <HoneyCard/>
      {/* <Hero />
      <OurMission />
      <OurProducts />
      <OurGallery />
      <TypesHoney /> */}
      <Footer />
    </>
  );
};

export default Home;
