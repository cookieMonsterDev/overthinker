export interface Me {
  _id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  bio: string|  null;
  avatarUrl: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  token: string;
}