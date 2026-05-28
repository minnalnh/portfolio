import {
  techniques,
  runtime,
  designTools,
  libFrameworks,
  cms,
} from "../components/data/techniques";
import { useIsVisible } from "../hooks/useIsVisible";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section className="tech bg-sand shadow-black/30 shadow-lg rounded-2xl txt-dark">
      <h2 className="tech__title pt-[1rem] pb-[1rem] txt-dark font-title size-sub-title">
        Programmeringsspråk / webbtekniker
      </h2>
      <section
        className={`tech__icons flex flex-wrap gap-[2rem] font-desc justify-center transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        ref={ref}
      >
        {techniques.map((technique) => (
          <article
            key={technique.name}
            className="tech__icon w-[80px] h-[100px] flex flex-col items-center"
          >
            <img
              src={technique.icon}
              alt={`Logotypen för ${technique.name}`}
              className="tech__image w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
            />
            <p className="tech__name text-center text-md">{technique.name}</p>
          </article>
        ))}
      </section>
      <hr />

      <div className="second-row-container flex justify-center">
        <section className="lib-framework first-row flex-1">
          <h2 className="lib-framework__title pt-[1rem] pb-[1rem] txt-dark font-title size-sub-title">
            Bibliotek / frameworks
          </h2>
          <section
            className={`lib-framework__icons flex flex-wrap gap-[2rem] font-desc justify-center transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            ref={ref}
          >
            {libFrameworks.map((libFramework) => (
              <article
                key={libFramework.name}
                className="lib-framework__icon w-[80px] h-[100px] flex flex-col items-center"
              >
                <img
                  src={libFramework.icon}
                  alt={`Logotypen för ${libFramework.name}`}
                  className="lib-framework__image w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                />
                <p className="lib-framework__name text-center text-md">
                  {libFramework.name}
                </p>
              </article>
            ))}
          </section>
        </section>

        <section className="cms second-row flex-1 border-s">
          <h2 className="cms-title pt-[1rem] pb-[1rem] txt-dark size-sub-title font-title">
            CMS
          </h2>
          <section
            className={`cms__icons flex flex-wrap gap-[2rem] font-desc justify-center transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            ref={ref}
          >
            {cms.map((eachCMS) => (
              <article
                key={eachCMS.name}
                className="cms__icon w-[80px] h-[100px] flex flex-col items-center"
              >
                <img
                  src={eachCMS.icon}
                  alt={`Logotypen för ${eachCMS.name}`}
                  className="cms__image w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                />
                <p className="cms__name text-center text-md">{eachCMS.name}</p>
              </article>
            ))}
          </section>
        </section>
      </div>
      <hr />

      <div className="third-row-container flex justify-center">
        <section className="design-tool third-row flex-1 border-e">
          <h2 className="design-tool__title pt-[1rem] pb-[1rem] txt-dark font-title size-sub-title">
            Designverktyg
          </h2>
          <section
            className={`design-tool__icons flex flex-wrap font-desc gap-[2rem] justify-center transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {designTools.map((designTool) => (
              <article
                key={designTool.name}
                className="design-tool__icon w-[80px] h-[100px] flex flex-col items-center"
              >
                <img
                  src={designTool.icon}
                  alt={`Logotypen för ${designTool.name}`}
                  className="design-tool__image w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                />
                <p className="design-tool__name text-center text-md">
                  {designTool.name}
                </p>
              </article>
            ))}
          </section>
        </section>

        <section className="each-runtime fourth-row flex-1">
          <h2 className="each-runtime__title pt-[1rem] pb-[1rem] txt-dark font-title size-sub-title">
            JavaScript-runtime
          </h2>
          <section
            className={`each-rumtime__icons flex flex-wrap font-desc gap-[2rem] justify-center transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {runtime.map((eachRuntime) => (
              <article
                key={eachRuntime.name}
                className="each-runtime__icon w-[80px] h-[100px] flex flex-col items-center"
              >
                <img
                  src={eachRuntime.icon}
                  alt={`Logotypen för ${eachRuntime.name}`}
                  className="each-runtime__image w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                />
                <p className="each-runtime__name text-center text-md">
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
