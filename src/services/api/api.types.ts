import {GeneralApiProblem} from './api-problem';
import {TodaySchedule} from '@models/schedule/todaySchedule';
import {NextSchedule} from '@models/schedule/nextSchedule';
import {Place} from '@models/places/detailPlace';

export type GetTodayScheduleResult =
  | {kind: 'ok'; data: TodaySchedule}
  | GeneralApiProblem;

export type GetNextScheduleResult =
  | {kind: 'ok'; data: NextSchedule[]}
  | GeneralApiProblem;

export type GetDetailPlaceResult =
  | {kind: 'ok'; data: Place}
  | GeneralApiProblem;

export interface User {
  id: number;
  name: string;
}

export type GetUsersResult = {kind: 'ok'; users: User[]} | GeneralApiProblem;
export type GetUserResult = {kind: 'ok'; user: User} | GeneralApiProblem;
