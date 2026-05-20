import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import ThesisImage from "../components/ThesisImage";
import thesisCover from "../assets/images/thesis-cover.png";
import thesisDevTools from "../assets/images/thesis-dev-tools.png";
import thesisSustainableTech from "../assets/images/thesis-sustainable-tech.png";

const ThesisCarousel = () => {
  const thesisImages = [thesisCover, thesisDevTools, thesisSustainableTech];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper w-full max-w-[350px] h-[500px]"
    >
      {thesisImages.map((image, index) => (
        <SwiperSlide key={index} className="h-full overflow-hidden">
          <ThesisImage image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ThesisCarousel;
