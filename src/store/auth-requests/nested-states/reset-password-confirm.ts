import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { authRequestsService } from '../service';
import { ResetPasswordConfirmInput } from '../../../shared/interfaces/resetPasswordConfirm';


const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory<ResetPasswordConfirmInput, any, Error>(
  'RESET_PASSWORD_CONFIRM_REQUEST',
);

const epic: Epic = (actions$: Observable<Action>) => effect(actions$, (userInput) => authRequestsService.resetPasswordConfirm(userInput));

export { epic, reducer, Actions, ActionTypes };