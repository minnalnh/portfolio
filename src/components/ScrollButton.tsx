import { ArrowDown } from "lucide-react";
import { useScroll } from "../hooks/useScroll";
import { scrollToAbout } from "../utils/scrollToAbout";
import { motion } from "motion/react";

const ScrollButton = () => {
  const scrollY = useScroll();

  return (
    <motion.button
      onClick={scrollToAbout}
      className={`scroll-button txt-dark flex flex-col z-100 p-[1rem] bg-fair fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center transition-opacity duration-500 cursor-pointer ${scrollY > 100 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Läs mer om mig</span>
      <ArrowDown size={40} />
    </motion.button>
  );
};

export default ScrollButton;
