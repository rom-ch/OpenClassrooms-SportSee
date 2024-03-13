import ChartCard from "../components/ChartCard";
import "../styles/pages/profilePage.scss";
import GoalChart from "../components/GoalChart";
import SessionsChart from "../components/SessionsChart";

import fireIcon from "../assets/fire.svg";
import chickenIcon from "../assets/chicken.svg";
import appleIcon from "../assets/apple.svg";
import burgerIcon from "../assets/burger.svg";

import mainData from "../mockedData/user-main-data.json";
import sessionsData from "../mockedData/user-average-sessions.json";
import activityData from "../mockedData/user-activity.json";
import ActivityChart from "../components/ActivityChart";
import NutrientCard from "../components/NutrientCard";

import fetchData from "../services/fetchData";

function ProfilePage() {
  // async function createUser() {
  //   const userInstance = await fetchData();
  //   console.log(userInstance);
  // }

  // createUser();

  return (
    <main className="main-profile">
      <div className="main-profile__header">
        <h1 className="main-profile__header-title">
          Bonjour <span>Thomas</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="main-profile__content">
        <div className="main-profile__infos-charts">
          <div className="chart-activity__wrapper">
            <ActivityChart data={activityData[0].sessions} />
          </div>
          <div className="chart-card__wrapper">
            <ChartCard
              className="session"
              content={<SessionsChart data={sessionsData[0].sessions} />}
            />
            <ChartCard className="performance" />
            <ChartCard
              className="goal"
              content={<GoalChart data={mainData[0].todayScore} />}
            />
          </div>
        </div>
        <div className="nutrient-card__wrapper">
          <NutrientCard
            data={mainData[0].keyData.calorieCount}
            name="Calories"
            unit="kCal"
            icon={fireIcon}
          />
          <NutrientCard
            data={mainData[0].keyData.proteinCount}
            name="protéines"
            unit="g"
            icon={chickenIcon}
          />
          <NutrientCard
            data={mainData[0].keyData.carbohydrateCount}
            name="Glucides"
            unit="g"
            icon={appleIcon}
          />
          <NutrientCard
            data={mainData[0].keyData.lipidCount}
            name="Lipides"
            unit="g"
            icon={burgerIcon}
          />
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
