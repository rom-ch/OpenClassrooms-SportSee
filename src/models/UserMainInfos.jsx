import UserInfos from "./UserInfos";
import KeyData from "./KeyData";

export default class UserMainInfos {
  constructor(data) {
    this.id = data.id;
    this.userInfos = new UserInfos(data.userInfos);
    this.todayScore = data.todayScore;
    this.keyData = new KeyData(data.keyData);
  }
}
