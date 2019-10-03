import { storageService } from './storage.service';

class AuthService {
  tokenKey = 'rewala-auth-token';

  getToken() {
    return storageService.getItem(this.tokenKey);
  }

  setToken(token: string) {
    return storageService.setItem(this.tokenKey, token);
  }

  removeToken() {
    return storageService.removeItem(this.tokenKey);
  }
}

export const authService = new AuthService();
