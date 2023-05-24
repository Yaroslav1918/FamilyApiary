import Cart from "../components/Cart";
import { motion } from "framer-motion";
export default function CartPage() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition:{duration:0.3} }}
        >
        <Cart/>
        </motion.div>
    )
};
