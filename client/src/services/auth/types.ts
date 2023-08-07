export interface loginUserServisePayload {
  email: string;
  password: string;
}

export interface RegisterUserServisePayload extends loginUserServisePayload {
  username: string;
}

export interface PrivateUser {
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatarUrl: string | null;
  role: "USER" | "ADMIN";
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface AuthResponse {
  user: PrivateUser;
  token: string;
}
