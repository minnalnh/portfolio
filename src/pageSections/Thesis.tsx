import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import ThesisImage from "../components/ThesisImage";
import thesisCover from "../assets/images/thesis-cover.png";
import thesisDevTools from "../assets/images/thesis-dev-tools.png";
import thesisSustainableTech from "../assets/images/thesis-sustainable-tech.png";
import "swiper/css";
import "swiper/css/effect-cards";

const Thesis = () => {
  const thesisImages = [thesisCover, thesisDevTools, thesisSustainableTech];

  return (
    <div className="thesis flex flex-col max-w-[1126px] mx-auto gap-8">
      <div className="thesis__flex-container flex">
        <div className="thesis__text-container flex-2">
          <section className="thesis__text-background bg-sand-opacity">
            <h2 className="thesis__title txt-dark font-bold">
              Företags och organisationers digitala miljöpåverkan
            </h2>
            <h3 className="thesis__sub-title txt-dark font-light">
              En undersökning med fokus på grafiska element inom hållbar
              webbdesign
            </h3>
            <p className="thesis__desc txt-dark text-left">
              Mitt examensarbete undersökte huruvida företag och organisationer
              arbetar med hållbar webbdesign och om de var intresserade av att
              göra det ifall de inte redan gjorde det. En huvudmetod som
              användes var Sustainable Tech, som är ett verktyg som Knowit har
              tagit fram, som analyserar mängden koldioxidutsläpp som en
              webbsida förbrukar.
            </p>
          </section>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-full max-w-[350px] h-[500px]"
        >
          {thesisImages.map((image, index) => (
            <SwiperSlide key={index}>
              <ThesisImage image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="thesis__link-text txt-dark bg-sand-opacity">
        Länk till min kandidatuppsats:{" "}
        <a
          href="https://urn.kb.se/resolve?urn=urn:nbn:se:kau:diva-106881"
          className="thesis__link underline txt-black"
        >
          https://urn.kb.se/resolve?urn=urn:nbn:se:kau:diva-106881
        </a>
      </p>
    </div>
  );
};

export default Thesis;
