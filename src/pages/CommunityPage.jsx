import underConstructionIcon from "../assets/under-construction.svg";
import "../styles/pages/underConstruction.scss";

function CommunityPage() {
  return (
    <main className="main__community-page">
      <h1 className="construction__title">Page Communauté</h1>
      <img
        className="construction__img"
        src={underConstructionIcon}
        alt="Icone homme avec une pelle"
      />
      <h2 className="construction__subtitle">En construction</h2>
    </main>
  );
}

export default CommunityPage;
