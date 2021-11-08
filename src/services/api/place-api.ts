import {ApiResponse} from 'apisauce';
import {Api} from './api';
import {GetDetailPlaceResult} from './api.types';
import {getGeneralApiProblem} from './api-problem';

export class PlaceApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async getDetailPlace(id: number): Promise<GetDetailPlaceResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(
        `places/${id}`,
      );

      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) {
          return problem;
        }
      }

      return {kind: 'ok', data: response.data};
    } catch (e) {
      __DEV__ && console.tron.log(e.message);
      return {kind: 'bad-data'};
    }
  }
}
