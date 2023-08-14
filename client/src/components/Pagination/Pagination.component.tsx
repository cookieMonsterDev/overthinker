import { PaginationProps } from "./Pagination.types";
import styles from "./Pagination.module.scss";
import Link from "next/link";

export const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  leftFromCurrent = 3,
  rightFromCurrent = 3,
}) => {
  const start =
    currentPage - leftFromCurrent - 1 < 0
      ? 0
      : currentPage - leftFromCurrent - 1;
  const end =
    currentPage + rightFromCurrent > totalPages
      ? totalPages
      : currentPage + rightFromCurrent;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    start,
    end
  );

  return (
    <section className={styles.container}>
      <span
        className={styles.count}
      >{`Page ${currentPage} of ${totalPages}`}</span>
      {currentPage !== 1 && (
        <>
          {!pages.includes(1) && (
            <Link
              href={{ query: { page: 1 } }}
              className={styles.link_text}
              aria-label="First page"
            >
              « First
            </Link>
          )}
          <Link
            href={{
              query: { page: currentPage - 1 },
            }}
            className={styles.link_one_step}
            aria-label="Previous page"
          >
            «
          </Link>
        </>
      )}
      {pages.map((e) => (
        <Link
          href={{
            query: { page: e },
          }}
          key={e}
          className={
            currentPage === e ? styles.link_current : styles.link_number
          }
          aria-label={`Page ${e}`}
        >
          {e}
        </Link>
      ))}
      {!pages.includes(totalPages) && (
        <span className={styles.link_current}>...</span>
      )}
      {currentPage !== totalPages && (
        <>
          <Link
            href={{
              query: { page: currentPage + 1 },
            }}
            className={styles.link_one_step}
            aria-label="Next page"
          >
            »
          </Link>
          {!pages.includes(totalPages) && (
            <Link
              href={{ query: { page: totalPages } }}
              className={styles.link_text}
              aria-label="Last page"
            >
              Last »
            </Link>
          )}
        </>
      )}
    </section>
  );
};
