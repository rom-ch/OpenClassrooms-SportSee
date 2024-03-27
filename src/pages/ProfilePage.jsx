import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityChartWrapper from "../components/ActivityChartWrapper";
import CardChartWrapper from "../components/CardChartWrapper";
import NutrientCardWrapper from "../components/NutrientCardWrapper";
import "../styles/pages/profilePage.scss";

import fetchData from "../services/fetchData";

function ProfilePage() {
  const [userMainInfos, setUserMainInfos] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userSessions, setUserSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();
  id = +id || 12;

  useEffect(
    function () {
      const getData = async () => {
        try {
          const data = new fetchData(id);
          const { mainInfos, activity, sessions, performance } =
            await data.getData();
          setUserMainInfos(mainInfos);
          setUserActivity(activity);
          setUserSessions(sessions);
          setUserPerformance(performance);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      getData();
    },
    [id]
  );

  if (loading) return <div>Chargement</div>;

  if (error) return <div>Erreur</div>;

  return (
    <main className="main-profile">
      <div className="main-profile__header">
        <h1 className="main-profile__header-title">
          Bonjour <span>{userMainInfos?.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="main-profile__content">
        <div className="main-profile__content-charts">
          <ActivityChartWrapper data={userActivity.sessions} error={error} />
          <CardChartWrapper
            sessions={userSessions.sessions}
            performance={userPerformance}
            todayScore={userMainInfos.todayScore}
          />
        </div>
        <NutrientCardWrapper data={userMainInfos.keyData} />
      </div>
    </main>
  );
}

export default ProfilePage;
