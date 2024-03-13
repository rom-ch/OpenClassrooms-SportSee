import SideMenuButton from "./SideMenuButton";
import "../styles/layout/sideMenu.scss";

import yogaLogo from "../assets/yoga.svg";
import swimLogo from "../assets/swim.svg";
import bikeLogo from "../assets/bike.svg";
import weightLogo from "../assets/weight.svg";

function SideMenu() {
  return (
    <aside className="side-menu">
      <div className="side-menu__button-wrapper">
        <SideMenuButton icon={yogaLogo} />
        <SideMenuButton icon={swimLogo} />
        <SideMenuButton icon={bikeLogo} />
        <SideMenuButton icon={weightLogo} />
      </div>
      <p className="side-menu__copyright">Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default SideMenu;
