import DecorationFour from "../assets/images/decoration-4.png";

const Footer = () => {
  return (
    <footer className="footer mt-[5rem] txt-dark">
      <img src={DecorationFour} alt="" aria-hidden="true" />
      <section className="footer__background bg-blush py-[2rem] rounded-l">
        <p className="footer__info">Info</p>
      </section>
    </footer>
  );
};

export default Footer;
