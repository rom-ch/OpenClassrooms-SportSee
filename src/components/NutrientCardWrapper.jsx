import PropTypes from "prop-types";
import NutrientCard from "./NutrientCard";
import "../styles/components/nutrientCardWrapper.scss";

import fireIcon from "../assets/fire.svg";
import chickenIcon from "../assets/chicken.svg";
import appleIcon from "../assets/apple.svg";
import burgerIcon from "../assets/burger.svg";

function NutrientCardWrapper({ data }) {
  return (
    <div className="nutrient-card__wrapper">
      <NutrientCard
        data={data.calorieCount}
        name="Calories"
        unit="kCal"
        icon={fireIcon}
      />
      <NutrientCard
        data={data.proteinCount}
        name="protéines"
        unit="g"
        icon={chickenIcon}
      />
      <NutrientCard
        data={data.carbohydrateCount}
        name="Glucides"
        unit="g"
        icon={appleIcon}
      />
      <NutrientCard
        data={data.lipidCount}
        name="Lipides"
        unit="g"
        icon={burgerIcon}
      />
    </div>
  );
}

NutrientCardWrapper.propTypes = {
  data: PropTypes.object,
};

export default NutrientCardWrapper;
