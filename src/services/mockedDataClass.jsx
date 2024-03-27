import UserMainInfos from "../models/UserMainInfos";
import UserActivity from "../models/UserActivity";
import UserSessions from "../models/UserSessions";
import UserPerformance from "../models/UserPerformance";

export default class MockedDataClass {
  constructor(id) {
    this.id = id;
  }

  async getUserMainInfos() {
    try {
      const res = await fetch(`/data/mockedData.json`);
      let data = await res.json();
      data = data.USER_MAIN_DATA.filter(el => el.id === this.id);
      return new UserMainInfos(data[0]);
    } catch (err) {
      throw new Error("Erreur lors du chargement des données");
    }
  }

  async getUserActivity() {
    try {
      const res = await fetch(`/data/mockedData.json`);
      let data = await res.json();
      data = data.USER_ACTIVITY.filter(el => el.userId === this.id);
      return new UserActivity(data[0]);
    } catch (err) {
      throw new Error("Erreur lors du chargement des données");
    }
  }

  async getUserSessions() {
    try {
      const res = await fetch(`/data/mockedData.json`);
      let data = await res.json();
      data = data.USER_AVERAGE_SESSIONS.filter(el => el.userId === this.id);
      return new UserSessions(data[0]);
    } catch (err) {
      throw new Error("Erreur lors du chargement des données");
    }
  }

  async getUserPerformance() {
    try {
      const res = await fetch(`/data/mockedData.json`);
      let data = await res.json();
      data = data.USER_PERFORMANCE.filter(el => el.userId === this.id);
      return new UserPerformance(data[0]);
    } catch (err) {
      throw new Error("Erreur lors du chargement des données");
    }
  }
}
