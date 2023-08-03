export interface Pagination<T> {
  totalPages: number;
  currentPage: number;
  users: T[]
}