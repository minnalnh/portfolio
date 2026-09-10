import naturePic from "../assets/images/nature-pic.png";
import cowboyPic from "../assets/images/cowboy-pic.png";
import cafePic from "../assets/images/cafe-pic.png";
import doodle from "../assets/images/doodle.png";
import { useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";
import { Sun } from "lucide-react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section className="about p-6 flex flex-col txt-dark" id="About" ref={ref}>
      <article className="about__container flex flex-col md:flex-row">
        <div className="about__image-container md:w-1/2 flex self-center">
          {/* Bild 1 */}
          <img
            src={naturePic}
            alt="Jag står vid en sjö i naturen"
            className={`about__nature-pic w-1/2 h-full object-contain transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          />

          {/* Bild-container */}
          <div className="about__right-image-container flex flex-col gap-2 md:w-1/2">
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

        <section className="about__text-container md:w-1/2 flex flex-col self-center">
          <div className="about__title-container mx-auto mb-[1rem] flex gap-[.5rem]">
            <h2 className="font-bold rounded-2xl inline txt-dark font-title size-title">
              Hejsan!
            </h2>
            <Sun size={40} strokeWidth={1.5} />
          </div>
          <section className="about__text-background bg-sand-opacity shadow-black/30 shadow-lg mb-10">
            <p className="leading-relaxed text-left font-desc py-3 px-2">
              Jag heter Minna och är en nyfiken, blivande moln/webbutvecklare.
              Jag brinner för tillgänglighet och användarvänlighet, eftersom
              alla ska kunna använda webben utan svårigheter, oavsett
              förutsättningar. Dessutom bidrar tillgänglighet till att göra
              webben mer användarvänlig för alla, vilket jag ser som en
              självklar och viktig faktor i webbutveckling.
              <br />
              <br />
              Jag introducerades nyligen till molnutveckling, vilket jag tycker
              är väldigt spännande. Jag har använt AWS och uppskattar att det är
              så flexibelt, skalbart och att det finns ett sådant stort utbud av
              tjänster att implementera.
              <br />
              <br />
              Ett annat område som jag tycker är intressant och betydande är
              hållbar webbdesign. Jag utförde mitt examensarbete om just hållbar
              webbdesign
            </p>
          </section>
        </section>
      </article>
      <img
        src={doodle}
        alt=""
        aria-hidden="true"
        className="max-h-[200px] object-contain mt-[2rem] lg:mt-0"
      />
    </section>
  );
};

export default About;
