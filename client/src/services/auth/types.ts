export interface loginUserServisePayload {
  email: string;
  password: string;
}

export interface RegisterUserServisePayload extends loginUserServisePayload {
  username: string;
}
