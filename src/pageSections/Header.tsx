import profilePic from "../assets/images/profile-pic.png";
import staircase from "../assets/images/staircase.png";
import ScrollButton from "../components/ScrollButton";
import headerBackground from "../assets/images/header-background.png";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="header justify-center w-full relative min-h-screen">
      <div className="header__container flex items-center justify-center">
        {/* bakgrundsbild */}
        <img
          src={headerBackground}
          alt="Bakgrundsbild för headern"
          className="absolute inset-0 w-full h-full"
        />

        <div className="header-container absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-center h-[20rem] mt-[10rem] w-[80%] justify-self-center">
          {/* profilbild */}
          <motion.img
            src={profilePic}
            alt="Profilbild"
            className="header__profile-pic object-contain w-[10rem]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />

          {/* centrerad grid-container */}
          <div className="header__grid-container grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto] items-start place-items-center ml-[1rem]">
            {/* dekoration */}
            <motion.img
              src={staircase}
              alt="Textdekoration"
              className="header__detail row-span-3 col-start-1 object-contain max-h-[7rem] invisible lg:visible"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            />

            {/* titel */}
            <motion.h1
              className="text-2xl font-semibold txt-sand col-start-2 col-span-3 row-start-2 leading-tight"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              {" "}
              Minna Hedell
            </motion.h1>

            {/* undertitel */}
            <motion.h2
              className="text-sm txt-sand col-start-2 col-span-4 row-start-3 leading-tight"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              – Junior webbutvecklare med tillgänglighetsintresse
            </motion.h2>
          </div>
        </div>
      </div>
      <ScrollButton />
    </header>
  );
};

export default Header;
