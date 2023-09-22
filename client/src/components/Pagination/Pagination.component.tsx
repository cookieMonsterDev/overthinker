import { PaginationProps } from "./Pagination.types";
import Link from "next/link";
import cn from "classnames";

export const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  leftFromCurrent = 3,
  rightFromCurrent = 3,
  className,
  style,
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

  const ctn = cn("p-4 flex justify-center items-center gap-4", className);

  return (
    <section className={ctn} style={style}>
      <span className="px-4 py-2 bg-ultra_light_primary text-light_primary font-semibold rounded-[0.5rem]">{`Page ${currentPage} of ${totalPages}`}</span>
      {currentPage !== 1 && (
        <>
          {!pages.includes(1) && (
            <Link
              href={{ query: { page: 1 } }}
              className="px-4 py-2 font-semibold text-light_primary rounded-[0.5rem] duration-300 hover:bg-primary hover:text-secondary"
              aria-label="First page"
            >
              « First
            </Link>
          )}
          <Link
            href={{
              query: { page: currentPage - 1 },
            }}
            className="px-4 py-2 bg-ultra_light_primary text-light_primary font-semibold rounded-[0.5rem] duration-300 hover:bg-primary hover:text-secondary"
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
            currentPage === e
              ? "cursor-default px-4 py-2 bg-ultra_light_primary text-light_primary font-semibold rounded-[0.5rem]"
              : "px-4 py-2 text-light_primary font-semibold rounded-[0.5rem] duration-300 hover:bg-primary hover:text-secondary"
          }
          aria-label={`Page ${e}`}
        >
          {e}
        </Link>
      ))}
      {!pages.includes(totalPages) && (
        <span className="cursor-default px-4 py-2 bg-ultra_light_primary text-light_primary font-semibold rounded-[0.5rem]">
          ...
        </span>
      )}
      {currentPage !== totalPages && (
        <>
          <Link
            href={{
              query: { page: currentPage + 1 },
            }}
            className="px-4 py-2 bg-ultra_light_primary text-light_primary font-semibold rounded-[0.5rem] duration-300 hover:bg-primary hover:text-secondary"
            aria-label="Next page"
          >
            »
          </Link>
          {!pages.includes(totalPages) && (
            <Link
              href={{ query: { page: totalPages } }}
              className="px-4 py-2 font-semibold text-light_primary rounded-[0.5rem] duration-300 hover:bg-primary hover:text-secondary"
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
