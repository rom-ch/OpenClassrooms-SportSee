import User from "../models/user";
import UserInfos from "../models/userInfos";
import KeyData from "../models/keyData";

export default async function fetchData() {
  try {
    const res = await fetch("mockedData.json");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return new User(
      data.id,
      data.userId,
      new UserInfos(
        data.userInfos.firstName,
        data.userInfos.lastName,
        data.userInfos.age
      ),
      data.todayScore,
      new KeyData(
        data.keyData.calorieCount,
        data.keyData.proteinCount,
        data.keyData.carbohydrateCount,
        data.keyData.lipidCount
      )
    );

  } catch (err) {
    console.error("Error fetching data", err.message);
  }
}
