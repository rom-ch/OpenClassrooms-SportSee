import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
} from "recharts";

function PerformanceChart({ data }) {
  const updatedData = data.data.map(el => ({
    value: el.value,
    kind: data.kind[el.kind],
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={updatedData} outerRadius="70%">
        <PolarGrid stroke="#FFFFFF" radialLines={false} />
        <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} />
        <Radar fill="#FF0101" fillOpacity={0.7} dataKey="value" />
      </RadarChart>
    </ResponsiveContainer>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.object,
};

export default PerformanceChart;
