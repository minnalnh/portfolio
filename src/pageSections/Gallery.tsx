import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import thesisCover from "../assets/images/thesis-cover.png";
import thesisDevTools from "../assets/images/thesis-dev-tools.png";
import thesisSustainableTech from "../assets/images/thesis-sustainable-tech.png";

const Gallery = () => {
  return (
    <section className="gallery">
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
        className="mySwiper w-full max-w-[350px] h-[500px]"
      >
        <SwiperSlide>
          <img src={thesisCover} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thesisDevTools} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thesisSustainableTech} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
