import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { thesisPages } from "./data/thesisPages";
import ThesisImage from "./ThesisImage";

const ThesisCarousel = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper w-full max-w-[350px] h-[500px] shadow-black/30 shadow-lg"
    >
      {thesisPages.map((page) => (
        <SwiperSlide className="h-full overflow-hidden">
          <ThesisImage key={page.alt} image={page.image} alt={page.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ThesisCarousel;
