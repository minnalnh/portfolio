type ThesisImageProps = {
  image: string;
  alt: string;
};

const ThesisImage = ({ image, alt }: ThesisImageProps) => {
  return (
    <img
      src={image}
      alt={alt}
      className="thesis-image w-full h-full flex-shrink-0 object-cover"
    />
  );
};

export default ThesisImage;
