import GalleryCarousel from "../components/GalleryCarousel";
import DoodleTwo from "../assets/images/doodle-2.png";

const Gallery = () => {
  return (
    <section className="gallery bg-sage rounded-2xl py-[2rem] flex flex-col gap-[3rem]">
      <img src={DoodleTwo} alt="" aria-hidden="true" />
      <h2 className="gallery__title font-title size-title">Mina projekt</h2>
      <GalleryCarousel />
    </section>
  );
};

export default Gallery;
