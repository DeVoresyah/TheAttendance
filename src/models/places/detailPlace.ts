import {Instance, SnapshotOut, flow, types} from 'mobx-state-tree';
import {withEnvironment} from '../extensions/with-environment';
import {PlaceApi} from '@api/place-api';

const PlaceCoordinate = types.model({
  latitude: types.number,
  longitude: types.number,
});

export const PlaceModel = types.model('Place').props({
  id: types.identifierNumber,
  thumbnail: types.string,
  title: types.string,
  address: types.string,
  coordinate: PlaceCoordinate,
});

type PlaceModelType = Instance<typeof PlaceModel>;
export interface Place extends PlaceModelType {}
type PlaceSnapshotType = SnapshotOut<typeof PlaceModel>;
export interface PlaceSnapshot extends PlaceSnapshotType {}
export const createPlaceDefaultModel = () => types.optional(PlaceModel, {});

export const DetailPlaceStoreModel = types
  .model('DetailPlaceStore')
  .props({
    data: types.union(types.maybeNull(PlaceModel)),
    fetching: false,
    error: '',
  })
  .extend(withEnvironment)
  .views(self => ({
    get detailPlaceData() {
      return self.data ?? null;
    },
    get detailPlaceFetchingStatus() {
      return self.fetching;
    },
  }))
  .actions(self => ({
    getDetailPlaceRequest: () => {
      self.fetching = true;
      self.error = '';
    },
    getDetailPlaceSuccess: (placeSnapshot: PlaceSnapshot) => {
      self.fetching = false;
      self.data = placeSnapshot;
    },
    getDetailPlaceFailure: error => {
      self.fetching = false;
      self.error = error;
    },
  }))
  .actions(self => ({
    getDetailPlace: flow(function* getDetailPlace(id: number) {
      self.getDetailPlaceRequest();
      const placeApi = new PlaceApi(self.environment.api);
      const result = yield placeApi.getDetailPlace(id);

      try {
        self.getDetailPlaceSuccess(result.data);
      } catch (e) {
        __DEV__ && console.tron.log(result.kind, e);
        self.getDetailPlaceFailure(result.kind);
      }
    }),
  }));

type DetailPlaceStoreType = Instance<typeof DetailPlaceStoreModel>;
export interface DetailPlaceStore extends DetailPlaceStoreType {}
type DetailPlaceStoreSnapshotType = SnapshotOut<typeof DetailPlaceStoreModel>;
export interface DetailPlaceStoreSnapshot
  extends DetailPlaceStoreSnapshotType {}
export const createDetailPlaceStoreDefaultModel = () =>
  types.optional(DetailPlaceStoreModel, {
    data: null,
    fetching: false,
    error: '',
  });
