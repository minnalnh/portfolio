import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import { useIsVisible } from "../hooks/useIsVisible";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import thesisCover from "../assets/images/thesis-cover.png";
import thesisDevTools from "../assets/images/thesis-dev-tools.png";
import thesisSustainableTech from "../assets/images/thesis-sustainable-tech.png";

const GalleryCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section
      className={`gallery-carousel transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full max-w-[900px] w-[100%] py-[50px]"
      >
        <SwiperSlide className="!w-[250px]">
          <img src={thesisCover} alt="" />
        </SwiperSlide>
        <SwiperSlide className="!w-[250px]">
          <img src={thesisDevTools} alt="" />
        </SwiperSlide>
        <SwiperSlide className="!w-[250px]">
          <img src={thesisSustainableTech} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default GalleryCarousel;
