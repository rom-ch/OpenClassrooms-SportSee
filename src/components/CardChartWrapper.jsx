import ChartCard from "./ChartCard";
import GoalChart from "../components/GoalChart";
import SessionsChart from "../components/SessionsChart";
import "../styles/components/cardChartWrapper.scss";

import sessionsData from "../mockedData/user-average-sessions.json";
import mainData from "../mockedData/user-main-data.json";

function CardChartWrapper() {
  return (
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
  );
}

export default CardChartWrapper;
