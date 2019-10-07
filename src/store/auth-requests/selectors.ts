import { createSelector } from 'reselect';

import { RootState } from '../index';
import { State } from './index';

export const getState = (state: RootState) => state.authRequest;


export const getGetMeRequestState = createSelector(
  getState,
  (state: State) => state.getMe,
);

export const getIsGetMeLoading = createSelector(
  getGetMeRequestState,
  (state) => state.loading,
);