import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes, { object } from "prop-types";
import "../styles/components/sessionsChart.scss";

function SessionsChart({ data }) {
  const labels = day => {
    if (day === 1) return "L";
    if (day === 2) return "M";
    if (day === 3) return "M";
    if (day === 4) return "J";
    if (day === 5) return "V";
    if (day === 6) return "S";
    if (day === 7) return "D";
  };

  return (
    <div className="wrapper">
      <div className="sessionsChart__title">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={labels}
            tick={{
              fill: "hsl(0, 0%, 100%, .5)",
              fontSize: "12px",
              fontWeight: "500",
            }}
          />
          <YAxis domain={["dataMin - 20", "dataMax + 50"]} hide />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth="2px"
            dot={false}
            activeDot={{
              stroke: "#FFFFFF",
              strokeWidth: 4,
              r: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="sessionsChart__weekend"></div>
    </div>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="sessionsChart__tooltip">
        <p>{`${payload[0].value}min`}</p>
      </div>
    );
  }
}

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  value: PropTypes.number,
};

export default SessionsChart;
