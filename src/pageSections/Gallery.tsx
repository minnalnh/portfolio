import GalleryCarousel from "../components/GalleryCarousel";
import DoodleTwo from "../assets/images/doodle-2.png";

const Gallery = () => {
  return (
    <section className="gallery bg-sage rounded-2xl py-[2rem] flex flex-col gap-[3rem]">
      <h2 className="gallery__title">Mina projekt</h2>
      <img src={DoodleTwo} alt="" />
      <GalleryCarousel />
    </section>
  );
};

export default Gallery;
