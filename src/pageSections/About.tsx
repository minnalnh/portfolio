import naturePic from "../assets/images/nature-pic.png";
import cowboyPic from "../assets/images/cowboy-pic.png";
import cafePic from "../assets/images/cafe-pic.png";
import doodle from "../assets/images/doodle.png";
import { useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section className="about p-6 flex flex-col" id="About" ref={ref}>
      <article className="about__container flex flex-col lg:flex-row">
        <div className="about__image-container lg:w-1/2 flex self-center">
          {/* Bild 1 */}
          <img
            src={naturePic}
            alt="Jag står vid en sjö i naturen"
            className={`about__nature-pic w-1/2 h-full object-contain transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          />

          {/* Bild-container */}
          <div className="about__right-image-container flex flex-col gap-2 lg:w-1/2">
            {/* Bild 2 */}
            <img
              src={cowboyPic}
              alt="Jag är utklädd till cowboy"
              className={`h-1/3 object-contain transition-opacity ease-in duration-800 ${isVisible ? "opacity-100" : "opacity-0"}`}
            />

            {/* Bild 3 */}
            <img
              src={cafePic}
              alt="Jag dricker kaffe på ett café"
              className={`h-1/3 object-contain transition-opacity ease-in duration-900 ${isVisible ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>

        <section className="about__text-container lg:w-1/2 flex flex-col self-center">
          <h2 className="font-bold txt-dark text-center bg-fair rounded-2xl inline">
            Hejsan!
          </h2>
          <section className="about__text-background bg-sand-opacity">
            <p className="txt-dark leading-relaxed text-left">
              Jag heter Minna och är en nyfiken, blivande webbutvecklare. Jag
              brinner för tillgänglighet och användarvänlighet, då alla ska
              kunna använda webben utan svårigheter, oavsett förutsättningar.
              <br />
              <br />
              Ett område som jag introducerades till nyligen är hållbar
              webbdesign, vilket också har blivit ett ämne som jag tycker är
              väldigt intressant och betydande. Därför valde jag att skriva min
              kandidatuppsats om just hållbar webbdesign.
            </p>
          </section>
        </section>
      </article>
      <img
        src={doodle}
        alt="Bild på mig som cowboy"
        className="h-1/3 object-contain"
      />
    </section>
  );
};

export default About;
