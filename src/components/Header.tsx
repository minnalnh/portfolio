import profilePic from '../assets/images/profile-pic.png';
import staircase from '../assets/images/staircase.png';

const Header = () => {
    return (
        <div className="header mx-auto text-white">
            <img src="assets/images/profile-pic.png" alt="" />
            <img src={profilePic} alt="Profilbild" className="header__profile-pic w-32 h-32" />
            <div className="header__title-container">
                <img src={staircase} alt="Textdekoration" />
                <h1 className="header__title">Minna Hedell</h1>
                <h2 className="header__sub-title">– Junior webbutvecklare med tillgänglighetsintresse</h2>
            </div>
        <div className="header__search-bar-container ml-auto flex items-center gap-2 border rounded border-black mt-3 mr-2 px-3 py-1 w-fit">
        </div>
    </div>
    );
}

export default Header;