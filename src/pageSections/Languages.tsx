import { MessageCircle } from "lucide-react";

const Languages = () => {
  return (
    <section className="languages shadow-black/30 shadow-lg flex bg-fair rounded-2xl my-[2rem] pb-[2rem] pt-[1rem] px-[3rem] inline-block txt-dark">
      <section className="languages__text-container">
        <div className="languages__title-container justify-center items-center flex gap-[.5rem]">
          <h2 className="languages__title txt-dark font-title size-sub-title">
            Språk
          </h2>
          <MessageCircle size={25} strokeWidth={1.5} className="mb-[1rem]" />
        </div>
        <h3 className="languages__swedish font-desc size-desc pb-[1rem]">
          Svenska – modersmål
        </h3>
        <h3 className="languages__english font-desc size-desc">
          Engelska – mycket goda kunskaper i tal och skrift
        </h3>
      </section>
    </section>
  );
};

export default Languages;
