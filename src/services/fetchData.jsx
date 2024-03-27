import DataClass from "./DataClass";
import MockedDataClass from "./mockedDataClass";

export default class fetchData {
  constructor(id) {
    this.id = id;
  }

  async getData() {
    if (process.env.NODE_ENV === 'production') {
      const getData = new DataClass(this.id);
      const mainInfos = await getData.getUserMainInfos();
      const activity = await getData.getUserActivity();
      const sessions = await getData.getUserSessions();
      const performance = await getData.getUserPerformance();
      return { mainInfos, activity, sessions, performance };
    }
    if (process.env.NODE_ENV === 'development') {
      const getMockedData = new MockedDataClass(this.id);
      const mainInfos = await getMockedData.getUserMainInfos();
      const activity = await getMockedData.getUserActivity();
      const sessions = await getMockedData.getUserSessions();
      const performance = await getMockedData.getUserPerformance();
      return { mainInfos, activity, sessions, performance };
    }
  }
}
