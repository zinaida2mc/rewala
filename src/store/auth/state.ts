import { Phone } from '../../shared/interfaces/phone';
import { User } from '../../shared/interfaces/user';

export interface AuthState {
  isAuthorized: boolean | null;
  authorizedUserId: string | null;
  token: string | null;
  phone: Phone | null;
  userData: User | null;
  code: string | null;
}