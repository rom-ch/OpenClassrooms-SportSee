import NutrientCard from "./NutrientCard";
import mainData from "../mockedData/user-main-data.json";
import "../styles/components/nutrientCardWrapper.scss";

import fireIcon from "../assets/fire.svg";
import chickenIcon from "../assets/chicken.svg";
import appleIcon from "../assets/apple.svg";
import burgerIcon from "../assets/burger.svg";

function NutrientCardWrapper() {
  return (
    <div className="nutrient-card__wrapper">
      <NutrientCard
        data={mainData[0].keyData.calorieCount}
        name="Calories"
        unit="kCal"
        icon={fireIcon}
      />
      <NutrientCard
        data={mainData[0].keyData.proteinCount}
        name="protéines"
        unit="g"
        icon={chickenIcon}
      />
      <NutrientCard
        data={mainData[0].keyData.carbohydrateCount}
        name="Glucides"
        unit="g"
        icon={appleIcon}
      />
      <NutrientCard
        data={mainData[0].keyData.lipidCount}
        name="Lipides"
        unit="g"
        icon={burgerIcon}
      />
    </div>
  );
}

export default NutrientCardWrapper;
