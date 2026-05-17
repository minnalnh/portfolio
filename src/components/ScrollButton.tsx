import { ArrowDown } from "lucide-react";
import { useScroll } from "../hooks/useScroll";
import { scrollToAbout } from "../utils/scrollToAbout";

const ScrollButton = () => {
  const scrollY = useScroll();

  return (
    <button
      onClick={scrollToAbout}
      className={`scroll-button w-[5rem] h-[5rem] z-100 bg-white fixed bottom-10 rounded-[100%] flex justify-center items-center -translate-x-1/2 transition-opacity duration-500 cursor-pointer ${scrollY > 100 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <ArrowDown size={32} />
    </button>
  );
};

export default ScrollButton;
