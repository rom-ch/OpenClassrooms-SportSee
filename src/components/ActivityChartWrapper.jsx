import ActivityChart from "../components/ActivityChart";
import '../styles/components/activityChartWrapper.scss';
import activityData from "../mockedData/user-activity.json";

function ActivityChartWrapper() {
  return (
    <div className="chart-activity__wrapper">
      <ActivityChart data={activityData[0].sessions} />
    </div>
  );
}

export default ActivityChartWrapper;
