import profilePic from "../assets/images/profile-pic.png";
import staircase from "../assets/images/staircase.png";
import ScrollButton from "../components/ScrollButton";
import headerBackground from "../assets/images/header-background.png";

const Header = () => {
  return (
    <header className="header flex justify-center w-full min-h-[40vh] relative">
      <div className="header__container flex items-center justify-center">
        {/* bakgrundsbild */}
        <img
          src={headerBackground}
          alt="Bakgrundsbild för headern"
          className="w-full h-auto object-contain aria-hidden"
        />

        <div className="header-container absolute inset-0 z-10 flex items-center justify-center h-[20rem] mt-[10rem] w-[80%] justify-self-center">
          {/* profilbild */}
          <img
            src={profilePic}
            alt="Profilbild"
            className="header__profile-pic object-contain w-[10rem]"
          />

          {/* centrerad grid-container */}
          <div className="header__grid-container grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto] items-start place-items-center ml-[1rem]">
            {/* dekoration */}
            <img
              src={staircase}
              alt="Textdekoration"
              className="header__detail row-span-3 col-start-1 object-contain max-h-[7rem]"
            />

            {/* titel */}
            <h1 className="text-2xl font-semibold txt-sand col-start-2 col-span-3 row-start-2 leading-tight">
              {" "}
              Minna Hedell
            </h1>

            {/* undertitel */}
            <h2 className="text-sm txt-sand col-start-2 col-span-4 row-start-3 leading-tight">
              – Junior webbutvecklare med tillgänglighetsintresse
            </h2>
          </div>
        </div>
      </div>
      <ScrollButton />
    </header>
  );
};

export default Header;
