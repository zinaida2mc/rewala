export interface PhoneInput {
  number: string;
  prefix: string;
}

export interface Phone extends PhoneInput {
  _id: string;
}