import UserMainInfos from "../models/UserMainInfos";
import UserActivity from "../models/UserActivity";
import UserSessions from "../models/UserSessions";
import UserPerformance from "../models/UserPerformance";

const BASE_URL = "http://localhost:3000";

export default class DataClass {
  constructor(id) {
    this.id = id;
  }

  async getUserMainInfos() {
    try {
      const res = await fetch(`${BASE_URL}/user/${this.id}`);
      const data = await res.json();
      return new UserMainInfos(data.data);
    } catch (err) {
      throw new Error("Erreur lors du chargement des données");
    }
  }

  async getUserActivity() {
    try {
      const res = await fetch(`${BASE_URL}/user/${this.id}/activity`);
      const data = await res.json();
      return new UserActivity(data.data);
    } catch (err) {
      throw new Error("Erreur lors du chargement des données");
    }
  }

  async getUserSessions() {
    try {
      const res = await fetch(`${BASE_URL}/user/${this.id}/average-sessions`);
      const data = await res.json();
      return new UserSessions(data.data);
    } catch (err) {
      throw new Error("Erreur lors du chargement des données");
    }
  }
  async getUserPerformance() {
    try {
      const res = await fetch(`${BASE_URL}/user/${this.id}/performance`);
      const data = await res.json();
      return new UserPerformance(data.data);
    } catch (err) {
      throw new Error("Erreur lors du chargement des données");
    }
  }
}
