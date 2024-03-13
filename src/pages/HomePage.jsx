import underConstructionIcon from "../assets/under-construction.svg";
import "../styles/pages/underConstruction.scss";

function HomePage() {
  return (
    <main className="main__homepage">
      <h1 className="construction__title">Page d&apos;accueil</h1>
      <img
        className="construction__img"
        src={underConstructionIcon}
        alt="Icône homme avec une pelle"
      />
      <h2 className="construction__subtitle">En construction</h2>
    </main>
  );
}

export default HomePage;
