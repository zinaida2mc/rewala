import { Phone } from '../../shared/interfaces/phone';

export interface AuthState {
  isAuthorized: boolean | null;
  authorizedUserId: string | null;
  token: string | null;
  phone: Phone | null;
}