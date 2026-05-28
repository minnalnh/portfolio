import ThesisCarousel from "../components/ThesisCarousel";
import DoodleThree from "../assets/images/doodle-3.png";
import GraduationPic from "../assets/images/graduation.png";
import { useIsVisible } from "../hooks/useIsVisible";
import { useRef } from "react";

const Thesis = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section
      className={`thesis txt-dark flex flex-col max-w-[1126px] mx-auto gap-8 overflow-hidden transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <div className="thesis__flex-container flex flex-col lg:flex-row items-start gap-[2rem]">
        <div className="thesis__text-container flex-1 self-center">
          <h2 className="thesis__title font-bold txt-dark font-title size-sub-title">
            Företags och organisationers digitala miljöpåverkan
          </h2>
          <h3 className="thesis__sub-title font-light font-desc mb-[1rem] size-desc">
            – En undersökning med fokus på grafiska element inom hållbar
            webbdesign
          </h3>
          <section className="thesis__text-background bg-sand-opacity shadow-black/30 shadow-lg">
            <p className="thesis__desc text-left font-desc">
              Mitt examensarbete undersökte huruvida företag och organisationer
              arbetar med hållbar webbdesign och om de var intresserade av att
              göra det ifall de inte redan gjorde det. En huvudmetod som
              användes var Sustainable Tech, som är ett verktyg som Knowit har
              tagit fram, som analyserar mängden koldioxidutsläpp som en
              webbsida förbrukar.
            </p>
            <br />
            <p className="text-center">
              <span className="font-desc">Länk till min kandidatuppsats: </span>
              <a
                href="https://urn.kb.se/resolve?urn=urn:nbn:se:kau:diva-106881"
                className="thesis__link underline txt-black font-desc"
              >
                https://urn.kb.se/resolve?urn=urn:nbn:se:kau:diva-106881
              </a>
            </p>
          </section>
        </div>
        <img
          src={GraduationPic}
          alt="Jag står och ler glatt med mitt glasäpple i handen, efter att ha tagit examen"
          className="max-w-[200px] rounded-[100%] w-full h-auto self-center"
        />
        <ThesisCarousel />
      </div>
      <img src={DoodleThree} alt="" aria-hidden="true" className="mb-[2rem]" />
    </section>
  );
};

export default Thesis;
