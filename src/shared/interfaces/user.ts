import { ProfileInput } from './registration';


export enum UserStatus {
  DELETED = 'DELETED',
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}

interface Roles {
  admin: boolean;
  regular: boolean;
}

export interface User {
  _id: string;
  email: string;
  authToken: string | null;
  status?: UserStatus;
  roles?: Roles;
  profile: ProfileInput
}
