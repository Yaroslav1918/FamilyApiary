import AboutUsDescription from "../components/aboutUsDescription";
import OurTeam from "../components/ourTeam";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <AboutUsDescription />
      <OurTeam />
    </motion.div>
  );
}
