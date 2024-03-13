import underConstructionIcon from "../assets/under-construction.svg";
import "../styles/pages/underConstruction.scss";
import PropTypes from "prop-types";

function UnderConstructionPage({ title }) {
  return (
    <main className="main__homepage">
      <h1 className="construction__title">{title}</h1>
      <img
        className="construction__img"
        src={underConstructionIcon}
        alt="Icône homme avec une pelle"
      />
      <h2 className="construction__subtitle">En construction</h2>
    </main>
  );
}

UnderConstructionPage.propTypes = {
  title: PropTypes.string,
};

export default UnderConstructionPage;
