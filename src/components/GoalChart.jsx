import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../styles/components/goalChart.scss";

function GoalChart({ data }) {
  data = [{ name: "score", value: data * 100 }];

  return (
    <div className="wrapper">
      <div className="goalchart__title">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width="100%" height="100%">
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={80}
            outerRadius={90}
            cornerRadius={10}
            startAngle={90}
            endAngle={90 + (data[0].value * 360) / 100}
            fill="#FF0000"
            stroke="none"
          >
            <Cell stroke="" fill="red" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="goalchart__legend">
        <span className="goalchart__legend-score">{data[0].value}%</span>
        <span className="goalchart__legend-text">de votre</span>
        <span className="goalchart__legend-text">objectif</span>
      </div>
    </div>
  );
}

GoalChart.propTypes = {
  data: PropTypes.number,
};

export default GoalChart;
