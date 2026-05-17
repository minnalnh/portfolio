type ThesisImageProps = {
  image: string;
};

const ThesisImage = ({ image }: ThesisImageProps) => {
  return (
    <img
      src={image}
      alt="Min kandidatuppsats"
      className="thesis-image flex-shrink-0 object-contain"
    />
  );
};

export default ThesisImage;
