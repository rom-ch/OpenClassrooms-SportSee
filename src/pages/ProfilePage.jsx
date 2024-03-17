import { useEffect } from "react";
import ActivityChartWrapper from "../components/ActivityChartWrapper";
import CardChartWrapper from "../components/CardChartWrapper";
import NutrientCardWrapper from "../components/NutrientCardWrapper";
import "../styles/pages/profilePage.scss";

import { getUserSessions } from "../services/fetchData";

function ProfilePage() {
  useEffect(function () {
    async function fetchUserInfos() {
      const data = await getUserSessions(12);
      console.log(data);
    }

    fetchUserInfos();
  });

  return (
    <main className="main-profile">
      <div className="main-profile__header">
        <h1 className="main-profile__header-title">
          Bonjour <span>Thomas</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="main-profile__content">
        <div className="main-profile__content-charts">
          <ActivityChartWrapper />
          <CardChartWrapper />
        </div>
        <NutrientCardWrapper />
      </div>
    </main>
  );
}

export default ProfilePage;
