import PropTypes from "prop-types";
import "../styles/components/sideMenuButton.scss";

function SideMenuButton({ icon }) {
  return (
    <button className="side-menu__button">
      <img src={icon} alt="" className="side-menu__button-img" />
    </button>
  );
}

SideMenuButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default SideMenuButton;
