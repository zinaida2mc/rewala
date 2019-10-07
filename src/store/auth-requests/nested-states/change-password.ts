import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { authRequestsService } from '../service';
import { ChangePasswordInput } from '../../../shared/interfaces/changePassword';


const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory<ChangePasswordInput, any, Error>(
  'CHANGE_PASSWORD_REQUEST',
);

const epic: Epic = (actions$: Observable<Action>) => effect(actions$, (userInput) => authRequestsService.changePassword(userInput));

export { epic, reducer, Actions, ActionTypes };