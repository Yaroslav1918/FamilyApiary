import ContactDescription from "../components/contactDescription";
import { motion } from "framer-motion";

export default function ContactUS() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ContactDescription />
    </motion.div>
  );
}
