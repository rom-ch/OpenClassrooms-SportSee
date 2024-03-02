import "../styles/layout/header.scss";
import sportseeLogo from "../assets/sportsee-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={sportseeLogo} alt="Sportsee logo" />
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <a className="navbar__menu-item-link" href="#">
              Accueil
            </a>
          </li>
          <li className="navbar__menu-item">
            <a className="navbar__menu-item-link" href="#">
              Profil
            </a>
          </li>
          <li className="navbar__menu-item">
            <a className="navbar__menu-item-link" href="#">
              Réglage
            </a>
          </li>
          <li className="navbar__menu-item">
            <a className="navbar__menu-item-link" href="#">
              Communauté
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
