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

import {
  Actions as logout,
  ActionTypes as logoutActionTypes,
  epic as logoutEpic,
  reducer as logoutReducer,
} from './nested-states/logout';

import {
  Actions as resetPassword,
  ActionTypes as resetPasswordActionTypes,
  epic as resetPasswordEpic,
  reducer as resetPasswordReducer,
} from './nested-states/reset-password';

import {
  Actions as resetPasswordConfirmCode,
  ActionTypes as resetPasswordConfirmCodeActionTypes,
  epic as resetPasswordConfirmCodeEpic,
  reducer as resetPasswordConfirmCodeReducer,
} from './nested-states/reset-password-confirm-code';

import {
  Actions as resetPasswordConfirm,
  ActionTypes as resetPasswordConfirmActionTypes,
  epic as resetPasswordConfirmEpic,
  reducer as resetPasswordConfirmReducer,
} from './nested-states/reset-password-confirm';

import {
  Actions as changePassword,
  ActionTypes as changePasswordActionTypes,
  epic as changePasswordEpic,
  reducer as changePasswordReducer,
} from './nested-states/change-password';

export const Actions = {
  registration,
  login,
  getMe,
  logout,
  resetPassword,
  resetPasswordConfirmCode,
  resetPasswordConfirm,
  changePassword,
};

export const ActionTypes = {
  registrationActionTypes,
  loginActionTypes,
  getMeActionTypes,
  logoutActionTypes,
  resetPasswordActionTypes,
  resetPasswordConfirmCodeActionTypes,
  resetPasswordConfirmActionTypes,
  changePasswordActionTypes,
};

export const reducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  getMe: getMeReducer,
  logout: logoutReducer,
  resetPassword: resetPasswordReducer,
  resetPasswordConfirmCode: resetPasswordConfirmCodeReducer,
  resetPasswordConfirm: resetPasswordConfirmReducer,
  changePassword: changePasswordReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  registrationEpic,
  loginEpic,
  getMeEpic,
  logoutEpic,
  resetPasswordEpic,
  resetPasswordConfirmCodeEpic,
  resetPasswordConfirmEpic,
  changePasswordEpic,
];

export type State = StateType<typeof reducer>;