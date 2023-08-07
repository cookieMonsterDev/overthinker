export interface PublicUser {
  _id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
