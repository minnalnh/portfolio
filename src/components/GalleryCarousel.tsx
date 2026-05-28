import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import { useIsVisible } from "../hooks/useIsVisible";
import { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { galleryItems } from "./data/galleryItems";

const GalleryCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={`gallery-carousel transition-opacity min-h-screen ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full max-w-[900px] w-[100%] py-[50px]"
      >
        {galleryItems.map((item) => (
          <SwiperSlide key={item.title} className="!w-[250px]">
            <img
              src={item.image}
              alt={item.alt}
              className="h-[500px] w-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="project txt-light mt-[3rem]">
        <h2 className="project__title txt-light font-title size-sub-title pb-[1rem]">
          {galleryItems[activeIndex].title}
        </h2>
        <p className="project__desc font-desc size-desc px-[5rem] text-left">
          {galleryItems[activeIndex].desc}
        </p>
        <br />
        <p className="project__link-text font-desc size-desc text-left px-[5rem]">
          Länk till projektet:{" "}
          <a
            href={galleryItems[activeIndex].link}
            className="project__link underline"
          >
            {galleryItems[activeIndex].link}
          </a>
        </p>
      </section>
    </section>
  );
};

export default GalleryCarousel;
