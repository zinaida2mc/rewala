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


export const Actions = {
  registration,
  login,
};

export const ActionTypes = {
  registrationActionTypes,
  loginActionTypes,
};

export const reducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  registrationEpic,
  loginEpic,
];

export type State = StateType<typeof reducer>;