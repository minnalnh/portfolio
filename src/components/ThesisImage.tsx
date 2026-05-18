type ThesisImageProps = {
  image: string;
};

const ThesisImage = ({ image }: ThesisImageProps) => {
  return (
    <img
      src={image}
      alt="Sida ur min kandidatuppsats"
      className="thesis-image w-full h-full flex-shrink-0 object-cover"
    />
  );
};

export default ThesisImage;
