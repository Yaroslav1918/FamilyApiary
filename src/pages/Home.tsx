import React from "react";
import Hero from "../components/hero";
import OurMission from "../components/ourMission";
import OurProducts from "../components/ourProducts";
import OurGallery from "../components/ourGallery";
import TypesHoney from "../components/typesHoney";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn)
  const [refHero, inViewHero] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refMission, inViewMission] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refProducts, inViewProducts] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refGallery, inViewGallery] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refTypesHoney, inViewTypesHoney] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  return (
    <>
      <motion.div
        ref={refHero}
        initial={{ opacity: 0 }}
        animate={inViewHero ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        ref={refMission}
        initial={{ opacity: 0 }}
        animate={inViewMission ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OurMission />
      </motion.div>

       <motion.div
        ref={refProducts}
        initial={{ opacity: 0 }}
        animate={inViewProducts ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OurProducts />
      </motion.div> 
 
      <motion.div
        ref={refGallery}
        initial={{ opacity: 0 }}
        animate={inViewGallery ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OurGallery />
      </motion.div>

      <motion.div
        ref={refTypesHoney}
        initial={{ opacity: 0 }}
        animate={inViewTypesHoney ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TypesHoney />
      </motion.div> 
    </>
  );
};

export default Home;