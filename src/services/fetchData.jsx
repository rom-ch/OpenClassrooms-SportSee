import User from "../models/UserMainInfos";
import UserActivity from "../models/UserActivity";
import UserSessions from "../models/UserSessions";
import UserPerformance from "../models/UserPerformance";

const getUserInfos = async id => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}`);
    const data = await res.json();
    return new User(data.data);
  } catch (err) {
    console.log(err);
  }
};

const getUserActivity = async id => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}/activity`);
    const data = await res.json();
    return new UserActivity(data.data);
  } catch (err) {
    console.log(err);
  }
};

const getUserSessions = async id => {
  try {
    const res = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    const data = await res.json();
    return new UserSessions(data.data);
  } catch (err) {
    console.log(err);
  }
};

const getUserPerformance = async id => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}/performance`);
    const data = await res.json();
    return new UserPerformance(data.data);
  } catch (err) {
    console.log(err);
  }
};

export { getUserInfos, getUserActivity, getUserSessions, getUserPerformance };
