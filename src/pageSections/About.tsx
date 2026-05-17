import naturePic from "../assets/images/nature-pic.png";
import cowboyPic from "../assets/images/cowboy-pic.png";
import cafePic from "../assets/images/cafe-pic.png";
import doodle from "../assets/images/doodle.png";

const About = () => {
  return (
    <section className="about flex gap-6 p-6 flex flex-col" id="About">
      <article className="about__container flex">
        <div className="about__image-container w-1/2 flex">
          {/* Bild 1 */}
          <img
            src={naturePic}
            alt="Jag står vid en sjö i naturen"
            className="about__nature-pic w-1/2 h-full object-contain"
          />

          {/* Bild-container */}
          <div className="about__right-image-container flex flex-col gap-2 w-1/2">
            {/* Bild 2 */}
            <img
              src={cowboyPic}
              alt="Jag är utklädd till cowboy"
              className="h-1/3 object-contain"
            />

            {/* Bild 3 */}
            <img
              src={cafePic}
              alt="Jag dricker kaffe på ett café"
              className="h-1/3 object-contain"
            />
          </div>
        </div>

        <section className="about__text-container w-1/2 flex flex-col">
          <h2 className="font-bold txt-dark text-left">Hejsan!</h2>
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
