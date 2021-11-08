import {ApiResponse} from 'apisauce';
import {Api} from './api';
import {GetTodayScheduleResult, GetNextScheduleResult} from './api.types';
import {getGeneralApiProblem} from './api-problem';

export class ScheduleApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async getTodaySchedule(): Promise<GetTodayScheduleResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get('today');

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

  async getNextSchedule(): Promise<GetNextScheduleResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get('next');

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
