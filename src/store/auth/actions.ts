import { action, ActionType } from 'typesafe-actions';

import { UserInput } from '../../shared/interfaces/registration';
import { LoginInput } from '../../shared/interfaces/login';
import { User } from '../../shared/interfaces/user';


export enum ActionTypes {
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',

  REGISTRATION = 'REGISTRATION',
  REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED',
  REGISTRATION_FAILED = 'REGISTRATION_FAILED',

  LOGIN = 'LOGIN',
  LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',

  GET_ME = 'GET_ME',
  GET_ME_SUCCEEDED = 'GET_ME_SUCCEEDED',
  GET_ME_FAILED = 'GET_ME_FAILED',
}

export const Actions = {
  setAccessToken: (token?: string) => action(ActionTypes.SET_ACCESS_TOKEN, token),

  registration: (payload: UserInput) => action(ActionTypes.REGISTRATION, payload),
  registrationSucceeded: (payload: any) => action(ActionTypes.REGISTRATION_SUCCEEDED, payload),
  registrationFailed: (payload?: any) => action(ActionTypes.REGISTRATION_FAILED, payload),

  login: (payload: LoginInput) => action(ActionTypes.LOGIN, payload),
  loginSucceeded: (payload: any) => action(ActionTypes.LOGIN_SUCCEEDED, payload),
  loginFailed: (payload?: any) => action(ActionTypes.LOGIN_FAILED, payload),

  getMe: () => action(ActionTypes.GET_ME),
  getMeSucceeded: (payload: User) => action(ActionTypes.GET_ME_SUCCEEDED, payload),
  getMeFailed: (payload?: any) => action(ActionTypes.GET_ME_FAILED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
