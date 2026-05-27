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
      className={`gallery-carousel transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <section className="project txt-light">
        <h2 className="project__title txt-light">
          {galleryItems[activeIndex].title}
        </h2>
        <p className="project__desc">{galleryItems[activeIndex].desc}</p>
        <p className="project__link">
          Länk till projektet:{" "}
          <a href={galleryItems[activeIndex].link} className="underline">
            {galleryItems[activeIndex].link}
          </a>
        </p>
      </section>
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
        pagination={true}
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
    </section>
  );
};

export default GalleryCarousel;
