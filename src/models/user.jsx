import UserInfos from "./userInfos";
import KeyData from "./keyData";

export default class User {
  constructor(data) {
    this.id = data.id;
    this.userInfos = new UserInfos(
      data.userInfos.firstName,
      data.userInfos.lastName,
      data.userInfos.age
    );
    this.todayScore = data.todayScore;
    this.keyData = new KeyData(
      data.keyData.calorieCount,
      data.keyData.proteinCount,
      data.keyData.carbohydrateCount,
      data.keyData.lipidCount
    );
  }
}
