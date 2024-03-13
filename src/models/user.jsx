import UserInfos from "./userInfos";
import KeyData from "./keyData";

export default class User {
  constructor(
    id,
    userId,
    userInfos,
    todayScore,
    keyData
    // sessionsActivity,
    // sessionsLength,
    // kind,
    // dataKind
  ) {
    this.id = id;
    this.userId = userId;
    this.userInfos = new UserInfos(
      userInfos.firstName,
      userInfos.lastName,
      userInfos.age
    );
    this.todayScore = todayScore;
    this.keyData = new KeyData(
      keyData.calorieCount,
      keyData.proteinCount,
      keyData.carbohydrateCount,
      keyData.lipidCount
    );
    // this.sessionsActivity = new SessionsActivity();
    // this.sessionsLength = new SessionsLength();
    // this.sessionLength = new Kind();
    // this.dataKind = new DataKind();
  }
}
