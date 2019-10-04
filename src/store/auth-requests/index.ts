import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';


import {
  Actions as registration,
  ActionTypes as registrationActionTypes,
  epic as registrationEpic,
  reducer as registrationReducer,
} from './nested-states/registration';

import {
  Actions as login,
  ActionTypes as loginActionTypes,
  epic as loginEpic,
  reducer as loginReducer,
} from './nested-states/login';

import {
  Actions as getMe,
  ActionTypes as getMeActionTypes,
  epic as getMeEpic,
  reducer as getMeReducer,
} from './nested-states/get-me';


export const Actions = {
  registration,
  login,
  getMe,
};

export const ActionTypes = {
  registrationActionTypes,
  loginActionTypes,
  getMeActionTypes,
};

export const reducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  getMe: getMeReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  registrationEpic,
  loginEpic,
  getMeEpic,
];

export type State = StateType<typeof reducer>;