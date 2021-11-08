import {Instance, SnapshotOut, flow, types} from 'mobx-state-tree';
import {withEnvironment} from '../extensions/with-environment';
import {ScheduleApi} from '@api/schedule-api';

export const TodayScheduleModel = types.model('TodaySchedule').props({
  placeId: types.number,
  id: types.identifierNumber,
  title: types.string,
  timeStart: types.Date,
  timeEnd: types.Date,
  clockIn: types.maybeNull(types.Date),
  clockOut: types.maybeNull(types.Date),
});

type TodayScheduleType = Instance<typeof TodayScheduleModel>;
export interface TodaySchedule extends TodayScheduleType {}
type TodayScheduleSnapshotType = SnapshotOut<typeof TodayScheduleModel>;
export interface TodayScheduleSnapshot extends TodayScheduleSnapshotType {}
export const createTodayScheduleDefaultModel = () =>
  types.maybeNull(TodayScheduleModel);

export const TodayScheduleStoreModel = types
  .model('TodayScheduleStore')
  .props({
    data: types.maybeNull(types.union(TodayScheduleModel)),
    fetching: false,
    error: types.string,
  })
  .extend(withEnvironment)
  .views(self => ({
    get todayScheduleData() {
      return self.data ?? null;
    },
    get todayScheduleFetchingStatus() {
      return self.fetching;
    },
  }))
  .actions(self => ({
    getTodayScheduleRequest: () => {
      (self.fetching = true), (self.error = '');
    },
    getTodayScheduleSuccess: (todayScheduleSnapshot: TodayScheduleSnapshot) => {
      self.data = todayScheduleSnapshot;
      self.fetching = false;
    },
    getTodayScheduleFailure: () => {
      self.error = 'No Data Found';
      self.fetching = false;
    },
  }))
  .actions(self => ({
    getTodaySchedule: flow(function* getTodaySchedule() {
      self.getTodayScheduleRequest();
      const scheduleApi = new ScheduleApi(self.environment.api);
      const result = yield scheduleApi.getTodaySchedule();

      if (result.kind === 'ok') {
        self.getTodayScheduleSuccess(result.data);
      } else {
        __DEV__ && console.tron.log(result.kind);
        self.getTodayScheduleFailure();
      }
    }),
  }));

type TodayScheduleStoreType = Instance<typeof TodayScheduleStoreModel>;
export interface TodayScheduleStore extends TodayScheduleStoreType {}
type TodayScheduleStoreSnapshotType = SnapshotOut<
  typeof TodayScheduleStoreModel
>;
export interface TodayScheduleStoreSnapshot
  extends TodayScheduleStoreSnapshotType {}
export const createTodayScheduleStoreDefaultModel = () =>
  types.optional(TodayScheduleStoreModel, {
    data: null,
    fetching: false,
    error: '',
  });
