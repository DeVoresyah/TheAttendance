import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {
  createNextScheduleStoreDefaultModel,
  createTodayScheduleStoreDefaultModel,
} from '@models/schedule';
import {createDetailPlaceStoreDefaultModel} from '@models/places';

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model('RootStore').props({
  todayScheduleStore: createTodayScheduleStoreDefaultModel(),
  nextScheduleStore: createNextScheduleStoreDefaultModel(),
  detailPlaceStore: createDetailPlaceStoreDefaultModel(),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
