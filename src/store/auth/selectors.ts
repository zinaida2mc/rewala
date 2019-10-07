import { createSelector } from 'reselect';

import { RootState } from '../index';

import { AuthState } from './state';

export const getAuthState = (state: RootState) => state.auth;

export const getUserData = createSelector(
  getAuthState,
  (state: AuthState) => state.userData,
);

export const getCode = createSelector(
  getAuthState,
  (state: AuthState) => state.code,
);

export const getEmail = createSelector(
  getAuthState,
  (state: AuthState) => state.email,
);