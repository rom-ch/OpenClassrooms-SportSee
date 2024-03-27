import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import PropTypes, { object } from "prop-types";
import "../styles/components/activityChart.scss";

function ActivityChart({ data }) {
  return (
    <div className="wrapper wrapper__activityChart">
      <div className="activityChart__legend">
        <h3 className="activityChart__legend-title">Activité quotidienne</h3>
        <ul className="activityChart__legend-list">
          <li>
            <span className="dot"></span>Poids (kg)
          </li>
          <li>
            <span className="dot dot-red"></span>Calories brûlées (kCal)
          </li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#DEDEDE"
            vertical={false}
          />
          <XAxis
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount={3}
            interval={0}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 100", "dataMax + 10"]}
            hide={true}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={8}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={8}
            radius={[4, 4, 0, 0]}
          />
          <Tooltip
            content={<CustomTooltip />}
            offset={10}
            cursor={{ fill: "#C4C4C480" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="activityChart__tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
}

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default ActivityChart;
