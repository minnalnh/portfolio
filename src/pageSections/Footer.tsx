import DecorationFour from "../assets/images/decoration-4.png";
import GitHub from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer mt-[5rem] txt-dark">
      <img src={DecorationFour} alt="" aria-hidden="true" />
      <section className="footer__container flex justify-center gap-[3rem] lg:gap-[7rem] bg-blush py-[2rem] rounded-l">
        <a
          href="https://github.com/minnalnh"
          className="social bg-sand rounded-lg p-[.5rem] items-center flex flex-col"
        >
          <img
            src={GitHub}
            alt="GitHub:s logotyp"
            className="social__icon w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
          />
          <p className="social__name font-title size-desc">GitHub</p>
        </a>
        <a
          href="www.linkedin.com/in/minna-hedell-6a20b72b5"
          className="social flex flex-col items-center bg-sand rounded-lg p-[.5rem]"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn:s logotyp"
            className="social__icon w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
          />
          <p className="social__name font-title size-desc">LinkedIn</p>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
