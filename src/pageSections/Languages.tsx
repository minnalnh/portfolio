import { MessageCircle } from "lucide-react";

const Languages = () => {
  return (
    <section className="languages flex bg-fair rounded-2xl my-[2rem] py-[3rem] px-[3rem] inline-block relative txt-dark">
      <MessageCircle size={30} strokeWidth={1.5} className="absolute right-0" />
      <section className="languages__text-container">
        <h2 className="languages__title txt-dark">Språk</h2>
        <p className="languages__swedish">Svenska – modersmål</p>
        <p className="languages__english">
          Engelska – mycket goda kunskaper i tal och skrift
        </p>
      </section>
    </section>
  );
};

export default Languages;
