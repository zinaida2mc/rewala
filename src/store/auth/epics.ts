import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, ignoreElements, map } from 'rxjs/operators';
import { transferActionEpicFactory } from '../utils/transfer-action';
import navService from '../../shared/services/nav.service';

import { RootActions } from '../index';
import { Actions, ActionTypes } from './actions';
import { Actions as AuthRequestActions, ActionTypes as AuthRequestsActionTypes } from '../auth-requests';
import { authService } from '../../shared/services/auth.service';



export const redirectOnSetToken: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.SET_ACCESS_TOKEN),
    map(  (action) => {
      if (!action.payload) {
        return navService.navigate('AuthNavigator');
      }
      return navService.navigate('MainNavigator');
    }),
    ignoreElements(),
  );



export const registrationEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.REGISTRATION),
    map((action) => {
      return AuthRequestActions.registration.action(action.payload);
    }),
  );

export const registrationSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.registrationActionTypes.ACTION_SUCCEEDED,
  Actions.registrationSucceeded,
);

export const registrationFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.registrationActionTypes.ACTION_FAILED,
  Actions.registrationFailed,
);


export const redirectOnRegistrationSucceededEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.REGISTRATION_SUCCEEDED),
    map((action) => {
        const { authToken } = action.payload;
        authService.setToken(authToken);
        navService.navigate('MainNavigator')
    }),
    ignoreElements(),
  );



export const loginEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN),
    map((action) => {
      return AuthRequestActions.login.action(action.payload);
    }),
  );

export const loginSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.loginActionTypes.ACTION_SUCCEEDED,
  Actions.loginSucceeded,
);

export const loginFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.loginActionTypes.ACTION_FAILED,
  Actions.loginFailed,
);


export const redirectOnLoginSucceededEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN_SUCCEEDED),
    map((action) => {
      const { authToken } = action.payload;
      authService.setToken(authToken);
      navService.navigate('MainNavigator')
    }),
    ignoreElements(),
  );



export const getMeEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.GET_ME),
    map(() => {
      return AuthRequestActions.getMe.action();
    }),
  );

export const getMeSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.getMeActionTypes.ACTION_SUCCEEDED,
  Actions.getMeSucceeded,
);

export const getMeFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.getMeActionTypes.ACTION_FAILED,
  Actions.getMeFailed,
);



export const logoutEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.LOGOUT),
    map(() => {
      return AuthRequestActions.logout.action();
    }),
  );

export const logoutSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.logoutActionTypes.ACTION_SUCCEEDED,
  Actions.logoutSucceeded,
);

export const logoutFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.logoutActionTypes.ACTION_FAILED,
  Actions.logoutFailed,
);

export const redirectOnLogoutSucceededEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.LOGOUT_SUCCEEDED),
    map(() => {
      authService.removeToken();
      navService.navigate('AuthNavigator')
    }),
    ignoreElements(),
  );

export const resetPasswordEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.RESET_PASSWORD),
    map((action) => {
      return AuthRequestActions.resetPassword.action(action.payload.email);
    }),
  );

export const resetPasswordSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.resetPasswordActionTypes.ACTION_SUCCEEDED,
  Actions.resetPasswordSucceeded,
);

export const resetPasswordFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.resetPasswordActionTypes.ACTION_FAILED,
  Actions.resetPasswordFailed,
);


export const redirectOnResetPasswordSucceededEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.RESET_PASSWORD_SUCCEEDED),
    map(() => {
      navService.navigate('MainNavigator') //next screen 'Enter Code' instead of MainNavigator
    }),
    ignoreElements(),
  );

export const epics = [
  redirectOnSetToken,

  registrationEpic,
  registrationSucceededEpic,
  registrationFailedEpic,

  redirectOnRegistrationSucceededEpic,

  loginEpic,
  loginSucceededEpic,
  loginFailedEpic,

  redirectOnLoginSucceededEpic,

  getMeEpic,
  getMeSucceededEpic,
  getMeFailedEpic,

  logoutEpic,
  logoutSucceededEpic,
  logoutFailedEpic,

  redirectOnLogoutSucceededEpic,

  resetPasswordEpic,
  resetPasswordSucceededEpic,
  resetPasswordFailedEpic,

  redirectOnResetPasswordSucceededEpic,
];
