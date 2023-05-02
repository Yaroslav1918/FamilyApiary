import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/ourMission";
import OurProducts from "../components/ourProducts";
import OurGallery from "../components/ourGallery";
import TypesHoney from "../components/typesHoney";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Home = () => {
  return (
    <>
       <Hero />
      <OurMission />
      <OurProducts />
      <OurGallery />
      <TypesHoney /> 
   
    </>
  );
};

export default Home;
