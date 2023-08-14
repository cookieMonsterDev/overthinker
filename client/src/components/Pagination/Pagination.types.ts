export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  leftFromCurrent?: number;
  rightFromCurrent?: number;
}