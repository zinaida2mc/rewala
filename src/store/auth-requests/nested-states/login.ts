import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { authRequestsService } from '../service';
import { LoginInput } from '../../../shared/interfaces/login';

const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory<LoginInput, any, Error>(
  'LOGIN_REQUEST',
);

const epic: Epic = (actions$: Observable<Action>) => effect(actions$, (userInput) => authRequestsService.login(userInput));

export { epic, reducer, Actions, ActionTypes };