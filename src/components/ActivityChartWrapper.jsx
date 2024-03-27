import ActivityChart from "../components/ActivityChart";
import PropTypes, { object } from "prop-types";
import "../styles/components/activityChartWrapper.scss";

function ActivityChartWrapper({ data }) {
  return (
    <div className="chart-activity__wrapper">
      <ActivityChart data={data} />
    </div>
  );
}

ActivityChartWrapper.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
};

export default ActivityChartWrapper;
