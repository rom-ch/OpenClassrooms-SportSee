import { NavLink } from "react-router-dom";
import sportseeLogo from "../assets/sportsee-logo.svg";
import "../styles/layout/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={sportseeLogo} alt="Sportsee logo" />
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <NavLink to="/accueil" className="navbar__menu-item-link" href="#">
              Accueil
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink to="/profile" className="navbar__menu-item-link" href="#">
              Profil
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink to="/settings" className="navbar__menu-item-link" href="#">
              Réglage
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink
              to="/community"
              className="navbar__menu-item-link"
              href="#"
            >
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
