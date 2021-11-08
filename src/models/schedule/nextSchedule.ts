import {Instance, SnapshotOut, flow, types} from 'mobx-state-tree';
import {withEnvironment} from '../extensions/with-environment';
import {ScheduleApi} from '@api/schedule-api';
import dayjs from 'dayjs';

export const NextScheduleModel = types.model('NextSchedule').props({
  placeId: types.number,
  id: types.identifierNumber,
  schedule: types.Date,
  title: types.string,
  timeStart: types.Date,
  timeEnd: types.Date,
});

type NextScheduleType = Instance<typeof NextScheduleModel>;
export interface NextSchedule extends NextScheduleType {}
type NextScheduleSnapshotType = SnapshotOut<typeof NextScheduleModel>;
export interface NextScheduleSnapshot extends NextScheduleSnapshotType {}
export const createNextScheduleDefaultModel = () =>
  types.maybeNull(NextScheduleModel);

export const NextScheduleStoreModel = types
  .model('NextScheduleStore')
  .props({
    data: types.optional(types.union(types.array(NextScheduleModel)), []),
    fetching: false,
    error: types.string,
  })
  .extend(withEnvironment)
  .views(self => ({
    get nextScheduleData() {
      return self.data ?? null;
    },
    get nextScheduleFetchingStatus() {
      return self.fetching;
    },
    upcomingSchedule(date) {
      return self.data.filter(
        nextSchedule =>
          dayjs(nextSchedule.schedule).format('YYYY-MM-DD') === date,
      );
    },
  }))
  .actions(self => ({
    getNextScheduleRequest: () => {
      self.fetching = true;
      self.error = '';
    },
    getNextScheduleSuccess: (nextScheduleSnapshot: NextScheduleSnapshot[]) => {
      self.data = nextScheduleSnapshot;
      self.fetching = false;
    },
    getNextScheduleFailure: () => {
      self.error = 'No Data Found';
      self.fetching = false;
    },
  }))
  .actions(self => ({
    getNextSchedule: flow(function* getTodaySchedule() {
      self.getNextScheduleRequest();
      const scheduleApi = new ScheduleApi(self.environment.api);
      const result = yield scheduleApi.getNextSchedule();

      if (result.kind === 'ok') {
        self.getNextScheduleSuccess(result.data);
      } else {
        __DEV__ && console.tron.log(result.kind);
        self.getNextScheduleFailure();
      }
    }),
  }));

type NextScheduleStoreType = Instance<typeof NextScheduleStoreModel>;
export interface NextScheduleStore extends NextScheduleStoreType {}
type NextScheduleStoreSnapshotType = SnapshotOut<typeof NextScheduleStoreModel>;
export interface NextScheduleStoreSnapshot
  extends NextScheduleStoreSnapshotType {}
export const createNextScheduleStoreDefaultModel = () =>
  types.optional(NextScheduleStoreModel, {
    data: [],
    fetching: false,
    error: '',
  });
