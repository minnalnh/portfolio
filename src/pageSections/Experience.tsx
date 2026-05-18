import { techniques } from "../components/data/techniques";
import { runtime } from "../components/data/techniques";
import { designTools } from "../components/data/techniques";
import { libFrameworks } from "../components/data/techniques";
import { cms } from "../components/data/techniques";

const Experience = () => {
  return (
    <section className="experience bg-sand txt-dark ">
      <h2 className="tech-title txt-dark pt-[2rem] pb-[1rem]">
        Programmeringsspråk / webbtekniker
      </h2>
      <section className="tech-icons flex gap-[2rem] justify-center">
        {techniques.map((technique) => (
          <article className="tech-icon sm:w-[40px] md:w-[60px] flex flex-col items-center">
            <img
              key={technique.name}
              src={technique.icon}
              alt={technique.name}
              className="tech-icon__image"
            />
            <p className="tech-icon__name text-center text-sm">
              {technique.name}
            </p>
          </article>
        ))}
      </section>

      <div className="second-row-container flex justify-center">
        <section className="first-row flex-1">
          <h2 className="lib-frameworks-title txt-dark pt-[2rem]">
            Bibliotek / frameworks
          </h2>
          <section className="lib-frameworks-icons flex gap-[2rem] justify-center">
            {libFrameworks.map((libFramework) => (
              <article className="lib-framework-icon w-[80px] h-[100px] sm:w-[40px] md:w-[60px] flex flex-col items-center relative">
                <img
                  key={libFramework.name}
                  src={libFramework.icon}
                  alt={libFramework.name}
                  className="lib-framework__image absolute top-1/2 -translate-y-1/2"
                />
                <p className="lib-framework__name text-center text-sm absolute bottom-0">
                  {libFramework.name}
                </p>
              </article>
            ))}
          </section>
        </section>

        <section className="second-row flex-1">
          <h2 className="cms-title txt-dark pt-[2rem]">CMS</h2>
          <section className="cms-icons flex gap-[2rem] justify-center">
            {cms.map((eachCMS) => (
              <article className="cms-icon w-[80px] h-[100px] sm:w-[40px] md:w-[60px] flex flex-col items-center relative">
                <img
                  key={eachCMS.name}
                  src={eachCMS.icon}
                  alt={eachCMS.name}
                  className="cms__image absolute top-1/2 -translate-y-1/2"
                />
                <p className="cms__name text-center text-sm absolute bottom-0">
                  {eachCMS.name}
                </p>
              </article>
            ))}
          </section>
        </section>
      </div>

      <div className="third-row-container flex justify-center">
        <section className="third-row flex-1">
          <h2 className="lib-frameworks-title txt-dark pt-[2rem]">
            Designverktyg
          </h2>
          <section className="lib-frameworks-icons flex gap-[2rem] justify-center">
            {designTools.map((designTool) => (
              <article className="lib-framework-icon sm:w-[40px] md:w-[60px] flex flex-col items-center">
                <img
                  key={designTool.name}
                  src={designTool.icon}
                  alt={designTool.name}
                  className="lib-framework__image"
                />
                <p className="lib-framework__name text-center text-sm">
                  {designTool.name}
                </p>
              </article>
            ))}
          </section>
        </section>

        <section className="fourth-row flex-1">
          <h2 className="lib-frameworks-title txt-dark pt-[2rem]">
            JavaScript-runtime
          </h2>
          <section className="lib-frameworks-icons flex gap-[2rem] justify-center">
            {runtime.map((eachRuntime) => (
              <article className="lib-framework-icon sm:w-[40px] md:w-[60px] flex flex-col items-center">
                <img
                  key={eachRuntime.name}
                  src={eachRuntime.icon}
                  alt={eachRuntime.name}
                  className="lib-framework__image w-full h-auto object-contain"
                />
                <p className="lib-framework__name text-center text-sm">
                  {eachRuntime.name}
                </p>
              </article>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};

export default Experience;
