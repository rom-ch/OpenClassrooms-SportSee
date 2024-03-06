import PropTypes from "prop-types";
import "../styles/components/nutrientCard.scss";

function NutrientCard({ data, name, unit, icon }) {
  return (
    <div className="nutrient-card">
      <div className="nutrient-card__img">
        <img src={icon} alt="" />
      </div>
      <div className="nutrient-card__content">
        <div className="nutrient-card__content-value">
          {data}
          {unit}
        </div>
        <div className="nutrient-card__content-name">{name}</div>
      </div>
    </div>
  );
}

NutrientCard.propTypes = {
  data: PropTypes.number,
  name: PropTypes.string,
  unit: PropTypes.string,
  icon: PropTypes.string,
};

export default NutrientCard;
