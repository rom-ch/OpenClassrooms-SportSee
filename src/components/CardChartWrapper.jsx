import PropTypes, { object } from "prop-types";
import ChartCard from "./ChartCard";
import GoalChart from "../components/GoalChart";
import SessionsChart from "../components/SessionsChart";
import "../styles/components/cardChartWrapper.scss";
import PerformanceChart from "./PerformanceChart";

function CardChartWrapper({ sessions, performance, todayScore }) {
  return (
    <div className="chart-card__wrapper">
      <ChartCard
        className="session"
        content={<SessionsChart data={sessions} />}
      />
      <ChartCard
        className="performance"
        content={<PerformanceChart data={performance} />}
      />
      <ChartCard className="goal" content={<GoalChart data={todayScore} />} />
    </div>
  );
}

CardChartWrapper.propTypes = {
  sessions: PropTypes.arrayOf(object).isRequired,
  performance: PropTypes.object,
  todayScore: PropTypes.number,
};

export default CardChartWrapper;
