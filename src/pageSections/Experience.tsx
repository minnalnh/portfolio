import { techniques } from "../components/data/techniques";
import { runtime } from "../components/data/techniques";
import { designTools } from "../components/data/techniques";
import { libFrameworks } from "../components/data/techniques";
import { cms } from "../components/data/techniques";

const Experience = () => {
  return (
    <section className="experience bg-sand">
      <h2 className="tech-title txt-dark">
        Programmeringsspråk / webbtekniker
      </h2>
      <section className="tech-icons flex gap-[2rem] flex-wrap justify-center">
        {techniques.map((technique) => (
          <article className="tech-icon sm:w-[40px] md:w-[60px] flex flex-col items-center">
            <img
              key={technique.name}
              src={technique.icon}
              alt={technique.name}
              className="tech-icon__image w-full h-auto object-contain"
            />
            <p className="tech-icon__name text-center text-sm mt-2 text-black justify-self-end">
              {technique.name}
            </p>
          </article>
        ))}
      </section>

      <div className="second-row-container flex">
        <h2 className="lib-frameworks-title">Bibliotek / frameworks</h2>
        <section className="lib-frameworks-icons flex gap-[2rem]">
          {libFrameworks.map((libFramework) => (
            <article className="lib-framework-icon sm:w-[40px] md:w-[60px] flex flex-col items-center">
              <img
                key={libFramework.name}
                src={libFramework.icon}
                alt={libFramework.name}
                className="lib-framework__image w-full h-auto object-contain"
              />
              <p className="lib-framework__name text-center text-sm mt-2 text-black">
                {libFramework.name}
              </p>
            </article>
          ))}
        </section>

        <h2 className="lib-frameworks-title">Bibliotek / frameworks</h2>
        <section className="lib-frameworks-icons flex gap-[2rem]">
          {cms.map((eachCMS) => (
            <article className="lib-framework-icon sm:w-[40px] md:w-[60px] flex flex-col items-center">
              <img
                key={eachCMS.name}
                src={eachCMS.icon}
                alt={eachCMS.name}
                className="lib-framework__image w-full h-auto object-contain"
              />
              <p className="lib-framework__name text-center text-sm mt-2 text-black">
                {eachCMS.name}
              </p>
            </article>
          ))}
        </section>

        <h2 className="lib-frameworks-title">Designverktyg</h2>
        <section className="lib-frameworks-icons flex gap-[2rem]">
          {designTools.map((designTool) => (
            <article className="lib-framework-icon sm:w-[40px] md:w-[60px] flex flex-col items-center">
              <img
                key={designTool.name}
                src={designTool.icon}
                alt={designTool.name}
                className="lib-framework__image w-full h-auto object-contain"
              />
              <p className="lib-framework__name text-center text-sm mt-2 text-black">
                {designTool.name}
              </p>
            </article>
          ))}
        </section>

        <h2 className="lib-frameworks-title">JavaScript-runtime</h2>
        <section className="lib-frameworks-icons flex gap-[2rem]">
          {runtime.map((eachRuntime) => (
            <article className="lib-framework-icon sm:w-[40px] md:w-[60px] flex flex-col items-center">
              <img
                key={eachRuntime.name}
                src={eachRuntime.icon}
                alt={eachRuntime.name}
                className="lib-framework__image w-full h-auto object-contain"
              />
              <p className="lib-framework__name text-center text-sm mt-2 text-black">
                {eachRuntime.name}
              </p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Experience;
