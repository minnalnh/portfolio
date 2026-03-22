import profilePic from '../assets/images/profile-pic.png';
import staircase from '../assets/images/staircase.png';

const Header = () => {
  return (
    <div className="header flex justify-center items-start w-full bg-sage-dark py-8 pb-8">
      {/* Centrerad grid-container som inte täcker hela headern */}

      <div className="flex">
        {/* profilbild */}
        <img
          src={profilePic}
          alt="Profilbild"
          className="header__profile-pic object-contain"
        />

      <div className="grid grid-cols-[auto_auto_auto] grid-rows-2 gap-x-0 items-start place-items-center max-w-[600px] mx-auto mt-10">
        {/* dekoration */}
        <img
          src={staircase}
          alt="Textdekoration"
          className="header__detail row-start-2 col-start-1 row-span-2 w-10 h-10 object-contain"
        />

        {/* titel */}
        <h1 className="text-2xl font-semibold txt-sand col-start-2 col-span-3 row-start-2 leading-tight">
          Minna Hedell
        </h1>

        {/* undertitel */}
        <h2 className="text-sm txt-sand col-start-2 col-span-4 row-start-3 leading-tight">
          – Junior webbutvecklare med tillgänglighetsintresse
        </h2>

      </div>
      </div>
    </div>
  );
}

export default Header;