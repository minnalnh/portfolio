import { ArrowDown } from "lucide-react";
import { useScroll } from "../hooks/useScroll";
import { scrollToAbout } from "../utils/scrollToAbout";
import { motion } from "motion/react";

const ScrollButton = () => {
  const scrollY = useScroll();

  return (
    <motion.button
      onClick={scrollToAbout}
      className={`scroll-button w-[5rem] h-[5rem] z-100 bg-fair fixed bottom-10 rounded-[100%] flex justify-center items-center transition-opacity duration-500 cursor-pointer ${scrollY > 100 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowDown size={40} txt-dark />
    </motion.button>
  );
};

export default ScrollButton;
