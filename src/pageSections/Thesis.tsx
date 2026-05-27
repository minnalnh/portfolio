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
      className={`thesis flex flex-col max-w-[1126px] mx-auto gap-8  overflow-hidden transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <div className="thesis__flex-container flex flex-col lg:flex-row items-start gap-[2rem]">
        <div className="thesis__text-container flex-1 self-center">
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
            <br />
            <p className="txt-dark text-center">
              <span className="">Länk till min kandidatuppsats: </span>
              <a
                href="https://urn.kb.se/resolve?urn=urn:nbn:se:kau:diva-106881"
                className="thesis__link underline txt-black"
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
      <img src={DoodleThree} alt="" className="mb-[2rem]" />
    </section>
  );
};

export default Thesis;
