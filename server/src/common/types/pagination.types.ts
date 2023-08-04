export interface Pagination<T> {
  totalPages: number;
  currentPage: number;
  data: T[]
}