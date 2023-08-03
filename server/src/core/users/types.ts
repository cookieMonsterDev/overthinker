import { User } from "./entities/user.entity";

export interface Users {
  totalPages: number;
  currentPage: number;
  users: User[]
}