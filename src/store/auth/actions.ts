import { action, ActionType } from 'typesafe-actions';

import { UserInput } from '../../shared/interfaces/registration';
import { LoginInput } from '../../shared/interfaces/login';
import { User } from '../../shared/interfaces/user';
import { ResetPasswordConfirmInput } from '../../shared/interfaces/resetPasswordConfirm';


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

  LOGOUT = 'LOGOUT',
  LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED',
  LOGOUT_FAILED = 'LOGOUT_FAILED',

  RESET_PASSWORD = 'RESET_PASSWORD',
  RESET_PASSWORD_SUCCEEDED = 'RESET_PASSWORD_SUCCEEDED',
  RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED',

  RESET_PASSWORD_CONFIRM_CODE = 'RESET_PASSWORD_CONFIRM_CODE',
  RESET_PASSWORD_CONFIRM_CODE_SUCCEEDED = 'RESET_PASSWORD_CONFIRM_CODE_SUCCEEDED',
  RESET_PASSWORD_CONFIRM_CODE_FAILED = 'RESET_PASSWORD_CONFIRM_CODE_FAILED',

  RESET_PASSWORD_CONFIRM = 'RESET_PASSWORD_CONFIRM',
  RESET_PASSWORD_CONFIRM_SUCCEEDED = 'RESET_PASSWORD_CONFIRM_SUCCEEDED',
  RESET_PASSWORD_CONFIRM_FAILED = 'RESET_PASSWORD_CONFIRM_FAILED',
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

  logout: () => action(ActionTypes.LOGOUT),
  logoutSucceeded: () => action(ActionTypes.LOGOUT_SUCCEEDED),
  logoutFailed: (payload?: any) => action(ActionTypes.LOGOUT_FAILED, payload),

  resetPassword: (payload: string) => action(ActionTypes.RESET_PASSWORD, payload),
  resetPasswordSucceeded: (payload?: any) => action(ActionTypes.RESET_PASSWORD_SUCCEEDED, payload),
  resetPasswordFailed: (payload?: any) => action(ActionTypes.RESET_PASSWORD_FAILED, payload),

  resetPasswordConfirmCode: (payload: string) => action(ActionTypes.RESET_PASSWORD_CONFIRM_CODE, payload),
  resetPasswordConfirmCodeSucceeded: (payload?: any) => action(ActionTypes.RESET_PASSWORD_CONFIRM_CODE_SUCCEEDED, payload),
  resetPasswordConfirmCodeFailed: (payload?: any) => action(ActionTypes.RESET_PASSWORD_CONFIRM_CODE_FAILED, payload),

  resetPasswordConfirm: (payload: ResetPasswordConfirmInput) => action(ActionTypes.RESET_PASSWORD_CONFIRM, payload),
  resetPasswordConfirmSucceeded: (payload?: any) => action(ActionTypes.RESET_PASSWORD_CONFIRM_SUCCEEDED, payload),
  resetPasswordConfirmFailed: (payload?: any) => action(ActionTypes.RESET_PASSWORD_CONFIRM_FAILED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
