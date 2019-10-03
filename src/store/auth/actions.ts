import { action, ActionType } from 'typesafe-actions';

import { UserInput } from '../../shared/interfaces/registration';

export enum ActionTypes {
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',

  REGISTRATION = 'REGISTRATION',
  REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED',
  REGISTRATION_FAILED = 'REGISTRATION_FAILED'
}

export const Actions = {
  setAccessToken: (token?: string) => action(ActionTypes.SET_ACCESS_TOKEN, token),

  registration: (payload: UserInput) => action(ActionTypes.REGISTRATION, payload),
  registrationSucceeded: (payload: any) => action(ActionTypes.REGISTRATION_SUCCEEDED, payload),
  registrationFailed: (payload?: any) => action(ActionTypes.REGISTRATION_FAILED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
