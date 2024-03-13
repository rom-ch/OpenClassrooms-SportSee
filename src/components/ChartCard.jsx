import PropTypes from "prop-types";
import "../styles/components/chartCard.scss";

function ChartCard({ className, content }) {
  return <div className={`chart-card ${className}`}>{content}</div>;
}

ChartCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object,
};

export default ChartCard;
